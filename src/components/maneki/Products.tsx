import KanjiWatermark from "./KanjiWatermark";
import { useFadeUp } from "./useFadeUp";

const matchaTiers = [
  { tier: "T1", name: "Ceremony", price: "€68/kg", note: "Whisked usucha, premium drinks" },
  { tier: "T2", name: "Café", price: "€42/kg", note: "Lattes, iced matcha, food service", highlight: true, badge: "LAUNCH PRICE" },
  { tier: "T3", name: "Blend", price: "€31/kg", note: "Smoothies, baking, large-volume" },
  { tier: "T4", name: "Kitchen", price: "€24/kg", note: "Pastry, ice cream, R&D" },
];

const houchijaTiers = [
  { tier: "H1", name: "Premium Roast", price: "€38/kg", note: "Pure houjicha drinks, tasting menus" },
  { tier: "H2", name: "Café Roast", price: "€28/kg", note: "Houjicha lattes, iced drinks", highlight: true, badge: "START HERE" },
  { tier: "H3", name: "Blend Roast", price: "€20/kg", note: "Baking, blending, large-volume" },
];

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
            Two products. Seven tiers. One standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Matcha Card */}
          <div className="bg-pale-matcha p-8 lg:p-10 relative overflow-hidden">
            <KanjiWatermark kanji="抹" className="right-2 -top-10 text-matcha" />
            <div className="relative z-10">
              <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha/60 mb-2">
                SHIZUMAT 06
              </p>
              <h3 className="font-heading text-3xl text-ink font-bold mb-2">Matcha</h3>
              <p className="font-body text-sm text-ink/60 mb-8 max-w-sm">
                Stone-ground tencha from Shizuoka. Vibrant green, clean umami, 
                versatile across ceremony and café service.
              </p>

              <div className="space-y-3">
                {matchaTiers.map((t) => (
                  <div
                    key={t.tier}
                    className={`flex items-center justify-between p-4 ${
                      t.highlight ? "bg-matcha text-cream" : "bg-cream"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-label text-xs tracking-widest">{t.tier}</span>
                      <div>
                        <span className="font-body text-sm font-semibold">{t.name}</span>
                        {t.badge && (
                          <span className="ml-2 font-mono-label text-[10px] tracking-widest bg-gold text-ink px-2 py-0.5">
                            {t.badge}
                          </span>
                        )}
                        <p className={`font-body text-xs ${t.highlight ? "text-cream/70" : "text-ink/50"}`}>
                          {t.note}
                        </p>
                      </div>
                    </div>
                    <span className="font-heading text-lg font-bold">{t.price}</span>
                  </div>
                ))}
              </div>

              <p className="font-body text-xs text-ink/40 mt-6">
                All prices ex-works Lisbon warehouse. MOQ 1 kg per tier. Bulk pricing available from 10 kg.
              </p>
            </div>
          </div>

          {/* Houjicha Card */}
          <div className="bg-warm-cream p-8 lg:p-10 relative overflow-hidden">
            <KanjiWatermark kanji="焙" className="right-2 -top-10 text-gold" />
            <div className="relative z-10">
              <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                MIYAHOP
              </p>
              <h3 className="font-heading text-3xl text-ink font-bold mb-2">Houjicha</h3>
              <p className="font-body text-sm text-ink/60 mb-8 max-w-sm">
                Roasted Japanese bancha from Miyazaki. Warm, toasty, naturally low in caffeine. 
                The comfort drink your menu is missing.
              </p>

              <div className="space-y-3">
                {houchijaTiers.map((t) => (
                  <div
                    key={t.tier}
                    className={`flex items-center justify-between p-4 ${
                      t.highlight ? "bg-ink text-cream" : "bg-cream"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-label text-xs tracking-widest">{t.tier}</span>
                      <div>
                        <span className="font-body text-sm font-semibold">{t.name}</span>
                        {t.badge && (
                          <span className="ml-2 font-mono-label text-[10px] tracking-widest bg-gold text-ink px-2 py-0.5">
                            {t.badge}
                          </span>
                        )}
                        <p className={`font-body text-xs ${t.highlight ? "text-cream/70" : "text-ink/50"}`}>
                          {t.note}
                        </p>
                      </div>
                    </div>
                    <span className="font-heading text-lg font-bold">{t.price}</span>
                  </div>
                ))}
              </div>

              <p className="font-body text-xs text-ink/40 mt-6">
                All prices ex-works Lisbon warehouse. MOQ 1 kg per tier. Bulk pricing available from 10 kg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
