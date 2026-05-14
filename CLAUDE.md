# CLAUDE.md — Інструкція для Claude (через GitHub)

Цей файл — гайд для Claude Code (або іншого AI-агента), який пише нові статті в блог Nokari Matcha через GitHub.

## TL;DR — як додати нову статтю

1. Відкрий `src/data/blogPosts.ts`
2. Додай новий обʼєкт `BlogPost` **на початок масиву** `blogPosts` (нові статті зверху)
3. Заповни всі обовʼязкові поля (див. нижче)
4. `git commit && git push` → Lovable автосинхронізується
5. Власник тисне **Publish → Update** в Lovable, щоб задеплоїти на `nokarimatcha.eu`
6. GitHub Action `warm-translations` автоматично прогріє PT/ES переклади (через ~1 хв після push)

## Структура BlogPost

```ts
{
  id: string;              // Унікальний рядковий ID, наприклад "7"
  slug: string;            // URL-сегмент, kebab-case, англ., унікальний. Не міняти після публікації!
  title: string;           // EN заголовок, до ~70 символів
  excerpt: string;         // 1-2 речення, ~150-200 символів, тизер
  category: string;        // напр. "B2B", "Sourcing", "Education", "Brewing"
  readTime: number;        // у хвилинах (приблизно: 200 слів = 1 хв)
  publishedAt: string;     // ISO дата "YYYY-MM-DD"
  featuredImage: string;   // URL великого фото (Pexels/Unsplash з CDN-параметрами)
  metaTitle: string;       // <title> для SEO, до 60 символів, з суфіксом " | Nokari Journal"
  metaDescription: string; // <meta description>, 140-160 символів
  tags: string[];          // 3-6 тегів, lowercase
  content: string;         // HTML контент статті (див. нижче)
}
```

## Правила для `content` (HTML)

- Тільки ці теги: `<p>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<a href="...">`
- **БЕЗ** `<h1>` (він вже рендериться з `title`)
- **БЕЗ** `<img>` всередині content (тільки `featuredImage` показується)
- **БЕЗ** inline стилів, classes, id
- Параграфи розділяти порожнім рядком для читабельності в коді
- Шаблонний літерал з backticks: ```content: `<p>...</p><h2>...</h2>` ```
- Уникати backticks всередині — або ескейпити

## Стиль письма (обовʼязково)

- **Тон:** premium editorial B2B, як Monocle або Financial Times. Без воркшопних кліше, без "discover the magic of...".
- **Аудиторія:** власники кафе, бариста-менеджери, шеф-кондитери, RTD-бренди в Європі (PT, ES, DE, FR, NL).
- **Конкретика:** реальні цифри (€/kg, %, роки), реальні регіони (Uji, Nishio, Yame, Kagoshima), чесні аргументи (включно з мінусами).
- **Без AI-маркерів:** ніяких "in today's fast-paced world", "let's dive in", "elevate your business".
- **Довжина:** 800-1500 слів для більшості статей.

## Бренд-терміни (НЕ перекладати на PT/ES — захищено в edge function)

`Nokari`, `matcha`, `tencha`, `Uji`, `Nishio`, `Yame`, `Kagoshima`, `Samidori`, `Okumidori`, `Yabukita`, `HoReCa`, `JAS`, `koicha`, `usucha`, `chasen`, `chawan`.

Ціни залишаються в євро (`€`), без конвертації.

## Переклади PT/ES

- Ти **НЕ** додаєш переклади в код. Вони генеруються автоматично.
- Edge function `translate-blog` (Lovable AI / Gemini) перекладає поля `title`, `excerpt`, `content`, `metaTitle`, `metaDescription` при першому відкритті PT/ES версії — або через GitHub Action одразу після push.
- Кеш живе в таблиці `blog_translations` (`unique(slug, locale)`).
- Щоб **оновити** переклад існуючої статті: змінити EN оригінал, потім видалити рядок з `blog_translations` для цього `slug`. Можна попросити власника зробити це через Lovable Cloud.

## Картинки

- Перевага: Pexels (`https://images.pexels.com/photos/.../...?auto=compress&cs=tinysrgb&w=1260`) — безкоштовні, ліцензія дозволяє комерційне використання.
- Альтернатива: Unsplash з тими ж URL-параметрами оптимізації.
- Розмір: широкоформатне (4:3 або 16:9), мінімум 1260px по ширині.
- Тематика: чай, японські пейзажі, кафе-естетика, чашки/інструменти. Без стокових моделей з фейковими посмішками.

## SEO чекліст

- `slug` містить ключове слово (напр. `matcha-wholesale-pricing-europe-2026`)
- `metaTitle` ≤ 60 символів, з ключовим словом на початку
- `metaDescription` 140-160 символів, з CTA або конкретним benefit
- `title` має `<h2>` підзаголовки кожні 200-300 слів
- В content є хоча б 1 `<table>` або `<ul>` для scannability

## Приклад скелету нової статті

```ts
{
  id: "7",
  slug: "ceremonial-vs-latte-grade-matcha-difference",
  title: "Ceremonial vs Latte-Grade Matcha: What Actually Changes",
  excerpt: "The grade label on your matcha tin hides three real variables — leaf age, milling time, and chlorophyll preservation. Here's what each means for your café.",
  category: "Education",
  readTime: 6,
  publishedAt: "2026-05-20",
  featuredImage: "https://images.pexels.com/photos/.../...jpeg?auto=compress&cs=tinysrgb&w=1260",
  metaTitle: "Ceremonial vs Latte Matcha: Real Differences | Nokari Journal",
  metaDescription: "What ceremonial-grade and latte-grade matcha really mean — leaf age, milling, chlorophyll. Honest breakdown for café buyers in Europe.",
  tags: ["education", "matcha-grades", "B2B", "buying-guide"],
  content: `<p>Opening paragraph that sets the question...</p>

<h2>First Section</h2>
<p>...</p>

<h2>Second Section</h2>
<p>...</p>`
}
```

## Що НЕ робити

- ❌ Не міняти `slug` після публікації (зламає URL і кеш перекладів)
- ❌ Не додавати переклади статей у код вручну (тільки EN)
- ❌ Не редагувати `src/integrations/supabase/types.ts` або `client.ts`
- ❌ Не змінювати міграції в `supabase/migrations/`
- ❌ Не використовувати `<h1>` в контенті
- ❌ Не вставляти `<script>`, `<style>`, або зовнішні embed-и
- ❌ Не міняти структуру типу `BlogPost` без обговорення (зламає переклади)

## Корисні шляхи

- Список статей: `src/data/blogPosts.ts`
- Картка блогу: `src/components/maneki/BlogCard.tsx`
- Сторінка списку: `src/pages/Blog.tsx`
- Сторінка статті: `src/pages/BlogPost.tsx`
- Хук перекладу: `src/hooks/useBlogTranslation.ts`
- Edge function перекладу: `supabase/functions/translate-blog/index.ts`
- GitHub Action прогріву: `.github/workflows/warm-translations.yml`
