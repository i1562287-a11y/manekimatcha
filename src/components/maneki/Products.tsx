import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KanjiWatermark from "./KanjiWatermark";
import ProductCarousel from "./ProductCarousel";
import { useFadeUp } from "./useFadeUp";
import { Minus, Plus, FileText, CreditCard, MessageCircle, ShoppingCart } from "lucide-react";

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

const KgStepper = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) => (
  <div className="flex items-center gap-0 border border-cream/20 inline-flex">
    <button
      type="button"
      onClick={() => onChange(Math.max(0, value - 1))}
      className="w-10 h-10 flex items-center justify-center text-ink/60 hover:text-gold hover:bg-ink/5 transition-colors"
    >
      <Minus size={16} />
    </button>
    <input
      type="number"
      min={0}
      value={value}
      onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
      className="w-14 h-10 text-center font-heading text-lg text-ink bg-transparent border-x border-cream/20 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
    <button
      type="button"
      onClick={() => onChange(value + 1)}
      className="w-10 h-10 flex items-center justify-center text-ink/60 hover:text-gold hover:bg-ink/5 transition-colors"
    >
      <Plus size={16} />
    </button>
  </div>
);

const Products = () => {
  const ref = useFadeUp();
  const navigate = useNavigate();
  const [matchaKg, setMatchaKg] = useState(1);
  const [houjiKg, setHoujiKg] = useState(0);


  const matchaTotal = matchaKg * MATCHA_PRICE;
  const houjiTotal = houjiKg * HOUJICHA_PRICE;
  const subtotal = matchaTotal + houjiTotal;
  const vat = subtotal * VAT_RATE;
  const total = subtotal + vat;
  const hasOrder = matchaKg > 0 || houjiKg > 0;

  const handleRequestCallback = () => {
    const lines: string[] = [];
    if (matchaKg > 0) lines.push(`${matchaKg} kg Matcha`);
    if (houjiKg > 0) lines.push(`${houjiKg} kg Houjicha`);
    const msg = encodeURIComponent(
      `I'm interested in: ${lines.join(", ")}. Please contact me to discuss samples and ordering.`
    );
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Try to fill message textarea after scroll
      setTimeout(() => {
        const textarea = el.querySelector("textarea");
        if (textarea) {
          textarea.value = decodeURIComponent(msg);
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 600);
    }
  };

  const handlePayNow = () => {
    navigate("/order", { state: { items: orderItems, defaultPaymentMethod: "card" } });
  };

  const orderItems = [
    { name: "Matcha", kg: matchaKg, pricePerKg: MATCHA_PRICE },
    { name: "Houjicha", kg: houjiKg, pricePerKg: HOUJICHA_PRICE },
  ];

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

                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono-label text-xs tracking-widest uppercase text-ink/40">
                    Quantity (kg)
                  </p>
                  <KgStepper value={matchaKg} onChange={setMatchaKg} />
                </div>

                {matchaKg > 0 && (
                  <div className="bg-ink/5 p-4 mb-4">
                    <div className="flex justify-between font-body text-sm text-ink/70">
                      <span>{matchaKg} kg × €{MATCHA_PRICE}</span>
                      <span className="font-heading font-bold text-ink">€{matchaTotal.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                {matchaKg > 0 && (
                  <button
                    onClick={() => {
                      const el = document.getElementById("order-summary");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center justify-center gap-2 bg-matcha text-cream px-6 py-3 font-mono-label text-sm tracking-widest uppercase hover:bg-ink transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Add to Order
                  </button>
                )}

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

                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono-label text-xs tracking-widest uppercase text-ink/40">
                    Quantity (kg)
                  </p>
                  <KgStepper value={houjiKg} onChange={setHoujiKg} />
                </div>

                {houjiKg > 0 && (
                  <div className="bg-ink/5 p-4 mb-4">
                    <div className="flex justify-between font-body text-sm text-ink/70">
                      <span>{houjiKg} kg × €{HOUJICHA_PRICE}</span>
                      <span className="font-heading font-bold text-ink">€{houjiTotal.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                {houjiKg > 0 && (
                  <button
                    onClick={() => {
                      const el = document.getElementById("order-summary");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3 font-mono-label text-sm tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors"
                  >
                    <ShoppingCart size={16} />
                    Add to Order
                  </button>
                )}

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

                <p className="font-body text-sm text-ink/40 mt-4">
                  Next batch expected soon. Contact us to reserve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary & CTAs */}
        {hasOrder && (
          <div className="mt-12 bg-ink p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Summary */}
              <div>
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">
                  Your Order
                </p>
                <div className="space-y-1">
                  {matchaKg > 0 && (
                    <p className="font-body text-sm text-cream/70">
                      {matchaKg} kg Matcha — €{matchaTotal.toFixed(2)}
                    </p>
                  )}
                  {houjiKg > 0 && (
                    <p className="font-body text-sm text-cream/70">
                      {houjiKg} kg Houjicha — €{houjiTotal.toFixed(2)}
                    </p>
                  )}
                </div>
                <div className="border-t border-cream/10 mt-3 pt-3 space-y-0.5">
                  <p className="font-body text-sm text-cream/50">
                    Subtotal: €{subtotal.toFixed(2)} · VAT (23%): €{vat.toFixed(2)}
                  </p>
                  <p className="font-heading text-2xl text-cream font-bold">
                    €{total.toFixed(2)}{" "}
                    <span className="font-body text-sm font-normal text-cream/50">incl. VAT</span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-col xl:flex-row">
                <button
                  onClick={() => navigate("/order", { state: { items: orderItems } })}
                  className="flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors"
                >
                  <FileText size={18} />
                  Request Invoice
                </button>
                <button
                  onClick={handlePayNow}
                  className="flex items-center justify-center gap-2 border border-cream/20 text-cream/60 px-6 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  <CreditCard size={18} />
                  Pay Now
                </button>
                <button
                  onClick={handleRequestCallback}
                  className="flex items-center justify-center gap-2 border border-cream/20 text-cream/60 px-6 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  <MessageCircle size={18} />
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  );
};

export default Products;
