

## План: ссылка на Instagram @nokari.matcha

### Куда добавить

**Footer** — стандартное место для соцсетей, не отвлекает от основного CTA. В колонку с логотипом/описанием бренда (первая колонка), под текстом про цены.

Дополнительно: **Contact** секция — рядом с email/телефоном, как альтернативный канал связи.

### Что добавить

1. **Footer** (`src/components/maneki/Footer.tsx`):
   - Под параграфом `prices_note` в первой колонке добавить блок "Follow":
   - Иконка Instagram (lucide-react `Instagram`) + `@nokari.matcha`
   - Ссылка: `https://instagram.com/nokari.matcha`, `target="_blank"`, `rel="noopener noreferrer"`
   - Стиль: `text-cream/60 hover:text-gold transition-colors`, mono-label

2. **Contact** (`src/components/maneki/Contact.tsx`) — проверю текущую структуру, добавлю Instagram строкой к email/whatsapp.

### Локализация

- Ключ `footer.follow` ("Follow" / "Seguir" / "Seguir") в EN/PT/ES
- Handle `@nokari.matcha` не локализуется

### Файлы

| Файл | Изменение |
|------|-----------|
| `src/components/maneki/Footer.tsx` | + блок Instagram под prices_note |
| `src/components/maneki/Contact.tsx` | + строка с Instagram (после проверки структуры) |
| `src/i18n/locales/{en,pt,es}.json` | + ключ `footer.follow` |

### Объём

2 правки компонентов + 3 ключа в словари.

