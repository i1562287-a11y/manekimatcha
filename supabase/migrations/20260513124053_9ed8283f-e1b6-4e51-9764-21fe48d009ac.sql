CREATE TABLE public.blog_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL,
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (slug, locale)
);

CREATE INDEX idx_blog_translations_slug_locale ON public.blog_translations(slug, locale);

ALTER TABLE public.blog_translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read translations"
  ON public.blog_translations FOR SELECT
  USING (true);
