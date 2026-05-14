# Авто-деплой за 1-3 хвилини після push

## Проблема

Зараз: push у GitHub → Lovable синхронізує код, але щоб **frontend** оновився на `nokarimatcha.eu`, треба **руками** натиснути **Publish → Update** в Lovable. Це by design — Lovable не публікує автоматично і не має публічного API для тригеру publish.

Висновок: щоб отримати auto-publish за 1-3 хв без кліків, треба **винести frontend хостинг з Lovable**. Backend (Supabase / edge functions) залишається без змін.

## Рекомендований варіант — Vercel

**Чому Vercel, а не альтернативи:**
- Найшвидший build для Vite-проектів (~60-90 сек на цей проект)
- Безкоштовний tier покриває з запасом (100 GB bandwidth/міс)
- Атомарні деплої з instant rollback
- Auto SSL, edge CDN, preview-деплої для PR

**Альтернативи (теж підійдуть):**
- **Cloudflare Pages** — безкоштовний, без ліміту на bandwidth, build трошки повільніший
- **Netlify** — аналог Vercel, дещо повільніший build

GitHub Pages не підходить: SPA fallback треба руками, немає env-змінних під час build.

## Як буде працювати

```text
   Claude push у GitHub (main)
            │
            ├──► Lovable sync (для подальших правок в редакторі)
            │
            ├──► Vercel build & deploy (60-90 сек) ──► nokarimatcha.eu
            │
            └──► GitHub Action warm-translations (~30 сек паралельно)
```

Усе автоматично. Загальний час від push до публічного оновлення: **~2 хвилини**.

## Що міняється

**Зміни в проекті — мінімальні:**
- ➕ Додаємо `vercel.json` з SPA-fallback (1 файл, ~10 рядків)
- ➕ Edge functions Supabase працюють далі без змін (вони деплояться автоматично через Lovable Cloud)
- ➕ `.env` змінні (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`) додаються в Vercel UI

**Що НЕ міняється:**
- Lovable Cloud (Supabase) залишається бекендом
- Усі edge functions, БД, Stripe webhook, Telegram бот — без змін
- Можна продовжувати редагувати в Lovable редакторі (зміни синкаються у GitHub → Vercel підхопить)

## Що треба від тебе (одноразово, ~15 хв)

1. **Створити акаунт на vercel.com** (Sign in with GitHub)
2. **Import Project** → вибрати репо `nokari-matcha` → Framework: Vite (auto-detected)
3. **Environment Variables** — додати 3 змінні з твого `.env`:
   - `VITE_SUPABASE_PROJECT_ID` = `aqkvpzwvncnpzmogpvyo`
   - `VITE_SUPABASE_PUBLISHABLE_KEY` = `eyJhbGc...` (з `.env`)
   - `VITE_SUPABASE_URL` = `https://aqkvpzwvncnpzmogpvyo.supabase.co`
4. Натиснути **Deploy** → отримаєш `nokari-matcha.vercel.app` (тестовий URL, перевіриш що все працює)
5. **Перенести custom domain `nokarimatcha.eu`:**
   - В Lovable: **Project Settings → Domains → Remove** (або залишити для редиректу)
   - В Vercel: **Settings → Domains → Add `nokarimatcha.eu`**
   - У свого DNS-провайдера (де куплений домен) поміняти `A`/`CNAME` записи на ті, що покаже Vercel
   - SSL Vercel випустить автоматично за 1-5 хв

## Що зроблю я в коді

1. Створити `vercel.json`:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
     "framework": "vite"
   }
   ```
2. Перевірити що `package.json` має правильні `build` і `preview` скрипти (вже є — Vite дефолт)
3. Оновити `CLAUDE.md` — описати новий workflow без ручного Publish
4. Оновити `.github/workflows/warm-translations.yml` — додати очікування завершення Vercel-деплою (опціонально, через `vercel-action`), щоб переклади гарантовано були готові ДО того, як юзери побачать нову версію

## Альтернатива (якщо не хочеш чіпати домен)

Залишити Lovable-хостинг, але прийняти що треба тиснути "Update". Тоді можу додати:
- **GitHub Action notification** — після push надсилає тобі повідомлення в Telegram "Стаття готова, натисни Publish в Lovable"
- Це **не** скоротить час до публікації, але прибере ризик забути натиснути

## Питання до тебе

Чи готовий перенести `nokarimatcha.eu` з Lovable-хостингу на Vercel? Це єдиний шлях до 1-3 хв автодеплою. Якщо так — я зроблю `vercel.json` і дам покрокову інструкцію по DNS.

