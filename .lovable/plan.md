# Auto-deploy при прямому push в GitHub

## Суть проблеми

Зараз: Claude Cowork → push в GitHub → код у репо є, але `nokarimatcha.eu` показує старе. Бо **Lovable хостинг не має auto-deploy** — він чекає, поки людина натисне **Publish → Update** в UI Lovable. API для цього немає (я перевірив у Lovable docs — публічного publish-API/webhook не існує).

Висновок: щоб push → автодеплой, треба перевести фронтенд на хостинг з Git-інтеграцією. Бекенд (Supabase, edge functions, Stripe, Telegram bot) лишається як є.

## Рекомендація: Vercel

Чому саме Vercel:
- Натівна Git-інтеграція: підключив репо один раз → кожен push в `main` авто-білдить і деплоїть (60-90 сек)
- Безкоштовно для цього обʼєму трафіку (100 GB/міс)
- Auto SSL, edge CDN в Європі, atomic rollback одним кліком
- Працює з Vite з коробки (`vercel.json` уже в репо)
- Preview deploys для кожного PR як бонус

Альтернативи (рівноцінні, але повільніші в setup для твого випадку):
- **Cloudflare Pages** — теж автодеплой, безліміт трафіку. Виграш ~5 хв якщо домен уже на Cloudflare.
- **Netlify** — аналог Vercel, без переваг для цього кейсу.

## Що вже готово в репо (з минулих кроків)

- `vercel.json` — SPA-fallback rewrite + asset caching
- `CLAUDE.md` — інструкція для Claude Cowork (slug, content rules, SEO)
- `.github/workflows/warm-translations.yml` — авто-прогрів PT/ES перекладів після push
- `scripts/warm-translations.ts` — скрипт прогріву

Тобто **код повністю готовий**. Лишилось одноразово підключити Vercel.

## Що треба зробити (одноразово, ~15 хв з телефону)

### 1. Vercel акаунт + імпорт (5 хв)

- [vercel.com/signup](https://vercel.com/signup) → **Continue with GitHub** → авторизуй
- [vercel.com/new](https://vercel.com/new) → знайди репо → **Import**
- Vercel сам визначить Vite. Розгорни **Environment Variables** і встав:

```text
VITE_SUPABASE_PROJECT_ID=aqkvpzwvncnpzmogpvyo
VITE_SUPABASE_URL=https://aqkvpzwvncnpzmogpvyo.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxa3Zwend2bmNucHptb2dwdnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NTM4NTksImV4cCI6MjA5MTEyOTg1OX0.fnDcNT0b6cQgjY4yb5TCVKjfv_esJ6uKheg1cb8mRWA
```

- **Deploy** → за ~90 сек: `nokari-matcha-xxx.vercel.app`. Відкрий, перевір блог.

### 2. Перенос домену (10 хв, з них ~5 хв чекати DNS)

В Lovable: **Project Settings → Domains** → видалити `nokarimatcha.eu` (інакше конфлікт верифікації).

В Vercel: **Project → Settings → Domains** → **Add** → `nokarimatcha.eu` і `www.nokarimatcha.eu`.

У DNS-провайдера (де купував домен):
- Видалити старий `A @ → 185.158.133.1` (Lovable)
- Додати `A @ → 76.76.21.21` (Vercel)
- Додати `CNAME www → cname.vercel-dns.com`

SSL випишеться сам за ~5 хв.

### 3. (Опційно) Відключити Lovable auto-sync публікації

Залиши Lovable підключений до того ж GitHub-репо для майбутніх ручних правок з Lovable editor. Просто більше не натискай "Publish → Update" — Vercel і так оновлює сайт.

## Як виглядатиме результат

```text
Claude Cowork (без тебе, в будь-який час)
        │
        └─► PUT /repos/.../contents/src/data/blogPosts.ts (GitHub API)
                │
                ├──► Vercel webhook миттєво:
                │      bun install → bun run build → deploy
                │      = 60-90 сек, на nokarimatcha.eu
                │
                └──► GitHub Action warm-translations:
                       прогрів PT/ES через edge function
                       = 30 сек, паралельно

Загалом: push → публічно ~90 секунд. Без участі.
```

## Питання до тебе

**Де купив домен `nokarimatcha.eu`?** (Cloudflare / GoDaddy / Namecheap / OVH / Reg.ru / Hostinger / інший)

Скажеш — дам точні скрін-інструкції для саме того кабінету (які поля, де клікати), щоб ти не думав під час налаштування.
