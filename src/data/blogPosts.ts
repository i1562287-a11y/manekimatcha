import matchaCeremony from "@/assets/blog/matcha-ceremony.jpg";
import matchaLatte from "@/assets/blog/matcha-latte.jpg";
import matchaField from "@/assets/blog/matcha-field.jpg";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML
  featuredImage: string;
  publishedAt: string; // ISO date
  category: string;
  tags: string[];
  readTime: number; // minutes
  metaTitle: string;
  metaDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "what-makes-uji-matcha-different",
    title: "What Makes Uji Matcha Different",
    excerpt:
      "From shaded fields to stone mills — why a single Japanese region became the global benchmark for ceremonial matcha.",
    featuredImage: matchaField,
    publishedAt: "2026-04-02",
    category: "Origin",
    tags: ["uji", "kyoto", "ceremonial", "origin"],
    readTime: 5,
    metaTitle: "What Makes Uji Matcha Different | Nokari Journal",
    metaDescription:
      "Discover why Uji, Kyoto produces the world's most refined ceremonial matcha — terroir, shading, harvest, and stone-milling explained.",
    content: `
      <p>For nearly 800 years the hills around Uji, just south of Kyoto, have set the standard for Japanese green tea. The combination of misty mornings, mineral-rich soil and meticulous craftsmanship is impossible to imitate elsewhere.</p>
      <h2>Terroir and microclimate</h2>
      <p>Cool nights and humid mornings slow leaf growth, concentrating amino acids — particularly L-theanine, the compound responsible for matcha's signature umami sweetness.</p>
      <h2>Shading the bushes</h2>
      <p>Three to four weeks before harvest, the bushes are covered with bamboo or canvas screens. Light is reduced by up to 90%, forcing the leaves to produce more chlorophyll. The result: a vivid jade colour and a softer, less astringent profile.</p>
      <h2>Stone-milling, slowly</h2>
      <p>Granite mills turn at roughly 30 rotations per minute. A single mill produces only 30–40 grams of matcha per hour. Anything faster generates heat and oxidises the powder, dulling both colour and flavour.</p>
      <p>This patience is what separates ceremonial Uji matcha from industrial alternatives — and why we source ours exclusively from small Uji farms.</p>
    `,
  },
  {
    id: "2",
    slug: "the-perfect-matcha-latte",
    title: "The Perfect Matcha Latte at Home",
    excerpt:
      "Ratios, temperatures, and the one mistake almost everyone makes when whisking matcha for milk.",
    featuredImage: matchaLatte,
    publishedAt: "2026-04-18",
    category: "Recipes",
    tags: ["latte", "recipe", "how-to"],
    readTime: 4,
    metaTitle: "How to Make the Perfect Matcha Latte | Nokari Journal",
    metaDescription:
      "A simple, café-quality matcha latte recipe with ratios, water temperature, and whisking technique that brings out the best of ceremonial matcha.",
    content: `
      <p>A great matcha latte is not about more powder — it is about the right preparation. Here is the method we use behind the bar.</p>
      <h2>The ratio</h2>
      <p>2 grams of matcha (about one heaped chashaku) to 60 ml of water, finished with 150 ml of steamed milk. Simple, repeatable, balanced.</p>
      <h2>Water temperature</h2>
      <p>Use water at 75–80 °C. Boiling water scorches the leaf and pulls out bitterness. If you do not have a thermometer, boil and rest for 2 minutes.</p>
      <h2>The whisk</h2>
      <p>Sift the matcha first. Whisk in a quick "M" or "W" motion — not circles — for about 15 seconds, until a fine green crema forms on the surface.</p>
      <h2>The milk</h2>
      <p>Whole dairy or barista oat. Steam to 60 °C only; hotter milk flattens the matcha's umami sweetness.</p>
    `,
  },
  {
    id: "3",
    slug: "ceremonial-vs-culinary-matcha",
    title: "Ceremonial vs Culinary Matcha: Which One to Buy",
    excerpt:
      "A practical guide to grades — what they actually mean, when each is worth the price, and what to avoid.",
    featuredImage: matchaCeremony,
    publishedAt: "2026-05-04",
    category: "Guide",
    tags: ["grades", "buying-guide", "ceremonial", "culinary"],
    readTime: 6,
    metaTitle: "Ceremonial vs Culinary Matcha — A Buyer's Guide | Nokari Journal",
    metaDescription:
      "Understand the real difference between ceremonial and culinary matcha grades, when each is worth it, and how to spot poor-quality powder.",
    content: `
      <p>"Ceremonial" and "culinary" are not regulated terms in Japan, which is why the market is full of confusion. Here is how we use them and how a serious buyer should think about quality.</p>
      <h2>Ceremonial grade</h2>
      <p>Made from the youngest first-harvest leaves, stems and veins removed, stone-milled. Drunk neat with water (usucha or koicha). Bright jade, almost sweet, no chalkiness.</p>
      <h2>Culinary grade</h2>
      <p>Often second or third harvest, sometimes shade-grown for less time. Designed to hold up against milk, sugar and heat. Slightly more astringent, often duller in colour.</p>
      <h2>How to tell quality at a glance</h2>
      <ul>
        <li><strong>Colour:</strong> vivid jade green = good. Olive or yellow = oxidised or low grade.</li>
        <li><strong>Texture:</strong> talc-fine, never gritty.</li>
        <li><strong>Smell:</strong> fresh, grassy, slightly sweet — never hay-like or musty.</li>
      </ul>
      <p>For lattes, a high culinary or "latte-grade" matcha is usually the right choice. For drinking neat, only true ceremonial grade will deliver the experience.</p>
    `,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
