import matchaPowder from "@/assets/products/matcha/matcha-powder.png";

const specs = [
  { label: "Origin", value: "Japan · Shizuoka" },
  { label: "Importer", value: "Vechirka LDA · PT 517639475" },
  { label: "Compliance", value: "CoO · Phyto · EU food" },
  { label: "Shipping", value: "CIF Lisbon · sea freight" },
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

        {/* Right — Product image with overlay specs */}
        <div className="relative overflow-hidden bg-ink flex items-center justify-center min-h-[50vh] lg:min-h-0">
          <img
            src={matchaPowder}
            alt="Maneki Matcha powder close-up"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Product Passport overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-ink/80 backdrop-blur-sm p-4 lg:p-5 z-10">
            <p className="font-mono-label text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-3">
              Product Passport
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <p className="font-mono-label text-[0.55rem] tracking-widest uppercase text-cream/40 mb-0.5">
                    {spec.label}
                  </p>
                  <p className="font-body text-xs text-cream/90">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
