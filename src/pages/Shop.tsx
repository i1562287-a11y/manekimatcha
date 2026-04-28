import { useState } from "react";
import { ShoppingCart, Star, Truck, Check } from "lucide-react";
import Navbar from "@/components/maneki/Navbar";
import Footer from "@/components/maneki/Footer";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";
import ProductCarousel from "@/components/maneki/ProductCarousel";
import { useCart } from "@/context/CartContext";

import matchaPowder from "@/assets/products/matcha/matcha-powder.png";
import matchaCup from "@/assets/products/matcha/matcha-cup.jpg";
import matchaPackFront from "@/assets/products/matcha/matcha-pack-front.png";

const IMAGES = [
  { src: matchaPackFront, alt: "Matcha 30g pack front" },
  { src: matchaPowder, alt: "Matcha powder close-up" },
  { src: matchaCup, alt: "Matcha latte in cup" },
];

const BASE_PRICE = 19; // EUR per 30g pack
const SHIPPING = 5; // EUR

type Variant = {
  qty: number;
  label: string;
  discount: number; // 0..1
  freeShipping: boolean;
  badge?: string;
};

const VARIANTS: Variant[] = [
  { qty: 1, label: "1 pack — 30 g", discount: 0, freeShipping: false },
  { qty: 2, label: "2 packs — 60 g", discount: 0.05, freeShipping: false, badge: "−5%" },
  { qty: 3, label: "3 packs — 90 g", discount: 0.10, freeShipping: true, badge: "−10% + free shipping" },
];

const Shop = () => {
  const [selected, setSelected] = useState<Variant>(VARIANTS[0]);
  const { addItem, setDrawerOpen } = useCart();

  const subtotal = BASE_PRICE * selected.qty;
  const discountAmount = subtotal * selected.discount;
  const afterDiscount = subtotal - discountAmount;
  const shipping = selected.freeShipping ? 0 : SHIPPING;
  const total = afterDiscount + shipping;

  const handleAdd = () => {
    // Cart stores by kg + pricePerKg. Each pack = 30g = 0.03kg.
    // To preserve discounted total, derive effective pricePerKg.
    const totalKg = selected.qty * 0.03;
    const pricePerKg = afterDiscount / totalKg;
    const name = `Matcha Retail ${selected.qty}×30g${selected.discount > 0 ? ` (-${selected.discount * 100}%)` : ""}`;
    addItem(name, pricePerKg, totalKg);
    setDrawerOpen(true);
  };

  return (
    <>
      <NoiseOverlay />
      <Navbar />

      <main className="bg-cream pt-28 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="font-mono-label text-xs tracking-widest uppercase text-ink/50 mb-8">
            <a href="/" className="hover:text-ink">Home</a>
            <span className="mx-2">/</span>
            <span className="text-ink">Shop</span>
          </nav>

          <div className="bg-warm-cream border border-ink/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Carousel */}
              <div className="p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-ink/10">
                <ProductCarousel images={IMAGES} />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-10 flex flex-col">
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-3">
                  Uji, Kyoto · Ceremonial Grade
                </p>
                <h1 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-4">
                  Nokari Matcha — 30 g Pack
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-mono-label text-xs tracking-wider uppercase text-ink/60">
                    5.0 · 1 review
                  </span>
                </div>

                <p className="font-body text-base text-ink/70 mb-6 leading-relaxed">
                  Stone-milled ceremonial matcha from Uji, Kyoto. Vivid jade colour,
                  smooth umami body, no bitterness. Ideal for matcha latte, ceremony,
                  or pure usucha. Each 30 g pack yields ~30 servings.
                </p>

                {/* Specs */}
                <ul className="space-y-2 mb-8">
                  {[
                    "First-harvest leaves (Ichibancha)",
                    "Stone-milled, single-origin Uji",
                    "Resealable foil pack, 30 g net",
                    "Best within 60 days after opening",
                  ].map((spec) => (
                    <li key={spec} className="flex items-start gap-2 font-body text-sm text-ink/70">
                      <Check size={16} className="text-matcha mt-0.5 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Variants */}
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-ink/50 mb-3">
                  Choose quantity
                </p>
                <div className="space-y-2 mb-6">
                  {VARIANTS.map((v) => {
                    const active = selected.qty === v.qty;
                    const variantSubtotal = BASE_PRICE * v.qty;
                    const variantTotal = variantSubtotal * (1 - v.discount);
                    return (
                      <button
                        key={v.qty}
                        onClick={() => setSelected(v)}
                        className={`w-full text-left p-4 border-2 transition-all flex items-center justify-between gap-4 ${
                          active
                            ? "border-matcha bg-pale-matcha"
                            : "border-ink/10 bg-cream hover:border-ink/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 border-2 flex items-center justify-center ${
                              active ? "border-matcha bg-matcha" : "border-ink/30"
                            }`}
                          >
                            {active && <Check size={10} className="text-cream" />}
                          </div>
                          <div>
                            <p className="font-body text-sm text-ink font-semibold">{v.label}</p>
                            {v.badge && (
                              <p className="font-mono-label text-[10px] tracking-widest uppercase text-matcha mt-0.5">
                                {v.badge}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          {v.discount > 0 && (
                            <p className="font-body text-xs text-ink/40 line-through">
                              €{variantSubtotal.toFixed(2)}
                            </p>
                          )}
                          <p className="font-heading text-lg text-ink font-bold">
                            €{variantTotal.toFixed(2)}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Summary */}
                <div className="bg-cream p-5 border border-ink/10 mb-5 space-y-1.5">
                  <div className="flex justify-between font-body text-sm text-ink/70">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  {selected.discount > 0 && (
                    <div className="flex justify-between font-body text-sm text-matcha">
                      <span>Discount (−{selected.discount * 100}%)</span>
                      <span>−€{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-body text-sm text-ink/70">
                    <span className="flex items-center gap-1.5">
                      <Truck size={14} />
                      Shipping
                    </span>
                    <span>
                      {selected.freeShipping ? (
                        <span className="text-matcha font-semibold">FREE</span>
                      ) : (
                        `€${SHIPPING.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="border-t border-ink/10 pt-2 mt-2 flex justify-between items-baseline">
                    <span className="font-mono-label text-xs tracking-widest uppercase text-ink/60">
                      Total
                    </span>
                    <span className="font-heading text-2xl text-ink font-bold">
                      €{total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex items-center justify-center gap-2 bg-matcha text-cream px-6 py-4 font-mono-label text-sm tracking-widest uppercase hover:bg-ink transition-colors"
                >
                  <ShoppingCart size={18} />
                  Add to cart · €{total.toFixed(2)}
                </button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <section className="mt-16">
            <h2 className="font-heading text-3xl text-ink font-bold mb-8">
              Customer reviews
            </h2>
            <div className="bg-warm-cream border border-ink/10 p-6 lg:p-8 max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-matcha text-cream flex items-center justify-center font-heading text-lg">
                  M
                </div>
                <div>
                  <p className="font-body text-sm text-ink font-semibold">Maria L.</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="font-mono-label text-[10px] tracking-widest uppercase text-ink/50">
                      Verified buyer
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body text-base text-ink/80 leading-relaxed">
                “Great matcha for lattes — beautiful vivid green colour and a rich,
                full-bodied flavour. Smooth, no bitterness, blends perfectly with milk.
                Will order again.”
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Shop;
