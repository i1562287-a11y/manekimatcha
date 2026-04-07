import { corsHeaders } from '@supabase/supabase-js/cors'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram';
const CHAT_ID = 190824720;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    const TELEGRAM_API_KEY = Deno.env.get('TELEGRAM_API_KEY');
    if (!TELEGRAM_API_KEY) throw new Error('TELEGRAM_API_KEY is not configured');

    const body = await req.json();
    const { name, business, vatNumber, outsidePortugal, country, email, phone, paymentMethod, items, totalExVat, vat, totalInclVat } = body;

    if (!name || !email || !items || items.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const itemLines = items
      .filter((i: any) => i.kg > 0)
      .map((i: any) => `  • ${i.kg} kg ${i.name} — €${(i.kg * i.pricePerKg).toFixed(2)}`)
      .join('\n');

    const vatLine = outsidePortugal
      ? `VAT: €0.00 (reverse charge)`
      : `VAT (23%): €${vat?.toFixed(2)}`;

    const text = [
      `🍵 <b>New Order Request</b>`,
      ``,
      `<b>Customer:</b> ${name}`,
      business ? `<b>Business:</b> ${business}` : null,
      vatNumber ? `<b>VAT/NIF:</b> ${vatNumber}` : null,
      outsidePortugal && country ? `<b>Country:</b> ${country} (EU reverse charge)` : null,
      `<b>Email:</b> ${email}`,
      phone ? `<b>Phone:</b> ${phone}` : null,
      `<b>Payment:</b> ${paymentMethod}`,
      ``,
      `<b>Items:</b>`,
      itemLines,
      ``,
      `Subtotal: €${totalExVat?.toFixed(2)}`,
      vatLine,
      `<b>Total: €${totalInclVat?.toFixed(2)}</b>`,
    ]
      .filter(Boolean)
      .join('\n');

    const response = await fetch(`${GATEWAY_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': TELEGRAM_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Telegram API failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error sending Telegram message:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
