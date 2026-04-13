import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram';
const CHAT_ID = 190824720;

const MATCHA_PRICE_ID = 'price_1TJX58AevJyEcAFOUuSOJMqU';
const HOUJICHA_PRICE_ID = 'price_1TJX5MAevJyEcAFOKm7lr3vS';

async function sendTelegram(text: string): Promise<number | null> {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  const TELEGRAM_API_KEY = Deno.env.get('TELEGRAM_API_KEY');
  if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY) return null;

  try {
    const response = await fetch(`${GATEWAY_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': TELEGRAM_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    });
    const data = await response.json();
    return data?.result?.message_id ?? null;
  } catch (e) {
    console.error('Telegram send error:', e);
    return null;
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) throw new Error('STRIPE_SECRET_KEY not configured');

    const stripe = new Stripe(stripeKey, { apiVersion: '2025-08-27.basil' });

    const body = await req.json();
    const { name, email, business, vatNumber, outsidePortugal, country, phone, items } = body;

    if (!name || !email || !items || items.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const activeItems = items.filter((i: any) => i.kg > 0);
    if (activeItems.length === 0) {
      return new Response(JSON.stringify({ error: 'No items selected' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build Stripe line items
    const lineItems = activeItems.map((item: any) => {
      let priceId: string;
      if (item.name.toLowerCase() === 'matcha') {
        priceId = MATCHA_PRICE_ID;
      } else {
        priceId = HOUJICHA_PRICE_ID;
      }
      return { price: priceId, quantity: item.kg };
    });

    // Calculate totals for Telegram
    const totalExVat = activeItems.reduce((s: number, i: any) => s + i.kg * i.pricePerKg, 0);
    const vat = outsidePortugal ? 0 : totalExVat * 0.23;
    const totalInclVat = totalExVat + vat;

    const itemLines = activeItems
      .map((i: any) => `  • ${i.kg} kg ${i.name} — €${(i.kg * i.pricePerKg).toFixed(2)}`)
      .join('\n');

    const vatLine = outsidePortugal
      ? 'VAT: €0.00 (reverse charge)'
      : `VAT (23%): €${vat.toFixed(2)}`;

    // Send lead to Telegram BEFORE creating Stripe session
    const telegramText = [
      `💳 <b>New Payment Started</b>`,
      ``,
      `<b>Customer:</b> ${name}`,
      business ? `<b>Business:</b> ${business}` : null,
      vatNumber ? `<b>VAT/NIF:</b> ${vatNumber}` : null,
      outsidePortugal && country ? `<b>Country:</b> ${country} (EU reverse charge)` : null,
      `<b>Email:</b> ${email}`,
      phone ? `<b>Phone:</b> ${phone}` : null,
      `<b>Payment:</b> Card (Stripe)`,
      ``,
      `<b>Items:</b>`,
      itemLines,
      ``,
      `Subtotal: €${totalExVat.toFixed(2)}`,
      vatLine,
      `<b>Total: €${totalInclVat.toFixed(2)}</b>`,
      ``,
      `⏳ <i>Waiting for payment...</i>`,
    ].filter(Boolean).join('\n');

    const telegramMessageId = await sendTelegram(telegramText);

    // Check/create Stripe customer
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const origin = req.headers.get('origin') || 'https://nokarimatcha.lovable.app';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/payment-cancelled`,
      metadata: {
        customer_name: name,
        business: business || '',
        vat_number: vatNumber || '',
        outside_portugal: outsidePortugal ? 'true' : 'false',
        country: country || '',
        phone: phone || '',
        telegram_message_id: telegramMessageId?.toString() || '',
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Checkout session error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
