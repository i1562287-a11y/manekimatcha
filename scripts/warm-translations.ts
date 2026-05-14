/**
 * Warm-up script для PT/ES перекладів блогу.
 *
 * Парсить src/data/blogPosts.ts, для кожної статті викликає edge-функцію
 * `translate-blog` з locale=pt і locale=es. Edge-функція сама перевіряє
 * кеш у таблиці blog_translations і пропускає вже перекладені — тож
 * скрипт можна спокійно запускати скільки завгодно разів.
 *
 * Запуск локально:
 *   SUPABASE_ANON_KEY=eyJ... bun run scripts/warm-translations.ts
 *
 * У CI (GitHub Action) — змінні передаються через `env:`.
 */

import { blogPosts } from "../src/data/blogPosts";

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? "https://aqkvpzwvncnpzmogpvyo.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_ANON_KEY) {
  console.error("❌ SUPABASE_ANON_KEY env var is required");
  process.exit(1);
}

const LOCALES = ["pt", "es"] as const;
const ENDPOINT = `${SUPABASE_URL}/functions/v1/translate-blog`;

async function translateOne(slug: string, locale: string, post: typeof blogPosts[number]) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY!,
    },
    body: JSON.stringify({
      slug,
      locale,
      post: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
      },
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    return { ok: false, status: res.status, body: text.slice(0, 200) };
  }
  let cached = false;
  try {
    cached = JSON.parse(text)?.cached === true;
  } catch {}
  return { ok: true, cached };
}

async function main() {
  console.log(`🔥 Warming translations for ${blogPosts.length} posts × ${LOCALES.length} locales`);

  let generated = 0;
  let cached = 0;
  let failed = 0;

  for (const post of blogPosts) {
    for (const locale of LOCALES) {
      process.stdout.write(`  ${post.slug} [${locale}] ... `);
      const result = await translateOne(post.slug, locale, post);
      if (!result.ok) {
        failed++;
        console.log(`❌ ${result.status} ${result.body}`);
      } else if (result.cached) {
        cached++;
        console.log("✓ cached");
      } else {
        generated++;
        console.log("✨ generated");
      }
    }
  }

  console.log(
    `\nDone. Generated: ${generated}, already cached: ${cached}, failed: ${failed}`,
  );

  if (failed > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
