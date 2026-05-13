import { Link } from "react-router-dom";
import { useBlogTranslation } from "@/hooks/useBlogTranslation";
import type { BlogPost } from "@/data/blogPosts";

const formatDate = (iso: string, locale: string) =>
  new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

interface Props {
  post: BlogPost;
  locale: string;
}

const BlogCard = ({ post, locale }: Props) => {
  const { post: translated } = useBlogTranslation(post);
  const p = translated ?? post;

  return (
    <article className="bg-cream">
      <Link to={`/blog/${p.slug}`} className="block group h-full">
        <div className="aspect-[4/3] overflow-hidden bg-warm-cream">
          <img
            src={p.featuredImage}
            alt={p.title}
            loading="lazy"
            width={1280}
            height={832}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-3 font-mono-label text-[10px] tracking-[0.25em] uppercase text-ink/50 mb-4">
            <span className="text-matcha">{p.category}</span>
            <span>·</span>
            <span>{p.readTime} min</span>
          </div>
          <h2 className="font-heading text-2xl text-ink font-bold leading-snug mb-3 group-hover:text-matcha transition-colors">
            {p.title}
          </h2>
          <p className="font-body text-base text-ink/70 leading-relaxed mb-5">
            {p.excerpt}
          </p>
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-ink/40">
            {formatDate(p.publishedAt, locale)}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
