import Navbar from "@/components/maneki/Navbar";
import Footer from "@/components/maneki/Footer";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";
import BlogCard from "@/components/maneki/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { useSeo } from "@/lib/seo";
import { useTranslation } from "@/i18n/LanguageContext";

const Blog = () => {
  const { locale } = useTranslation();
  useSeo({
    title: "Journal — Notes on Matcha, Origin & Craft | Nokari",
    description:
      "Essays and field notes from Nokari Matcha — origin, brewing technique, and the craft behind ceremonial Uji matcha.",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Nokari Journal",
      url: typeof window !== "undefined" ? window.location.href : "",
      blogPost: blogPosts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        datePublished: p.publishedAt,
        url: `/blog/${p.slug}`,
      })),
    },
  });

  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main className="bg-cream pt-28 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <header className="mb-16 max-w-3xl">
            <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
              野狩 · Journal
            </p>
            <h1 className="font-heading text-5xl md:text-6xl text-ink font-bold leading-[1.05] mb-5">
              Notes on matcha, origin & craft.
            </h1>
            <p className="font-body text-lg text-ink/70 leading-relaxed">
              Field essays from Uji and the bar. Slow reading on terroir, technique
              and the small details that separate good matcha from extraordinary matcha.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} locale={locale} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
