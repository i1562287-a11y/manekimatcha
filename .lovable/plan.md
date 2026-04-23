

## План: переставити Products + виправити написання Houjicha

### 1. Перестановка секцій

В `src/pages/Index.tsx` перенести `<Products />` одразу після `<Hero />`. Решта порядку зберігається.

**Було:**
```text
Hero → JapanVsChina → BatchBadge → TrustBlock → TrustStrip → WhySection → Products → Pricing → ...
```

**Стане:**
```text
Hero → Products → JapanVsChina → BatchBadge → TrustBlock → TrustStrip → WhySection → Pricing → ...
```

### 2. Правильне написання "Houjicha"

За японською системою транслітерації Хепберна правильно: **Hōjicha** (з макроном) або спрощено **Hojicha** (без "u"). Написання "Houjicha" — це Nihon-shiki романізація, технічно валідна, але в західних спеціалізованих магазинах і Wikipedia стандарт — **Hojicha**.

Канджі: 焙じ茶 (hōjicha) — смажений зелений чай.

**Заміна по проєкту**: `Houjicha` → `Hojicha` (зберігаючи регістр де треба).

Файли з вживанням:
- `src/i18n/locales/en.json`, `es.json`, `pt.json` — всі ключі `products.houjicha.*` (значення, не ключі!) + згадки в FAQ / Pricing / інших місцях
- `src/components/maneki/Products.tsx` — `addItem("Houjicha", ...)` → `addItem("Hojicha", ...)` (це назва товару, що йде в кошик і Telegram/Stripe)
- `src/components/maneki/Pricing.tsx` — якщо є згадка
- alt-тексти зображень в `Products.tsx` (`"Houjicha powder..."`)

**Що НЕ чіпаємо:**
- Ключі i18n (`products.houjicha.name`) — це внутрішні ідентифікатори, переписувати ризиковано і не видно користувачу
- Імена файлів зображень (`houjicha-powder.png`, тека `assets/products/houjicha/`) — щоб не ламати імпорти
- Ім'я компонента-теки

### Файли

| Файл | Зміна |
|------|-------|
| `src/pages/Index.tsx` | Перемістити `<Products />` після `<Hero />` |
| `src/i18n/locales/en.json` | `Houjicha` → `Hojicha` у всіх values |
| `src/i18n/locales/es.json` | те саме |
| `src/i18n/locales/pt.json` | те саме |
| `src/components/maneki/Products.tsx` | `addItem("Houjicha", ...)` → `addItem("Hojicha", ...)` + alt-тексти |
| `src/components/maneki/Pricing.tsx` | замінити згадки якщо є |

### Нюанс з кошиком

Поточні відкриті кошики в localStorage у користувачів містять item з name `"Houjicha"`. Після зміни нові додавання будуть як `"Hojicha"` — старі залишаться як є до очищення кошика. Не критично (це лише рядок-назва), просто згадую.

### Обсяг

1 структурна правка + текстова заміна в ~5 файлах. Без міграцій, без правок edge-функцій.

