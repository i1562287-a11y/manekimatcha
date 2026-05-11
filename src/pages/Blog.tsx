import { Link } from "react-router-dom";
import Navbar from "@/components/maneki/Navbar";
import Footer from "@/components/maneki/Footer";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";
import { blogPosts } from "@/data/blogPosts";
import { useSeo } from "@/lib/seo";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const Blog = () => {
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
              <article key={post.id} className="bg-cream">
                <Link to={`/blog/${post.slug}`} className="block group h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-warm-cream">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      loading="lazy"
                      width={1280}
                      height={832}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 font-mono-label text-[10px] tracking-[0.25em] uppercase text-ink/50 mb-4">
                      <span className="text-matcha">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h2 className="font-heading text-2xl text-ink font-bold leading-snug mb-3 group-hover:text-matcha transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-body text-base text-ink/70 leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-ink/40">
                      {formatDate(post.publishedAt)}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
