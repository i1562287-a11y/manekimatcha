

## Ребренд: Maneki Matcha → Nokari Matcha

Глобальная замена бренда во всех файлах. Японский текст: **招き猫 → 野狩**.

### Замены по файлам

| Файл | Что меняется |
|------|-------------|
| `index.html` | Title, og:title, twitter:title, meta author — "Maneki Matcha" → "Nokari Matcha" |
| `Navbar.tsx` | 招き猫 → 野狩, "Maneki Matcha" → "Nokari Matcha" |
| `Footer.tsx` | 招き猫 → 野狩, "Maneki Matcha" → "Nokari Matcha", copyright |
| `Hero.tsx` | alt текст |
| `Contact.tsx` | "The cat beckons. We deliver." → "Quality speaks. We deliver.", "Maneki Matcha products" → "Nokari Matcha products" |
| `WhySection.tsx` | "Why Maneki" → "Why Nokari", "Maneki vs. Generic" → "Nokari vs. Generic", колонка "Maneki" → "Nokari", ключи `maneki` в данных |
| `WhoWeServe.tsx` | "Maneki gives you…" → "Nokari gives you…", "Maneki supplies…" → "Nokari supplies…" |
| `KanjiWatermark.tsx` | Дефолтный kanji остаётся 抹茶 (это про матчу, не про бренд) |
| `Order.tsx` | 招き猫 → 野狩, "Maneki Matcha" → "Nokari Matcha" |
| `PaymentSuccess.tsx` | 招き猫 → 野狩, "Maneki Matcha" → "Nokari Matcha", "Back to Maneki" → "Back to Nokari" |
| `PaymentCancelled.tsx` | 招き猫 → 野狩, "Maneki Matcha" → "Nokari Matcha", "Back to Maneki" → "Back to Nokari" |
| `.lovable/memory/index.md` | Обновить название проекта |

### Что НЕ меняется
- Папка `src/components/maneki/` — переименование сломает все импорты без пользы
- Цвета, шрифты, вёрстка — без изменений
- CSS-переменные `matcha`, `cream` и т.д. — это цвета, не бренд

~30 текстовых замен, 11 файлов.

