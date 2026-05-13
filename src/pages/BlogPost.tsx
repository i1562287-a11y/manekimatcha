import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/maneki/Navbar";
import Footer from "@/components/maneki/Footer";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import { useSeo } from "@/lib/seo";
import { useTranslation } from "@/i18n/LanguageContext";
import { useBlogTranslation } from "@/hooks/useBlogTranslation";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const original = slug ? getPostBySlug(slug) : undefined;
  const { locale } = useTranslation();
  const { post } = useBlogTranslation(original);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = post ? `${origin}/blog/${post.slug}` : "";
  const image = post ? (post.featuredImage.startsWith("http") ? post.featuredImage : origin + post.featuredImage) : undefined;

  useSeo({
    title: post?.metaTitle ?? "Article not found | Nokari Journal",
    description: post?.metaDescription,
    image,
    url,
    type: "article",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.metaDescription,
          image: [image],
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: { "@type": "Organization", name: "Nokari Matcha" },
          publisher: {
            "@type": "Organization",
            name: "Nokari Matcha",
            logo: { "@type": "ImageObject", url: `${origin}/favicon.ico` },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          keywords: post.tags.join(", "),
          articleSection: post.category,
        }
      : undefined,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main className="bg-cream pt-28 pb-24 min-h-screen">
        <article className="max-w-3xl mx-auto px-6">
          <nav className="font-mono-label text-xs tracking-widest uppercase text-ink/50 mb-8">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-ink">Journal</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{post.category}</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 font-mono-label text-[10px] tracking-[0.25em] uppercase text-ink/50 mb-5">
              <span className="text-matcha">{post.category}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-ink font-bold leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="font-body text-xl text-ink/70 leading-relaxed">{post.excerpt}</p>
          </header>

          <div className="aspect-[3/2] overflow-hidden bg-warm-cream border border-ink/10 mb-12">
            <img
              src={post.featuredImage}
              alt={post.title}
              width={1280}
              height={832}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="font-body text-lg text-ink/85 leading-[1.8] blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-ink/10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-ink/60 bg-warm-cream border border-ink/10 px-3 py-1.5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-24">
            <h2 className="font-heading text-3xl text-ink font-bold mb-8">Continue reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="bg-cream group block">
                  <div className="aspect-[16/9] overflow-hidden bg-warm-cream">
                    <img
                      src={p.featuredImage}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-matcha mb-2">
                      {p.category}
                    </p>
                    <h3 className="font-heading text-xl text-ink font-bold leading-snug group-hover:text-matcha transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
