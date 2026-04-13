import { useFadeUp } from "./useFadeUp";

const personas = [
  {
    icon: "☕",
    title: "Specialty Cafés",
    pain: "\"My matcha supplier can't tell me which farm it's from.\"",
    body: "You care about origin, quality, and presentation. Nokari gives you a traceable, competition-grade matcha that your baristas can talk about with confidence. We provide the documentation, the story, and the margin."
  },
  {
    icon: "🌿",
    title: "Wellness & Vegan Brands",
    pain: "\"I need a clean-label matcha I can actually trust.\"",
    body: "Single-origin, no additives, no blending. Our matcha and houjicha are exactly what the label says — nothing else. Perfect for smoothie bars, health food stores, and plant-based menus that need to back up their claims."
  },
  {
    icon: "🏪",
    title: "Expat & Asian Retailers",
    pain: "\"I want to stock real Japanese tea, not European repack.\"",
    body: "Your customers know the difference. Nokari supplies genuine Japanese-origin tea with proper documentation — ready for retail shelves in Portugal and the EU. Labels included, compliance handled."
  },
];

const WhoWeServe = () => {
  const ref = useFadeUp();

  return (
    <section id="serve" className="bg-warm-cream py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            Who We Serve
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold">
            Built for businesses that care what's in the cup.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p) => (
            <div key={p.title} className="bg-cream p-8 border border-ink/5">
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="font-heading text-2xl text-ink font-semibold mb-3">{p.title}</h3>
              <p className="font-heading text-sm text-matcha italic mb-4">{p.pain}</p>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
