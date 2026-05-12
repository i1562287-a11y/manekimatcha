const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram';
const FALLBACK_CHAT_ID = '190824720,-5168374810';

function getChatIds(): string[] {
  const raw = Deno.env.get('TELEGRAM_CHAT_IDS') || FALLBACK_CHAT_ID;
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

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
    const { name, email, rawText, business, vatNumber, outsidePortugal, country, phone, paymentMethod, items, totalExVat, vat, totalInclVat } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    let text: string;

    if (rawText) {
      text = rawText;
    } else {
      if (!items || items.length === 0) {
        return new Response(JSON.stringify({ error: 'Missing items' }), {
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

      text = [
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
    }

    const chatIds = getChatIds();
    const results: Array<{ chat_id: string; ok: boolean; error?: string }> = [];

    for (const chatId of chatIds) {
      try {
        const response = await fetch(`${GATEWAY_URL}/sendMessage`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': TELEGRAM_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML',
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          console.error(`Telegram send to ${chatId} failed [${response.status}]:`, data);
          results.push({ chat_id: chatId, ok: false, error: JSON.stringify(data) });
        } else {
          results.push({ chat_id: chatId, ok: true });
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : 'unknown';
        console.error(`Telegram send to ${chatId} threw:`, msg);
        results.push({ chat_id: chatId, ok: false, error: msg });
      }
    }

    const anyOk = results.some((r) => r.ok);
    if (!anyOk) {
      throw new Error(`All Telegram sends failed: ${JSON.stringify(results)}`);
    }

    return new Response(JSON.stringify({ success: true, results }), {
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
