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
    slug: "japanese-matcha-guide-european-cafes",
    title: "What Makes Japanese Matcha Different: A Buyer's Guide for European Cafés",
    excerpt:
      "Three years ago, a café owner in Porto called us asking why their matcha latte tasted like seaweed. This guide is for café owners and HoReCa buyers who want to get it right — not just buy a green powder and call it matcha.",
    featuredImage: "/blog/images/matcha-buyer-guide-hero.jpg",
    publishedAt: "2026-05-12",
    category: "B2B",
    tags: ["matcha wholesale", "matcha for cafes", "horeca", "japanese matcha", "sourcing"],
    readTime: 9,
    metaTitle: "Japanese Matcha for European Cafés: The Complete Buyer's Guide (2026)",
    metaDescription:
      "Everything a café owner needs to know before buying matcha wholesale in Europe — grades, sourcing, pricing, and what separates farm-grade from commodity powder.",
    content: `
      <p>Three years ago a café owner in Porto called us in something close to panic: their newly launched matcha latte tasted, in their own words, "like seaweed steamed in a sock." They had bought a 1 kg bag from a generic European wholesaler labelled "Premium Japanese Matcha" for €38. It was almost certainly Chinese tencha repackaged in Osaka, oxidised in transit, and at least nine months past its useful life. This is the European matcha market in one anecdote — and the reason any serious café buyer needs to understand what they are actually purchasing.</p>

      <h2>Origin is not a marketing slogan</h2>
      <p>Genuine Japanese matcha comes from a small handful of regions — Uji (Kyoto), Nishio (Aichi), Yame (Fukuoka) and Kagoshima account for almost all of it. The bushes are shaded with <em>ooishita</em> covers for at least 20 days before harvest, the leaves are steamed within hours of picking to prevent oxidation, de-stemmed and de-veined into <em>tencha</em>, and finally stone-milled at 30 rpm. Anything skipping these steps is, technically, powdered green tea — not matcha. Most of what is sold as matcha in European supermarkets and on Amazon is exactly that: powdered sencha or Chinese green tea, sometimes blended, sometimes dyed with spirulina to fake the jade colour.</p>

      <h2>What you actually pay for at wholesale</h2>
      <p>Honest farm-direct ceremonial matcha lands in Europe at €180–€320 per kilo. A serious café-grade (the workhorse for lattes and iced drinks) sits between €90 and €150 per kilo. Anything offered to you under €60/kg wholesale is not Japanese single-origin matcha, regardless of what the label says — the farmgate price in Uji alone makes that mathematically impossible. The cost is driven by yield: a single shaded bush produces a fraction of an unshaded one, and stone-milling a kilo of tencha takes nearly 30 hours of mill time. There are no shortcuts that preserve the colour, the umami and the texture.</p>

      <h2>What to ask before you sign a wholesale contract</h2>
      <p>Four questions filter out 90% of the noise. First: what is the harvest date and the cultivar? A reputable supplier knows whether you are getting Samidori, Okumidori, Yabukita or a blend, and from which spring harvest. Second: how is it stored and shipped? Matcha must travel refrigerated and arrive vacuum-sealed in opaque, nitrogen-flushed packaging — once exposed to oxygen and light, it loses meaningful colour and aroma within weeks. Third: can you see a JAS or prefectural certificate of origin? Fourth: will they send a 20–30 g sample before a bulk order? A supplier who refuses any of these is almost always hiding something — usually the country of origin, the harvest year, or both.</p>
    `,
  },
  {
    id: "2",
    slug: "matcha-grades-explained-ceremonial-culinary-cafe",
    title: "Matcha Grades Explained: Ceremonial, Premium & Culinary — What Your Café Actually Needs",
    excerpt:
      "Here's something the matcha industry doesn't advertise: there are no official, universally enforced matcha grade standards anywhere in the world. 'Ceremonial grade' is a marketing term. Here's what it actually means.",
    featuredImage: "/blog/images/matcha-grades-hero.jpg",
    publishedAt: "2026-05-14",
    category: "B2B",
    tags: ["matcha grades", "ceremonial matcha", "culinary matcha", "cafe grade", "matcha quality"],
    readTime: 7,
    metaTitle: "Matcha Grades Explained: Ceremonial vs Culinary vs Café Grade (2026)",
    metaDescription:
      "The honest breakdown of matcha grades — what the labels mean, what they don't mean, and which grade your café or restaurant actually needs for great drinks.",
    content: `
      <p>Here is something the matcha industry would rather you not dwell on: there are no official, universally enforced matcha grade standards anywhere in the world — not in Japan, not in the EU, not at JAS. "Ceremonial grade" is, legally speaking, a marketing claim. The Japanese Tea Central Public Interest Incorporated Association publishes guidance, individual cooperatives in Uji and Nishio set internal benchmarks, and tea masters grade lots at the National Tea Competition each year, but no inspector is going to fine a Berlin distributor for putting "ceremonial" on a tin of mediocre powder. Once you accept that, the grade conversation gets a lot more useful.</p>

      <h2>Ceremonial grade — what it actually signals</h2>
      <p>Used responsibly, "ceremonial" describes matcha made for drinking <em>usucha</em> or <em>koicha</em> with water alone: first-harvest (<em>ichibancha</em>) leaves picked in late April or early May, shaded for at least 20 days, de-stemmed, stone-milled, and so smooth it dissolves cleanly with no chalk and no bitterness. The colour is vivid jade, not olive. The aroma is sweet grass and seaweed nori in good balance, never hay or fish. At wholesale, real ceremonial grade is €180–€320/kg. If you serve straight matcha shots, traditional usucha, or a premium tasting flight, you need this. For 95% of café drinks, you do not.</p>

      <h2>Premium and café grade — the workhorses</h2>
      <p>This is where most cafés should live. "Premium" or "café grade" is typically still first-harvest but from slightly later picks or a blend of cultivars, milled to a slightly coarser particle size (8–12 microns instead of 5–8). It costs €90–€150/kg, holds its colour and umami against milk and ice, and frothing it does not feel like a crime against a tea master. A serious café-grade matcha makes a latte that tastes like matcha — sweet, vegetal, slightly creamy — rather than a green smoothie. Using ceremonial grade in a 12 oz oat latte is not a flex; it is wasted money, because the milk masks the very nuance you paid for.</p>

      <h2>Culinary grade — and what to avoid</h2>
      <p>Culinary grade is second- or third-harvest tencha, sometimes shaded for as little as a week, milled coarser still. It is bitter and astringent on its own but performs in baking, ice cream and energy bars where sugar and fat round out the edges. It runs €40–€80/kg from honest suppliers. Below that price point, you are almost always looking at Chinese powdered green tea, sencha dust, or matcha that has been sitting in a warehouse for two years. The visual test is fast: tip a teaspoon onto a white plate. Vivid jade with no yellow undertone is good. Khaki, olive, or anything with a brownish cast is oxidised, old, or not really matcha. Trust your eyes before you trust the label.</p>
    `,
  },
  {
    id: "3",
    slug: "l-theanine-matcha-vs-coffee-energy-science",
    title: "The L-Theanine Effect: Why Matcha Energy Is Different From Coffee",
    excerpt:
      "The claim is all over matcha marketing: calm energy, focused alertness, no crash. It sounds like wellness copywriting. It's not. There's actual biochemistry here, and it's specific enough to be interesting.",
    featuredImage: "/blog/images/ltheanine-hero.jpg",
    publishedAt: "2026-05-16",
    category: "Science",
    tags: ["l-theanine", "matcha health benefits", "matcha vs coffee", "caffeine", "focus"],
    readTime: 8,
    metaTitle: "Matcha vs Coffee: The Science of L-Theanine and Calm Focus",
    metaDescription:
      "The biochemistry behind why matcha doesn't give you the jitters. L-theanine, caffeine synergy, and what it actually means for focus, anxiety, and your café menu.",
    content: `
      <p>The claim is everywhere in matcha marketing: calm energy, focused alertness, no crash. It reads like wellness copywriting written by someone who has never opened a pharmacology paper. The frustrating thing is that it is mostly true — there is real biochemistry behind it, and once you understand the mechanism it becomes useful information for designing a café menu, not just a brand story.</p>

      <h2>The amino acid doing the work</h2>
      <p>L-theanine is a non-protein amino acid found almost exclusively in <em>Camellia sinensis</em>. A good ceremonial matcha contains roughly 30–50 mg of L-theanine per gram of powder — meaning a typical 2 g serving delivers 60–100 mg. That number matters because L-theanine crosses the blood-brain barrier within about 30 minutes and increases alpha-wave activity in the brain: the same wavelength associated with relaxed, wakeful attention (think the state right before falling asleep, or during light meditation). It also nudges GABA, dopamine and serotonin upward modestly. On its own, L-theanine is a mild relaxant.</p>

      <h2>Why the combination is the interesting part</h2>
      <p>A 2 g serving of ceremonial matcha also delivers roughly 60–70 mg of caffeine — about two-thirds of an espresso. On its own, that caffeine would do what caffeine always does: block adenosine receptors, spike cortisol and adrenaline, and produce the familiar coffee arc of sharp alertness followed by a noticeable comedown. But caffeine and L-theanine taken together behave differently than either does alone. Multiple controlled trials (Owen et al. 2008, Giesbrecht et al. 2010, Kahathuduwa et al. 2018) have shown the combination improves attention-switching and reduces self-reported "tired but wired" feelings compared to caffeine alone. The L-theanine appears to blunt the cortisol spike and smooth the curve, which is why matcha drinkers describe a 4–6 hour gentle alertness instead of a 90-minute coffee peak.</p>

      <h2>What this means for your menu — and what it doesn't</h2>
      <p>For a café, the practical implication is that matcha occupies a different drinking moment than coffee. It is the 3 pm drink for someone who already had two espressos and does not want a third. It is the morning drink for guests who say they "can't do coffee anymore." It is genuinely useful for shift workers, students and anyone managing anxiety alongside a need to focus — and the data supports framing it that way honestly. What it is not: a stimulant-free drink, a cure for ADHD, or a weight-loss supplement. The honest pitch — "smoother, longer, gentler caffeine because of an amino acid only tea contains" — is more interesting than the wellness-influencer version, and it is the one that builds repeat customers.</p>
    `,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
