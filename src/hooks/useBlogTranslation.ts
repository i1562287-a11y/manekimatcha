import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/i18n/LanguageContext";
import type { BlogPost } from "@/data/blogPosts";

export type TranslatedFields = {
  title: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
};

/**
 * Returns translated fields for a blog post based on current locale.
 * For locale 'en' returns the original. For pt/es: checks Supabase cache,
 * otherwise calls translate-blog edge function (which will also persist).
 */
export function useBlogTranslation(post: BlogPost | undefined) {
  const { locale } = useTranslation();
  const [translated, setTranslated] = useState<TranslatedFields | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!post) {
      setTranslated(null);
      return;
    }
    if (locale === "en") {
      setTranslated(null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    (async () => {
      try {
        // Try cache first
        const { data: cached } = await supabase
          .from("blog_translations")
          .select("title, excerpt, content, meta_title, meta_description")
          .eq("slug", post.slug)
          .eq("locale", locale)
          .maybeSingle();

        if (cached && !cancelled) {
          setTranslated({
            title: cached.title,
            excerpt: cached.excerpt,
            content: cached.content,
            metaTitle: cached.meta_title,
            metaDescription: cached.meta_description,
          });
          setLoading(false);
          return;
        }

        // Otherwise request translation
        const { data, error } = await supabase.functions.invoke("translate-blog", {
          body: {
            slug: post.slug,
            locale,
            post: {
              title: post.title,
              excerpt: post.excerpt,
              content: post.content,
              metaTitle: post.metaTitle,
              metaDescription: post.metaDescription,
            },
          },
        });

        if (!cancelled && !error && data && !data.error) {
          setTranslated({
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription,
          });
        }
      } catch (e) {
        console.error("Blog translation failed", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [post?.slug, locale]);

  // Build merged view
  const view: BlogPost | undefined = post
    ? translated
      ? {
          ...post,
          title: translated.title,
          excerpt: translated.excerpt,
          content: translated.content,
          metaTitle: translated.metaTitle,
          metaDescription: translated.metaDescription,
        }
      : post
    : undefined;

  return { post: view, loading, isTranslated: !!translated };
}
