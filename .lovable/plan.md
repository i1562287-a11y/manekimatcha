

## План: FAQ блок для Nokari Matcha

### Где разместить

**Рекомендую: между `Compliance` и `JapanTrust`** (после блока с документами, перед философией Японии).

Почему:
- Compliance отвечает на формальные вопросы → FAQ закрывает оставшиеся практические сомнения покупателя
- Идёт перед эмоциональным `JapanTrust` (shinrai/genzen/chokusetsu) — логика "сначала факты, потом доверие"
- Перед Contact'ом покупатель уже без сомнений → выше конверсия в заявку

Альтернативы (хуже):
- После Hero — слишком рано, человек ещё не знает продукт
- Перед Footer — слишком поздно, утомлённый читатель пропустит

### Меню

Добавить пункт **FAQ** в navbar между `Compliance` и `Contact`:
`Products & Pricing · Compliance · FAQ · Contact · [Request Samples]`

На мобильном: тот же порядок в выпадающем меню.

### Структура блока

4 категории как accordion (раскрывающиеся):
1. **Product & Quality** — 5 вопросов
2. **For Cafés & Operations** — 5 вопросов  
3. **Documents & Compliance** — 3 вопроса
4. **Trust & Partnership** — 3 вопроса

Используем существующий компонент `src/components/ui/accordion.tsx` (Radix).

```text
┌─ FAQ Section ──────────────────────────────┐
│                                            │
│  FAQ                                       │
│  Everything your purchasing manager...     │
│  No registration. No sales call...         │
│                                            │
│  ── Product & Quality ────────────────     │
│  ▸ What's the difference between JP/CN?   │
│  ▸ What is a Batch ID?                    │
│  ...                                       │
│                                            │
│  ── For Cafés & Operations ──────────      │
│  ▸ Do you provide an SOP?                 │
│  ...                                       │
└────────────────────────────────────────────┘
```

### Дизайн

- Кремовый фон секции (как соседние)
- Категории — секционные заголовки (mono-label, gold), под ними accordion items
- Вопрос: Shippori Mincho, ink, средний размер
- Ответ: Archivo Narrow, обычный текст, более тёмно-серый
- Sharp corners (как везде в проекте)
- Hover на вопросе — лёгкая matcha-зелёная подсветка слева (border-left)
- Кандзи watermark 質 ("quality") в углу секции

### Локализация

Все 16 вопросов и ответов в 3 языках (EN/PT/ES) → ~100 новых ключей в i18n словари.

Ключи: `faq.cat1.title`, `faq.q1.q`, `faq.q1.a`, ...

### Файлы

| Файл | Изменение |
|------|-----------|
| `src/components/maneki/FAQ.tsx` | **Новый** — секция с accordion |
| `src/components/maneki/Navbar.tsx` | +пункт FAQ (desktop + mobile) |
| `src/pages/Index.tsx` | Импорт + размещение между Compliance и JapanTrust |
| `src/i18n/locales/en.json` | +~100 ключей |
| `src/i18n/locales/pt.json` | +~100 ключей (перевод) |
| `src/i18n/locales/es.json` | +~100 ключей (перевод) |

### Объём

1 новый компонент + 1 правка навбара + 1 правка Index + 3 словаря.

