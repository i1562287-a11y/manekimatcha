# Повністю автоматичний деплой — одноразово 15 хв і забув назавжди

## Чесна правда

**Без жодного одноразового налаштування — неможливо.** Lovable хостинг буквально вимагає, щоб людина натискала "Update". Це не баг — це їхня архітектура. Вийти з цього можна тільки переїздом на хостинг з Git-інтеграцією (Vercel / Cloudflare Pages / Netlify).

**АЛЕ:** після одноразового налаштування (15 хв твого часу) ти **більше ніколи не торкаєшся комп'ютера**. Claude Cowork пушить → через 90 секунд стаття на `nokarimatcha.eu`. Forever.

Тобто вибір такий:
- 🔴 **Зараз:** нічого не робити → кожна стаття вимагає твого кліку в Lovable
- 🟢 **15 хв одноразово:** налаштувати Vercel → нуль участі назавжди

Третього варіанту немає. Я перевірив — Lovable не має API/webhook для авто-публікації.

## Найшвидший шлях до "забув назавжди" — Vercel (15 хв одноразово)

### Що робиш ти (з телефону можна)

**Крок 1 — Vercel акаунт (2 хв)**
- Відкрий [vercel.com/signup](https://vercel.com/signup) → **Continue with GitHub** → авторизуй

**Крок 2 — Імпорт проекту (3 хв)**
- На [vercel.com/new](https://vercel.com/new) → знайди репо `nokari-matcha` → **Import**
- Vercel сам визначить Vite. Розгорни **Environment Variables** і встав три (copy-paste):

```
VITE_SUPABASE_PROJECT_ID=aqkvpzwvncnpzmogpvyo
VITE_SUPABASE_URL=https://aqkvpzwvncnpzmogpvyo.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxa3Zwend2bmNucHptb2dwdnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NTM4NTksImV4cCI6MjA5MTEyOTg1OX0.fnDcNT0b6cQgjY4yb5TCVKjfv_esJ6uKheg1cb8mRWA
```

- **Deploy** → за 90 сек отримаєш `nokari-matcha-xxx.vercel.app`. Відкрий, перевір що блог працює.

**Крок 3 — Перенос домену (10 хв, з них 5 хв чекати)**

В Vercel: **Project → Settings → Domains** → **Add** → введи `nokarimatcha.eu` і окремо `www.nokarimatcha.eu`. Vercel покаже які DNS-записи створити.

В Lovable: **Project Settings → Domains** → видали `nokarimatcha.eu` (інакше буде конфлікт).

У DNS-провайдера, де ти купував домен (скажи мені який — Cloudflare, GoDaddy, Namecheap, OVH чи інший — я дам точні скріншот-інструкції):
- Видалити старий `A` запис на Lovable IP `185.158.133.1`
- Додати новий `A @ → 76.76.21.21` (Vercel)
- Додати `CNAME www → cname.vercel-dns.com`

Через ~5 хв SSL випишеться сам, домен запрацює на Vercel.

**Крок 4 — Все. Більше нічого ніколи.**

## Як це виглядає після налаштування

```text
Claude Cowork (за чашкою кави, без тебе)
    │
    └─► git push до main
            │
            ├──► Vercel автоматично:
            │      • bun install
            │      • bun run build  
            │      • деплой на nokarimatcha.eu
            │      = 60-90 секунд, без твоєї участі
            │
            └──► GitHub Action warm-translations:
                   • прогріває PT/ES переклади
                   = 30 секунд, паралельно
```

Ти можеш бути на пляжі, в літаку, спати. Стаття зʼявиться сама.

## Альтернативи (для повноти)

- **Cloudflare Pages** — теж автоматично, безкоштовно, навіть без ліміту трафіку. Той самий принцип одноразового підключення (~15 хв). Якщо твій домен вже на Cloudflare — це навіть простіше, бо DNS в одному місці.
- **Netlify** — аналог Vercel, нічим суттєво не відрізняється.

Якщо в тебе домен **уже на Cloudflare** — скажи, я переключу план на Cloudflare Pages, буде ще на 5 хв швидше (DNS не міняти, тільки переписати запис в тому ж кабінеті).

## Питання до тебе (одне)

**Де купив домен `nokarimatcha.eu`?** (Cloudflare / GoDaddy / Namecheap / OVH / Reg.ru / інший)

Як скажеш — я дам точні покрокові скріншоти, які саме поля міняти, щоб ти не думав. 15 хв клікання з телефону і ти вільний назавжди.
