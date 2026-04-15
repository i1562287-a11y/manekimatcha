import { useCart } from "@/context/CartContext";
import KanjiWatermark from "./KanjiWatermark";
import ProductCarousel from "./ProductCarousel";
import { useFadeUp } from "./useFadeUp";
import { ShoppingCart } from "lucide-react";

import matchaPowder from "@/assets/products/matcha/matcha-powder.png";
import matchaCup from "@/assets/products/matcha/matcha-cup.jpg";
import matchaPackFront from "@/assets/products/matcha/matcha-pack-front.png";

import premiumBall from "@/assets/products/matcha/matcha-ball.png";
import premiumPack from "@/assets/products/matcha/matcha-pack-shizumat.png";

import houjichaPowder from "@/assets/products/houjicha/houjicha-powder.png";
import houjiPackFront from "@/assets/products/houjicha/houjicha-pack-front.png";

const MATCHA_IMAGES = [
  { src: matchaPowder, alt: "Matcha powder close-up" },
  { src: matchaCup, alt: "Matcha in cup, top view" },
  { src: matchaPackFront, alt: "Matcha package front" },
];

const PREMIUM_IMAGES = [
  { src: premiumBall, alt: "Premium matcha ball close-up" },
  { src: premiumPack, alt: "Premium matcha 1kg pack" },
];

const HOUJICHA_IMAGES = [
  { src: houjichaPowder, alt: "Houjicha powder close-up" },
  { src: houjiPackFront, alt: "Houjicha package front" },
];

const MATCHA_PRICE = 155;
const HOUJICHA_PRICE = 115;
const VAT_RATE = 0.23;

const Products = () => {
  const ref = useFadeUp();
  const { addItem } = useCart();

  return (
    <section id="products" className="bg-cream py-24 relative overflow-hidden" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            Product Range
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold">
            Three products. One standard.
          </h2>
        </div>

        <div className="space-y-8">
          {/* Matcha Standard */}
          <div className="bg-pale-matcha relative overflow-hidden">
            <KanjiWatermark kanji="抹" className="right-2 -top-10 text-matcha" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 lg:p-8">
                <ProductCarousel images={MATCHA_IMAGES} />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha/60 mb-2">
                  SHIZUOKA · JAPAN
                </p>
                <h3 className="font-heading text-3xl text-ink font-bold mb-2">Matcha Standard Grade</h3>
                <p className="font-body text-sm text-ink/60 mb-6 max-w-sm">
                  Stone-ground tencha from Shizuoka. Vibrant green colour that pops in every latte — perfect for your customers' Instagram. Smooth, full-bodied taste with no bitterness. Built for high-volume café service.
                </p>

                <div className="bg-cream p-6 mb-4">
                  <p className="font-heading text-3xl text-ink font-bold">
                    €{MATCHA_PRICE}{" "}
                    <span className="font-body text-base font-normal text-ink/50">/ kg (ex VAT)</span>
                  </p>
                  <div className="mt-2 space-y-0.5">
                    <p className="font-body text-sm text-ink/50">
                      VAT (23%): €{(MATCHA_PRICE * VAT_RATE).toFixed(2)}
                    </p>
                    <p className="font-body text-sm text-ink font-semibold">
                      €{(MATCHA_PRICE * (1 + VAT_RATE)).toFixed(2)} / kg{" "}
                      <span className="font-normal text-ink/50">(incl. VAT)</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => addItem("Matcha", MATCHA_PRICE)}
                  className="flex items-center justify-center gap-2 bg-matcha text-cream px-6 py-3 font-mono-label text-sm tracking-widest uppercase hover:bg-ink transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add to Order
                </button>

                <p className="font-body text-sm text-ink/60 mt-4">
                  The go-to matcha for cafés: rich colour, great taste, easy to work with. Makes every latte look and taste the way it should.
                </p>
              </div>
            </div>
          </div>

          {/* Houjicha */}
          <div className="bg-warm-cream relative overflow-hidden">
            <KanjiWatermark kanji="焙" className="right-2 -top-10 text-gold" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 lg:p-8">
                <ProductCarousel images={HOUJICHA_IMAGES} />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                  MIYAZAKI · JAPAN
                </p>
                <h3 className="font-heading text-3xl text-ink font-bold mb-2">Houjicha</h3>
                <p className="font-body text-sm text-ink/60 mb-6 max-w-sm">
                  Roasted Japanese green tea. Warm, toasty, naturally low in caffeine.
                </p>

                <div className="bg-cream p-6 mb-4">
                  <p className="font-heading text-3xl text-ink font-bold">
                    €{HOUJICHA_PRICE}{" "}
                    <span className="font-body text-base font-normal text-ink/50">/ kg (ex VAT)</span>
                  </p>
                  <div className="mt-2 space-y-0.5">
                    <p className="font-body text-sm text-ink/50">
                      VAT (23%): €{(HOUJICHA_PRICE * VAT_RATE).toFixed(2)}
                    </p>
                    <p className="font-body text-sm text-ink font-semibold">
                      €{(HOUJICHA_PRICE * (1 + VAT_RATE)).toFixed(2)} / kg{" "}
                      <span className="font-normal text-ink/50">(incl. VAT)</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => addItem("Houjicha", HOUJICHA_PRICE)}
                  className="flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3 font-mono-label text-sm tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors"
                >
                  <ShoppingCart size={16} />
                  Add to Order
                </button>

                <p className="font-body text-sm text-ink/60 mt-4">
                  Ideal for houjicha lattes and evening drinks. A unique addition to your menu with almost no competition in most cafés.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Matcha — SOLD OUT */}
          <div className="bg-pale-matcha relative overflow-hidden opacity-60">
            <KanjiWatermark kanji="極" className="right-2 -top-10 text-matcha" />
            <div className="absolute top-4 right-4 z-20 bg-ink text-cream font-mono-label text-xs tracking-widest uppercase px-4 py-2">
              Sold Out
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 lg:p-8">
                <ProductCarousel images={PREMIUM_IMAGES} />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha/60 mb-2">
                  SHIZUOKA · JAPAN
                </p>
                <h3 className="font-heading text-3xl text-ink font-bold mb-2">Matcha Premium Grade</h3>
                <p className="font-body text-sm text-ink/60 mb-6 max-w-sm">
                  Ceremonial-level tencha from Shizuoka. Silky texture, deep umami, zero bitterness — crafted for straight matcha shots and thin usucha. The tea that speaks for itself.
                </p>

                <div className="bg-cream p-6 mb-4">
                  <p className="font-heading text-2xl text-ink/40 font-bold">
                    Price on request
                  </p>
                </div>

                <button
                  disabled
                  className="flex items-center justify-center gap-2 bg-ink/20 text-ink/40 px-6 py-3 font-mono-label text-sm tracking-widest uppercase cursor-not-allowed"
                >
                  Sold Out
                </button>

                <p className="font-body text-sm text-ink/40 mt-4">
                  Next batch expected soon. Contact us to reserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
