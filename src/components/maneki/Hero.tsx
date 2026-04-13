import matchaPowder from "@/assets/products/matcha/matcha-powder.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
        {/* Left — Text */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-6">
            Direct Import · Japan
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.1] mb-8">
            From Japanese farms to your matcha latte.
          </h1>

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

        {/* Right — Image */}
        <div className="relative overflow-hidden bg-ink order-1 lg:order-2 aspect-square lg:aspect-auto lg:min-h-[500px]">
          <img
            src={matchaPowder}
            alt="Nokari Matcha powder close-up"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
