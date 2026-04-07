import KanjiWatermark from "./KanjiWatermark";

const specs = [
  { label: "Origin", value: "Japan · Shizuoka Prefecture" },
  { label: "Product", value: "Stone-ground tencha (matcha) · Roasted bancha (houjicha)" },
  { label: "Importer", value: "Vechirka LDA · VAT PT 517639475" },
  { label: "Compliance", value: "Certificate of Origin · Phytosanitary · EU food safety" },
  { label: "Shipping", value: "CIF Lisbon via sea freight · consolidated per batch" },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-6">
            Direct Import · Japan
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-6">
            Japanese matcha that proves itself.
          </h1>
          <p className="font-body text-lg text-ink/70 mb-8 max-w-xl">
            From the farm to your menu — with the invoice to show for it.
          </p>

          <div className="border-l-4 border-gold pl-6 mb-10">
            <p className="font-heading text-xl text-ink italic">
              "Authentic Japanese farms. Lucky you found us."
            </p>
          </div>

          <p className="font-body text-base text-ink/60 mb-10 max-w-xl leading-relaxed">
            Every batch of Maneki Matcha is sourced directly from Japanese farms during seasonal harvest windows. 
            We don't hold permanent stock — we import per season, per flush. What you receive is traceable by farm, 
            region, and harvest date. When it's gone, we wait for the next harvest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-matcha text-cream px-8 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-ink transition-colors"
            >
              Request Samples
            </button>
            <button
              onClick={() => scrollTo("#products")}
              className="border-2 border-ink text-ink px-8 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors"
            >
              See Products
            </button>
          </div>
        </div>

        {/* Right — Dark specs panel */}
        <div className="bg-ink text-cream p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center">
          <KanjiWatermark kanji="猫" className="right-4 top-4 text-cream" />
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-8">
            Product Passport
          </p>
          <div className="space-y-6 relative z-10">
            {specs.map((spec) => (
              <div key={spec.label} className="border-b border-cream/10 pb-4">
                <p className="font-mono-label text-xs tracking-widest uppercase text-cream/40 mb-1">
                  {spec.label}
                </p>
                <p className="font-body text-sm text-cream/90">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
