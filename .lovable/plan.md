

# Додати VAT/NIF та галочку "не з Португалії" в OrderModal

## Що додаємо

1. **Поле VAT / NIF** — текстове поле після "Business Name", placeholder: `PT123456789`
2. **Чекбокс "Company outside Portugal"** — якщо увімкнено:
   - Поле NIF стає "VAT Number (EU)" з placeholder `DE123456789` замість `PT...`
   - В Order Summary рядок VAT змінюється на "VAT: €0.00 (reverse charge)" — бо для EU B2B intra-community поставок VAT = 0%
   - Загальна сума перераховується без VAT
3. **Поле "Country"** — з'являється тільки коли чекбокс увімкнено (простий текстовий інпут)

## Куди збирати дані

Поки що бекенду немає — дані зберігаються тільки в `useState` і відправляються як toast. Коли підключимо Supabase, створимо таблицю `orders` з полями: name, business, email, phone, vat_number, is_eu_non_pt, country, payment_method, items (jsonb), total. Зараз — тільки фронтенд.

## Зміни у файлі

### `OrderModal.tsx`
- Додати до стейту `form`: `vatNumber: ""`, `outsidePortugal: false`, `country: ""`
- Після поля "Business Name" додати:
  - Чекбокс з лейблом "Company outside Portugal (EU reverse charge)"
  - Поле "VAT / NIF Number" (required)
  - Поле "Country" (з'являється тільки якщо чекбокс увімкнено)
- Перерахунок VAT: якщо `outsidePortugal === true` → `vat = 0`, показувати "Reverse charge — 0% VAT"
- В toast додати VAT номер

## Логіка VAT reverse charge
Це стандартна EU B2B практика: якщо покупець має EU VAT номер і він не з Португалії, продавець виставляє інвойс без VAT (reverse charge mechanism, Art. 138 EU VAT Directive). Покупець сам декларує VAT у своїй країні.

