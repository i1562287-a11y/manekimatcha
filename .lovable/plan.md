

# Виправити редирект на Stripe Checkout

## Проблема
Stripe checkout URL повертається коректно (статус 200), але `window.location.href = data.url` не працює в iframe прев'ю Lovable — сторінка залишається білою. На опублікованому сайті це також може бути проблемою через cross-origin обмеження.

## Рішення
Замінити `window.location.href` на `window.open(data.url, '_blank')` — відкривати Stripe Checkout у новій вкладці. Це надійніше працює і в iframe, і на продакшні.

## Зміни

**`src/pages/Order.tsx`** (рядок 70):
- Замінити `window.location.href = data.url` на `window.open(data.url, '_blank')`
- Після відкриття нової вкладки — показати toast з повідомленням що оплата відкрита в новій вкладці
- Скинути стан `submitting` щоб кнопка знову стала активною

