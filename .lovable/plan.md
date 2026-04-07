

# Підключення Stripe

## Що потрібно

1. **Увімкнути Stripe інтеграцію** — я використаю вбудований інструмент Lovable для активації Stripe. Він автоматично запитає у тебе **Stripe Secret Key**.

2. **Де взяти ключ**: Зайди на [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys) → скопіюй **Secret key** (починається з `sk_test_` для тесту або `sk_live_` для продакшну).

## Наступні кроки після підключення

Після активації Stripe я отримаю детальні інструкції по інтеграції і зможу:
- Створити Edge Function `create-checkout-session` для оплати
- Створити `stripe-webhook` для відстеження статусу оплати
- Підключити кнопку "Pay Now" в OrderModal
- Надсилати статус оплати в Telegram бот

## Дія

Зараз я активую Stripe — тебе попросять вставити Secret Key.

