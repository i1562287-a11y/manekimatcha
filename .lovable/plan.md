

## План: липкий CTA "Request Samples"

### Мобильный (<768px)
Добавить **fixed bottom bar** на всю ширину с кнопкой "Request Samples" + цена-якорь.
- Появляется после скролла за Hero (~600px), исчезает когда виден Contact-блок (через IntersectionObserver).
- Высота ~64px, фон `bg-cream/95 backdrop-blur` + `border-t border-ink/10` + лёгкая тень сверху.
- Кнопка `bg-matcha text-cream` на всю ширину минус padding.
- Слева мелким моно-лейблом: "From €0.47/cup" — даёт контекст почему стоит кликнуть.
- Учесть safe-area-inset-bottom для iPhone (`pb-[env(safe-area-inset-bottom)]`).

```text
┌─────────────────────────────────┐
│ FROM €0.47/CUP  [Request Samples]│  ← fixed bottom
└─────────────────────────────────┘
```

### Десктоп (≥768px) — моё предложение

**Вариант: floating pill в правом нижнем углу** (рекомендую).
- Компактная "таблетка" position:fixed bottom-6 right-6.
- Белый/кремовый фон с тенью + matcha-кнопка внутри.
- Появляется после Hero, прячется в Contact.
- Не перекрывает контент (как навбар сверху), не такой агрессивный как full-width bar.
- Можно добавить иконку 🍵 или стрелку.

```text
                          ┌──────────────────┐
                          │ 🍵 Request Samples│  ← floating
                          └──────────────────┘
```

Альтернативы (хуже):
- Sticky навбар уже есть → дублирующий CTA снизу избыточен на десктопе → но на длинной странице рука уходит от навбара. Floating pill решает.
- Full-width bottom bar на десктопе — слишком навязчиво для B2B-эстетики бренда.

### Видимость

Логика появления (общая для mobile+desktop):
- Скрыт пока в Hero (id="hero")
- Появляется после Hero
- Скрывается когда виден Contact (id="contact") — там уже есть форма, не надо дублировать
- Плавный fade in/out (opacity transition 300ms)

### Файлы

| Файл | Изменение |
|------|-----------|
| `src/components/maneki/StickyCTA.tsx` | **Новый** — компонент с IntersectionObserver, рендерит mobile bar и desktop pill |
| `src/pages/Index.tsx` | Импорт + вставить перед `<Footer />` |
| `src/i18n/locales/{en,pt,es}.json` | +1 ключ `sticky.price_anchor` ("From €0.47/cup" / переводы) |

### Объём

1 новый компонент + 1 правка Index + 3 ключа в словари. Никаких правок навбара или существующих секций.

