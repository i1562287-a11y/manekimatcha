

## i18n: Переключатель языков EN / PT / ES

### Подход

Лёгкая i18n без внешних библиотек — JSON-словари + React Context. Язык определяется автоматически по `navigator.language`, сохраняется в `localStorage`. Переключатель в navbar.

### Архитектура

```text
src/i18n/
  locales/
    en.json    ← все строки сайта
    pt.json
    es.json
  LanguageContext.tsx   ← контекст + хук useTranslation()
```

**LanguageContext** предоставляет:
- `t(key)` — получить строку по ключу (с fallback на EN)
- `locale` — текущий язык
- `setLocale(lang)` — сменить язык

### Словари

Все текстовые строки из ~12 компонентов (Hero, Navbar, Products, WhySection, TrustBlock, TrustStrip, BatchBadge, Compliance, JapanTrust, WhoWeServe, Contact, Footer, CartDrawer, Pricing) выносятся в JSON. Ключи — плоские, по секциям:

```json
{
  "hero.tagline": "Direct Import · Japan",
  "hero.headline": "From Japanese farms to your matcha latte.",
  "hero.cta_samples": "Request Samples",
  "hero.cta_products": "See Products",
  "nav.products": "Products & Pricing",
  "nav.compliance": "Compliance",
  "nav.contact": "Contact",
  "cart.title": "Your Order",
  "cart.empty": "Your order is empty.\nBrowse products above to get started.",
  ...
}
```

### Переключатель в Navbar

Компактный dropdown с флагами: 🇬🇧 EN / 🇵🇹 PT / 🇪🇸 ES — между навигацией и кнопкой "Request Samples". На мобильном — в мобильном меню.

### Автоопределение языка

При первом визите: `navigator.language` → если начинается с `pt` → PT, `es` → ES, иначе EN. Сохраняется в `localStorage('nokari-lang')`.

### Файлы

| Файл | Действие |
|------|----------|
| `src/i18n/locales/en.json` | Создать — все строки на EN |
| `src/i18n/locales/pt.json` | Создать — перевод на PT |
| `src/i18n/locales/es.json` | Создать — перевод на ES |
| `src/i18n/LanguageContext.tsx` | Создать — контекст, хук `useTranslation`, автодетект |
| `src/App.tsx` | Обернуть в `LanguageProvider` |
| `src/components/maneki/Navbar.tsx` | Добавить dropdown переключатель |
| Все секции (Hero, Products, WhySection, TrustBlock, TrustStrip, BatchBadge, Compliance, JapanTrust, WhoWeServe, Contact, Footer, CartDrawer, Pricing) | Заменить хардкод строки на `t('key')` |

### Объём

~13 компонентов на рефакторинг + 3 JSON-словаря (~150-200 ключей каждый). Без маршрутизации по URL — чисто клиентское переключение.

