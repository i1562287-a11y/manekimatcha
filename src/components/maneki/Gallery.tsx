import { useFadeUp } from "./useFadeUp";
import KanjiWatermark from "./KanjiWatermark";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800&q=80",
    alt: "Tea rows in Shizuoka Prefecture, Japan",
    caption: "Shizuoka · Tea rows before first flush",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
    alt: "Farmer harvesting tea leaves by hand",
    caption: "Hand-picking · Spring harvest",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    alt: "Matcha preparation with chasen whisk",
    caption: "Chasen · Traditional preparation",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Japanese tea ceremony",
    caption: "Ceremony · Chawan & chasen",
    className: "col-span-1 row-span-1",
  },
];

const Gallery = () => {
  const ref = useFadeUp();

  return (
    <section id="gallery" className="bg-cream py-24 relative overflow-hidden" ref={ref as any}>
      <KanjiWatermark kanji="茶" className="left-4 top-4 text-ink" />
      <div className="fade-up max-w-7xl mx-auto px-6">
        <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
          From the Farm
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-12">
          Where your matcha begins.
        </h2>

        {/* Pinterest grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {photos.map((photo) => (
            <div key={photo.src} className={photo.className}>
              <div className="relative h-full group overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover min-h-[200px]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
                  <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-cream/90">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality comparison */}
        <div className="bg-ink p-8 lg:p-12 relative overflow-hidden">
          <KanjiWatermark kanji="質" className="right-4 top-0 text-cream" />
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Know Your Grade
          </p>
          <h3 className="font-heading text-3xl text-cream font-bold mb-8">
            Not all matcha is matcha.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Good */}
            <div>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=700&q=80"
                  alt="Vivid jade green ceremonial grade matcha powder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-mono-label text-xs tracking-[0.25em] uppercase text-matcha mb-1">
                ✓ Ceremonial Grade
              </p>
              <p className="font-body text-sm text-cream/70 leading-relaxed">
                Vivid jade green. Stone-ground tencha from first flush. Smooth umami, zero bitterness.
                This is what we import.
              </p>
            </div>

            {/* Bad */}
            <div>
              <div className="aspect-[4/3] overflow-hidden mb-4 grayscale-[30%] sepia-[20%] brightness-90">
                <img
                  src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=700&q=80&sat=-50"
                  alt="Dull yellow-green low grade matcha powder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-mono-label text-xs tracking-[0.25em] uppercase text-cream/30 mb-1">
                ✗ Low Grade
              </p>
              <p className="font-body text-sm text-cream/40 leading-relaxed">
                Dull yellow-green. Older leaves, machine-ground. Bitter, chalky, no umami.
                Common in bulk "matcha" imports across Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
