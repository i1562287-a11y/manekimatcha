import KanjiWatermark from "./KanjiWatermark";
import { useFadeUp } from "./useFadeUp";

const Products = () => {
  const ref = useFadeUp();

  return (
    <section id="products" className="bg-cream py-24 relative overflow-hidden" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            Product Range
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold">
            Two products. One standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Matcha */}
          <div className="bg-pale-matcha p-8 lg:p-10 relative overflow-hidden">
            <KanjiWatermark kanji="抹" className="right-2 -top-10 text-matcha" />
            <div className="relative z-10">
              <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha/60 mb-2">
                SHIZUOKA · JAPAN
              </p>
              <h3 className="font-heading text-3xl text-ink font-bold mb-2">Matcha</h3>
              <p className="font-body text-sm text-ink/60 mb-8 max-w-sm">
                Stone-ground tencha. Clean umami, vibrant green, stable in daily café service.
              </p>

              <div className="bg-cream p-6 mb-6">
                <p className="font-heading text-3xl text-ink font-bold">
                  €155 <span className="font-body text-base font-normal text-ink/50">/ kg (ex VAT)</span>
                </p>
                <div className="mt-3 space-y-1">
                  <p className="font-body text-sm text-ink/50">
                    VAT (23%): €35.65
                  </p>
                  <p className="font-body text-sm text-ink font-semibold">
                    €190.65 / kg <span className="font-normal text-ink/50">(incl. VAT)</span>
                  </p>
                </div>
              </div>

              <p className="font-body text-sm text-ink/60">
                Designed for cafés: consistent taste, easy to work with, perfect for matcha lattes and iced drinks.
              </p>
            </div>
          </div>

          {/* Houjicha */}
          <div className="bg-warm-cream p-8 lg:p-10 relative overflow-hidden">
            <KanjiWatermark kanji="焙" className="right-2 -top-10 text-gold" />
            <div className="relative z-10">
              <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                MIYAZAKI · JAPAN
              </p>
              <h3 className="font-heading text-3xl text-ink font-bold mb-2">Houjicha</h3>
              <p className="font-body text-sm text-ink/60 mb-8 max-w-sm">
                Roasted Japanese green tea. Warm, toasty, naturally low in caffeine.
              </p>

              <div className="bg-cream p-6 mb-6">
                <p className="font-heading text-3xl text-ink font-bold">
                  €115 <span className="font-body text-base font-normal text-ink/50">/ kg (ex VAT)</span>
                </p>
                <div className="mt-3 space-y-1">
                  <p className="font-body text-sm text-ink/50">
                    VAT (23%): €26.45
                  </p>
                  <p className="font-body text-sm text-ink font-semibold">
                    €141.45 / kg <span className="font-normal text-ink/50">(incl. VAT)</span>
                  </p>
                </div>
              </div>

              <p className="font-body text-sm text-ink/60">
                Ideal for houjicha lattes and evening drinks. A unique addition to your menu with almost no competition in most cafés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
