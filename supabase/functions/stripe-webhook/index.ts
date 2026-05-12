import Stripe from "https://esm.sh/stripe@18.5.0";

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram';
const FALLBACK_CHAT_IDS = '190824720,-5168374810';

function getChatIds(): string[] {
  const raw = Deno.env.get('TELEGRAM_CHAT_IDS') || FALLBACK_CHAT_IDS;
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

async function editTelegram(messageId: number, text: string) {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  const TELEGRAM_API_KEY = Deno.env.get('TELEGRAM_API_KEY');
  if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY) return;

  const chatIds = getChatIds();
  const primary = chatIds[0];
  const others = chatIds.slice(1);

  try {
    await fetch(`${GATEWAY_URL}/editMessageText`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': TELEGRAM_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chat_id: primary, message_id: messageId, text, parse_mode: 'HTML' }),
    });
  } catch (e) {
    console.error('Telegram edit error:', e);
  }

  for (const chatId of others) {
    try {
      await fetch(`${GATEWAY_URL}/sendMessage`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': TELEGRAM_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      });
    } catch (e) {
      console.error(`Telegram send to ${chatId} error:`, e);
    }
  }
}

async function sendTelegram(text: string) {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  const TELEGRAM_API_KEY = Deno.env.get('TELEGRAM_API_KEY');
  if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY) return;

  for (const chatId of getChatIds()) {
    try {
      await fetch(`${GATEWAY_URL}/sendMessage`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': TELEGRAM_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      });
    } catch (e) {
      console.error(`Telegram send to ${chatId} error:`, e);
    }
  }
}

Deno.serve(async (req) => {
  try {
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    if (!stripeKey) throw new Error('STRIPE_SECRET_KEY not configured');

    const stripe = new Stripe(stripeKey, { apiVersion: '2025-08-27.basil' });

    const body = await req.text();
    const sig = req.headers.get('stripe-signature');

    let event: Stripe.Event;

    if (webhookSecret && sig) {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } else {
      // Fallback: parse without signature verification (for testing)
      event = JSON.parse(body) as Stripe.Event;
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const meta = session.metadata || {};
      const telegramMsgId = meta.telegram_message_id ? parseInt(meta.telegram_message_id) : null;

      const statusText = [
        `✅ <b>Payment Completed!</b>`,
        ``,
        `<b>Customer:</b> ${meta.customer_name || 'N/A'}`,
        meta.business ? `<b>Business:</b> ${meta.business}` : null,
        meta.vat_number ? `<b>VAT/NIF:</b> ${meta.vat_number}` : null,
        `<b>Email:</b> ${session.customer_email || session.customer_details?.email || 'N/A'}`,
        meta.phone ? `<b>Phone:</b> ${meta.phone}` : null,
        ``,
        `<b>Amount paid: €${((session.amount_total || 0) / 100).toFixed(2)}</b>`,
        `Stripe session: <code>${session.id}</code>`,
      ].filter(Boolean).join('\n');

      if (telegramMsgId) {
        await editTelegram(telegramMsgId, statusText);
      } else {
        await sendTelegram(statusText);
      }
    }

    if (event.type === 'checkout.session.expired') {
      const session = event.data.object as Stripe.Checkout.Session;
      const meta = session.metadata || {};
      const telegramMsgId = meta.telegram_message_id ? parseInt(meta.telegram_message_id) : null;

      const statusText = [
        `❌ <b>Payment Not Completed</b>`,
        ``,
        `<b>Customer:</b> ${meta.customer_name || 'N/A'}`,
        meta.business ? `<b>Business:</b> ${meta.business}` : null,
        `<b>Email:</b> ${session.customer_email || session.customer_details?.email || 'N/A'}`,
        meta.phone ? `<b>Phone:</b> ${meta.phone}` : null,
        ``,
        `<i>Customer started checkout but did not complete payment.</i>`,
      ].filter(Boolean).join('\n');

      if (telegramMsgId) {
        await editTelegram(telegramMsgId, statusText);
      } else {
        await sendTelegram(statusText);
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Webhook error:', error);
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), { status: 400 });
  }
});
