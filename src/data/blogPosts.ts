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
    id: "test",
    slug: "test-deploy-check",
    title: "TEST DEPLOY CHECK — delete me",
    excerpt: "Temporary stub to verify Vercel auto-deploy pipeline. Will be removed immediately.",
    category: "B2B",
    readTime: 1,
    publishedAt: "2026-05-14",
    featuredImage: "https://images.pexels.com/photos/6933428/pexels-photo-6933428.jpeg?auto=compress&cs=tinysrgb&w=1260",
    metaTitle: "TEST | Nokari Journal",
    metaDescription: "Test deploy check.",
    tags: ["test"],
    content: `<p>Test stub for Vercel deploy verification.</p>`,
  },
  {
    id: "6",
    slug: "matcha-wholesale-pricing-europe-2026",
    title: "Matcha Wholesale Pricing in Europe: What You Should Actually Pay in 2026",
    excerpt: "Most matcha buyers in Europe are either overpaying or sourcing the wrong grade. Here's the honest 2026 pricing reference — in EUR, by application — and the questions every café buyer should be asking their supplier.",
    category: "B2B",
    readTime: 7,
    publishedAt: "2026-05-14",
    featuredImage: "https://images.pexels.com/photos/6933428/pexels-photo-6933428.jpeg?auto=compress&cs=tinysrgb&w=1260",
    metaTitle: "Matcha Wholesale Pricing Europe 2026 | Nokari Journal",
    metaDescription: "Real EUR price benchmarks for matcha wholesale in Europe 2026. Latte grade, ceremonial, culinary — what cafés should actually pay and red-flag thresholds.",
    tags: ["wholesale", "B2B", "pricing", "europe", "sourcing"],
    content: `<p>Your supplier just sent a revised price list. Ceremonial grade: €185/kg. Premium latte grade: €92/kg. Culinary grade: €48/kg. Is that fair? Are you overpaying? And what exactly should a 12-seat café in Lisbon or a bakery chain in Berlin be budgeting for matcha in 2026?</p>

<p>These are questions most buyers never get a straight answer to — because the matcha industry, like most specialty food trades, runs on information asymmetry. Suppliers benefit when buyers don't know the market. This article fixes that.</p>

<h2>What Actually Happened to Matcha Prices (And Why They Won't Go Back)</h2>

<p>If you bought matcha in 2023 and compared it to what you're paying now, the difference is jarring. Wholesale prices for premium grades surged 40–60% between 2024 and 2025 and haven't reversed. Here's the honest version of why:</p>

<p>The 2024–2025 "matcha shock" was a compound event. Record spring heatwaves in Kyoto collapsed tencha yields by roughly 40% in the highest-grade Uji plots. Simultaneously, Japanese producers had already depleted their reserve frozen tencha stocks from the previous year — a critical buffer they traditionally use to stabilise quality across seasons. And at exactly this moment, global demand surged 200–1,300% depending on the market segment, with major beverage corporations entering pre-harvest forward contracts and removing volume from the open market.</p>

<p>The result: Kyoto Prefecture tencha auction prices climbed 116% year-over-year in 2025. And the cost-side drivers — energy, fertiliser, shade-net infrastructure, ageing rural labour — have now integrated permanently into the supply structure. Industry analysts across Japan are unanimous: <strong>2023 price levels will not return</strong>. Plan your budgets around current 2026 pricing as the new floor, with 5–8% annual inflation expected going forward.</p>

<h2>The 2026 Price Reference for European Buyers (in EUR)</h2>

<p>Most published pricing guides anchor on USD and assume direct import from Japan. European café buyers don't operate that way — they source through EU distributors, pay in euros, and receive stock that has already cleared customs. Here's a realistic EUR reference for 2026 European distributor pricing:</p>

<table>
  <thead>
    <tr><th>Grade</th><th>1–5 kg</th><th>10–25 kg</th><th>50 kg+</th><th>Best for</th></tr>
  </thead>
  <tbody>
    <tr><td>Standard Ceremonial</td><td>€160–€290/kg</td><td>€130–€220/kg</td><td>€110–€180/kg</td><td>Koicha, tea service, premium RTD</td></tr>
    <tr><td>Premium Latte / Barista</td><td>€75–€120/kg</td><td>€65–€95/kg</td><td>€55–€80/kg</td><td>Matcha lattes, café drinks</td></tr>
    <tr><td>Culinary (High-End)</td><td>€45–€70/kg</td><td>€38–€58/kg</td><td>€32–€48/kg</td><td>Pastry, baking, desserts</td></tr>
    <tr><td>Industrial / Ingredient</td><td>€28–€45/kg</td><td>€20–€32/kg</td><td>€15–€25/kg</td><td>RTD manufacturing, supplements</td></tr>
  </tbody>
</table>

<p>These ranges reflect EU distributor pricing with customs already cleared. Direct import from Japan (for buyers ordering 100 kg+ annually) runs 25–35% lower — but adds logistics complexity, minimum lead times of 3–6 weeks, and the requirement to handle JAS compliance documentation yourself.</p>

<p><strong>The 2026 red-flag thresholds:</strong> If anyone offers you ceremonial-grade below €95/kg or latte-grade below €55/kg at any volume, ask for the Certificate of Origin, current-lot lab testing, and harvest year declaration immediately. Legitimate suppliers provide these without friction. The price floor for genuine Japanese matcha has a structural floor — and offers far below it almost always mean Chinese-origin product mislabelled, sencha powder sold as matcha, or aged inventory with oxidised chlorophyll and degraded aroma.</p>

<h2>The Trade Secret Most Buyers Miss: Grade Engineering</h2>

<p>Here's what separates experienced matcha buyers from beginners: <strong>the grade you need depends entirely on the application, not prestige</strong>.</p>

<p>In a milk-based latte with 18–25cl of oat or cow milk, blind tasting studies consistently show that customers cannot distinguish €90/kg latte-grade matcha from €200/kg ceremonial-grade matcha. The dairy proteins bind to the tannins and flatten the flavour differentiation that makes ceremonial grade worth the premium in a traditional bowl of koicha.</p>

<p>The practical implication: a café serving 40 matcha lattes per day uses approximately 120g of matcha — about €11/day at latte grade (€90/kg) versus €24/day at ceremonial (€200/kg). That's €4,700/year in unnecessary cost on a single café location, for a product difference that your customers are statistically unlikely to notice.</p>

<p>Grade engineering is not about cutting corners — it is about matching specification to application:</p>

<ul>
  <li><strong>Latte service:</strong> Premium latte grade (€65–€95/kg) is the correct specification. It is blended from late first-flush and early second-flush tencha, designed to hold up against milk, and produces a cleaner cup at extraction ratios typical for café service.</li>
  <li><strong>Bakery and pastry:</strong> High-end culinary grade (€38–€58/kg) retains vivid green colour under heat better than some ceremonial grades and reduces your ingredient COGS by 30–40%.</li>
  <li><strong>Ceremonial bowls and high-end tea menus:</strong> This is where ceremonial grade earns its price. Served traditionally with water at 70–75°C, the umami depth and L-theanine profile of shade-grown first-flush tencha is irreplaceable and fully justifiable at €130–€220/kg.</li>
</ul>

<h2>EU Import Context: What You're Actually Paying For</h2>

<p>Unlike the United States, where a 10% Section 122 tariff on Japanese agricultural products took effect in early 2026, the European Union maintains a <strong>0% import duty on matcha (HS code 0902.10 and 0902.20)</strong>. This is a structural advantage European buyers hold over US counterparts — one that has widened the landed-cost gap between markets in 2026.</p>

<p>EU food safety compliance for matcha adds its own layer of documentation requirements, however. Every commercial shipment requires a Certificate of Conformity verifying pesticide residue limits below EU MRL thresholds — which are significantly stricter than Japan's own JAS standards. For European buyers sourcing directly from Japan, insist on EU MRL testing (not just JAS certification) as a contractual requirement. For buyers sourcing through EU-based distributors, this should already be handled upstream — but it is worth confirming once before establishing a long-term supplier relationship.</p>

<h2>First Order Advice for Small European Cafés</h2>

<p>You're running a 15-seat speciality café in Porto, Brussels, or Vienna. You want to add a matcha latte to your menu. What do you actually order?</p>

<p>Start with 1–2 kg of premium latte grade from a European importer or distributor with clear origin documentation. At 3g per drink (the standard barista ratio for a 20cl latte), 1 kg gives you approximately 333 servings. At a retail price of €5.50 per latte, that's €1,830 in revenue from a €75–€90 ingredient cost — a 96%+ gross margin on matcha ingredient alone before labour and overhead.</p>

<p>Test the product over 4–6 weeks. Note which days sell best, whether customers reorder, and whether your barista team is happy with the solubility and colour. Then commit to a 5 kg order to access the first volume discount tier, which typically reduces your per-kg cost by 10–15%. At 25 kg — roughly annual volume for a busy single-location café — you access mid-tier wholesale pricing and should be establishing a formal annual supply agreement.</p>

<p>Avoid the two most common small-café sourcing mistakes: (1) buying ceremonial grade for lattes because it "sounds premium," and (2) sourcing from a retail brand instead of a B2B importer. Retail matcha brands, even premium ones, carry 40–80% retail margin built into their pricing. A dedicated B2B supplier removes that margin and passes it to your operation.</p>

<h2>Kagoshima vs. Uji in 2026: The Practical Answer</h2>

<p>If your current supplier is quoting Uji-origin for all grades, ask them specifically whether the latte and culinary grades are actually tencha from Uji — or whether the premium is a brand story applied to Kagoshima-origin material.</p>

<p>In 2025, Kagoshima surpassed Shizuoka to become Japan's largest first-flush tencha producer, and its flat terrain enables large-scale mechanisation that delivers consistent, high-quality matcha at 20–30% below Uji pricing. For latte and culinary applications, Kagoshima-origin matcha from a reputable producer is objectively the better value specification in 2026. Uji remains the correct choice for ceremonial service, where the heritage terroir, stone-milling tradition, and L-theanine profile command their premium.</p>

<p>At <a href="https://nokarimatcha.eu">Nokari</a>, our sourcing covers both origins — matched to application. If you want to know exactly which region and harvest your matcha comes from, we'll tell you, because traceability isn't a sales pitch: it's the baseline of a serious B2B relationship.</p>

<h2>What to Ask Any Matcha Supplier in 2026</h2>

<p>Before committing to a wholesale supplier relationship, these five questions cut through most of the noise:</p>

<ul>
  <li>What is the harvest year and milling date of the current lot?</li>
  <li>Can you provide EU MRL pesticide compliance documentation for this specific lot?</li>
  <li>What is the origin prefecture and specific farm or co-operative?</li>
  <li>Is this stone-milled or jet-milled, and what is the particle size specification?</li>
  <li>What is your minimum order quantity, and at what volume do pricing tiers change?</li>
</ul>

<p>A supplier who hesitates on any of these questions is not the supplier you want for consistent menu quality and regulatory compliance in the EU market.</p>

<p>For the full picture on how different Japanese origins affect what lands in your cup, see our breakdown of <a href="/blog/japan-matcha-regions-uji-nishio-kagoshima">Uji, Nishio, and Kagoshima — and what the differences mean for your menu</a>. And if you're still sorting out the grade question, our <a href="/blog/matcha-grades-explained-ceremonial-culinary-cafe">grades explained guide</a> covers the full spectrum from ceremonial through culinary in practical café terms.</p>

<p>Ready to benchmark your current supplier against 2026 market pricing, or curious what sample quantities look like for your operation? <a href="https://nokarimatcha.eu/contact">Get in touch</a> — we can usually turn a pricing conversation around in 24 hours.</p>

<p>One last thought: if your current supplier can't tell you which harvest season their matcha comes from, is that really someone you want stocking your shelves?</p>`,
  },
  {
    id: "1",
    slug: "japanese-matcha-guide-european-cafes",
    title: "What Makes Japanese Matcha Different: A Buyer's Guide for European Cafés",
    excerpt:
      "Three years ago, a café owner in Porto called us asking why their matcha latte tasted like seaweed. This guide is for café owners and HoReCa buyers who want to get it right — not just buy a green powder and call it matcha.",
    featuredImage: "https://images.pexels.com/photos/33094639/pexels-photo-33094639.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
    featuredImage: "https://images.pexels.com/photos/8329664/pexels-photo-8329664.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
    featuredImage: "https://images.pexels.com/photos/8329669/pexels-photo-8329669.jpeg?auto=compress&cs=tinysrgb&w=1260",
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
  {
    id: "4",
    slug: "perfect-matcha-latte-barista-method",
    title: "How to Make a Perfect Matcha Latte: The Barista Method",
    excerpt:
      "The matcha latte that put you off matcha was almost certainly made wrong. Not the wrong ingredient — the wrong method. Here's the professional technique that fixes everything.",
    featuredImage: "https://images.pexels.com/photos/5946637/pexels-photo-5946637.jpeg?auto=compress&cs=tinysrgb&w=1260",
    publishedAt: "2026-05-18",
    category: "Recipes",
    tags: ["matcha latte recipe", "how to make matcha latte", "matcha latte", "barista matcha", "matcha preparation"],
    readTime: 6,
    metaTitle: "Perfect Matcha Latte Recipe: The Barista Technique (Step-by-Step)",
    metaDescription:
      "The professional method for a matcha latte that actually tastes good — right ratio, right temperature, right milk technique. No bitterness, no lumps.",
    content: `
      <h2>What You Actually Need</h2>
      <p><strong>Essential:</strong></p>
      <ul>
        <li>Matcha powder: 2–3g (premium or café grade)</li>
        <li>Hot water: 60–70ml at 75–80°C</li>
        <li>Milk of choice: 150–180ml</li>
        <li>A small whisk or electric frother</li>
        <li>A fine-mesh sieve</li>
      </ul>
      <p>Use premium or café-grade matcha, not ceremonial. Ceremonial grade is designed for straight whisked tea — its delicate flavour is largely lost in milk.</p>

      <h2>The Method, Step by Step</h2>

      <h3>1. Sift the matcha</h3>
      <p>Put your sieve over the bowl or cup. Measure 2–3g of matcha and sift it through. Do not skip this step. Matcha clumps — even fresh, well-stored powder will have micro-clumps that don't dissolve. Sifting breaks them apart before you add liquid.</p>

      <h3>2. Build a paste first</h3>
      <p>Add 15–20ml of your hot water to the sifted powder. Using a whisk or small electric frother, work it into a smooth, bright green paste with no visible lumps.</p>
      <p>This is the core technique. Adding all the water at once dilutes the powder before it fully hydrates. Starting with a small amount forces complete dissolution and zero graininess.</p>
      <p>The paste should look like a smooth, slightly glossy dark green. If it's grainy, your water was too hot — above 85°C destroys L-theanine and creates bitterness.</p>

      <h3>3. Add the rest of the water</h3>
      <p>Add the remaining hot water (up to 60–70ml total) and whisk briefly. You should have a vibrant green liquid with a thin foam layer on top.</p>

      <h3>4. Texture your milk</h3>
      <p>Steam or froth 150–180ml of milk to silky, microfoamed texture — around 60–65°C.</p>
      <p><strong>Oat milk is the default choice</strong> for matcha. Its mild sweetness complements matcha's grassiness. Barista editions (Oatly Barista, Minor Figures) steam much better than standard versions.</p>
      <p>Avoid almond milk: the thin texture separates and the flavour clashes with matcha.</p>

      <h3>5. Combine</h3>
      <p>Pour steamed milk over the matcha base. For iced: add ice to a tall glass, pour matcha base over ice, then add cold milk. Stir once.</p>

      <h2>Ratios: The Professional Cheat Sheet</h2>
      <table>
        <thead>
          <tr><th>Drink</th><th>Matcha</th><th>Hot Water</th><th>Milk</th></tr>
        </thead>
        <tbody>
          <tr><td>Standard hot latte</td><td>2g</td><td>60ml</td><td>160ml</td></tr>
          <tr><td>Strong latte</td><td>3g</td><td>60ml</td><td>150ml</td></tr>
          <tr><td>Iced latte</td><td>2–3g</td><td>40ml</td><td>180ml over ice</td></tr>
          <tr><td>Double matcha</td><td>4g</td><td>70ml</td><td>170ml</td></tr>
        </tbody>
      </table>

      <h2>The Three Mistakes That Ruin Matcha Lattes</h2>
      <p><strong>1. Water too hot.</strong> Boiling water scalds the catechins and destroys the amino acids that produce sweetness. Keep water between 75–80°C. If you don't have a temperature-controlled kettle, let boiling water sit for 3–4 minutes.</p>
      <p><strong>2. No sifting, no paste stage.</strong> Adding unsifted powder directly to liquid guarantees clumps. The drink looks speckled and has uneven flavour.</p>
      <p><strong>3. Too much milk, too little matcha.</strong> Many café recipes under-dose to reduce cost. 1.5g in 200ml of milk makes a vaguely green drink that tastes mostly of oat milk. Use minimum 2g per drink.</p>

      <h2>Scaling for Café Volume</h2>
      <p><strong>Pre-sift in bulk.</strong> Every morning, sift a day's supply into a dry, airtight container.</p>
      <p><strong>Make a matcha concentrate.</strong> Whisk 10g of matcha with 200ml of hot water. Store for up to 4 hours. Use 30–40ml per drink, top with milk. Consistent results, faster service.</p>

      <p>The perfect matcha latte isn't complicated — it's just precise. Sift, paste, dissolve, milk.</p>
      <p><a href="https://nokarimatcha.eu/contact">Get a café-grade sample pack →</a></p>
    `,
  },
  {
    id: "5",
    slug: "japan-matcha-regions-uji-nishio-kagoshima",
    title: "Uji, Nishio, Kagoshima: Japan's Matcha Regions and What They Mean for Your Menu",
    excerpt:
      "Uji, Nishio, Kagoshima — Japan's three matcha regions aren't interchangeable. Each has a character formed over decades or centuries of tradition. Here's what the differences actually mean for your café menu.",
    featuredImage: "https://images.pexels.com/photos/23192930/pexels-photo-23192930.jpeg?auto=compress&cs=tinysrgb&w=1260",
    publishedAt: "2026-05-20",
    category: "Culture",
    tags: ["japanese matcha regions", "uji matcha", "nishio matcha", "kagoshima matcha", "matcha origin", "japanese matcha"],
    readTime: 7,
    metaTitle: "Japan's Matcha Regions Explained: Uji vs Nishio vs Kagoshima (2026)",
    metaDescription:
      "The real differences between Japan's three major matcha-growing regions — what they produce, why it matters, and how to use regional origin on your café menu.",
    content: `
      <h2>Uji, Kyoto: The Original</h2>
      <p>Uji sits about 15 kilometres south of Kyoto, in a river basin with a microclimate that tea producers have cultivated for over 800 years. The region has morning fog, mild temperatures moderated by proximity to the Uji River, and soils with a specific mineral profile that contributes to flavour.</p>
      <p><strong>What Uji matcha tastes like:</strong> Complex. The characteristic profile is deep umami, a round sweetness, and a long, clean finish with minimal bitterness. High-grade Uji matcha can have a layered quality — different notes appearing as it cools — that's unusual in any tea category.</p>
      <p><strong>The terroir factor:</strong> Uji has Protected Geographical Indication (PGI) status in Japan — only matcha grown and processed in the designated area can carry the name. This is the same legal protection that governs Champagne in Europe. Much matcha labelled "Uji-style" or "Uji blend" in export markets is not Uji origin — it's a marketing reference, not a legal designation.</p>
      <p><strong>For cafés:</strong> Uji ceremonial grade is appropriate for a dedicated matcha service — whisked tea prepared traditionally, served without milk. For latte service, the premium is largely wasted in milk drinks. Supply can be limited after poor harvests, and prices have risen sharply as international demand has increased.</p>

      <h2>Nishio, Aichi: The Workhorse of Quality</h2>
      <p>Nishio produces approximately 60% of Japan's total matcha output by volume. That might make it sound like the industrial option — it isn't. Nishio is to Japanese matcha what Napa Valley is to Californian wine: high volume and high quality aren't mutually exclusive when the infrastructure has been optimised over generations.</p>
      <p>The Yahagi River basin has sandy, well-drained soils and a stable climate that produces consistent yields of high-quality tencha (the shade-grown leaf that becomes matcha after stone-grinding). The region has been growing tea since the 15th century, and the current farming infrastructure reflects that accumulated knowledge.</p>
      <p><strong>What Nishio matcha tastes like:</strong> Clean, vivid, and well-balanced. The umami is present but less complex than Uji's — which is actually a strength in milk-based drinks. That cleaner character shows better in lattes than the more layered Uji profile, which can read as slightly astringent when cut with oat milk.</p>
      <p><strong>For cafés:</strong> Nishio is where most well-positioned European wholesale matcha for café use comes from. It hits the combination café menus actually need: vivid green that photographs well, consistent flavour that performs in milk, reliable supply, and economics that make the drink profitable. Premium café-grade Nishio runs €20–€40/kg wholesale — roughly half the cost of comparable Uji, with comparable or better latte performance.</p>
      <p><strong>The consistency advantage:</strong> Nishio's larger production base means when you reorder, the next bag will taste like the previous one. With very small Uji producers, variation between harvest years can be significant.</p>

      <h2>Kagoshima: The New Frontier</h2>
      <p>Kagoshima sits at the southern tip of Kyushu — a substantially warmer climate than either Uji or Nishio, with volcanic soil from the active Sakurajima caldera. Tea cultivation in Kagoshima expanded significantly in the 1970s and 1980s; matcha production infrastructure developed largely in the 2000s and 2010s.</p>
      <p><strong>What Kagoshima matcha tastes like:</strong> Bright, with a fresh grassy character and less depth than longer-established regions. The volcanic soil contributes a slight mineral quality. Bitterness tends to be slightly higher than Nishio at equivalent grades.</p>
      <p><strong>The altitude factor:</strong> Kagoshima's warmer climate produces faster-growing leaves with higher catechin content (more antioxidants) but lower amino acid content (less L-theanine, less umami sweetness). This is a different profile, not an inferior one.</p>
      <p><strong>For cafés:</strong> Good Kagoshima culinary or café grade is a legitimate product for high-volume applications — baking, blended drinks, large-throughput settings. Typically €12–€22/kg wholesale. Several producers are investing seriously in quality improvement and the gap with Nishio is narrowing for mid-grade products.</p>

      <h2>Region Comparison at a Glance</h2>
      <table>
        <thead>
          <tr><th></th><th>Uji (Kyoto)</th><th>Nishio (Aichi)</th><th>Kagoshima</th></tr>
        </thead>
        <tbody>
          <tr><td>History</td><td>800+ years</td><td>500+ years</td><td>50+ years (matcha)</td></tr>
          <tr><td>Climate</td><td>Cool, foggy</td><td>Mild, stable</td><td>Warm, subtropical</td></tr>
          <tr><td>Soil</td><td>Clay loam, river basin</td><td>Sandy, alluvial</td><td>Volcanic</td></tr>
          <tr><td>Flavour</td><td>Complex umami, layered</td><td>Clean, balanced, vivid</td><td>Bright, grassy</td></tr>
          <tr><td>L-theanine</td><td>Highest</td><td>High</td><td>Moderate</td></tr>
          <tr><td>Best use</td><td>Ceremonial service</td><td>Core café grade, lattes</td><td>Culinary, baking</td></tr>
          <tr><td>Wholesale price</td><td>€45–€120/kg</td><td>€18–€45/kg</td><td>€10–€25/kg</td></tr>
        </tbody>
      </table>

      <h2>How to Use Regional Origin on Your Menu</h2>
      <p><strong>The transparent approach:</strong> Name the region. "Nishio matcha latte" or "Single-origin Uji matcha" gives customers something to discover and positions your café as knowledgeable rather than just selling a green drink.</p>
      <p><strong>The story approach:</strong> A brief menu description: <em>"Grown in Nishio, Aichi — the same river valley that has produced Japan's finest matcha for 500 years."</em> It's not overselling. It's providing context that makes the drink more interesting.</p>
      <p>Both approaches require that you know what you're serving — meaning your supplier can tell you the origin, harvest year, and ideally cultivar. If they can't, the story falls apart.</p>
      <p>Regional origin is a signal of traceability. Traceability is a signal of quality. Quality, communicated clearly, justifies a price that makes your matcha programme sustainable.</p>
      <p><a href="https://nokarimatcha.eu/contact">Request a regional tasting kit →</a></p>
    `,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
