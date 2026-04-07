import { useState } from "react";
import { useFadeUp } from "./useFadeUp";

interface CalcState {
  grams: number;
  pricePerKg: number;
  menuPrice: number;
}

const Calculator = ({
  title,
  defaults,
  tierLabel,
}: {
  title: string;
  defaults: CalcState;
  tierLabel: string;
}) => {
  const [state, setState] = useState<CalcState>(defaults);

  const costPerServing = (state.grams / 1000) * state.pricePerKg;
  const margin = state.menuPrice > 0 ? ((state.menuPrice - costPerServing) / state.menuPrice) * 100 : 0;
  const monthlyServings = 20 * 25; // 20 servings/day, 25 days
  const monthlyRevenue = monthlyServings * state.menuPrice;
  const monthlyCost = monthlyServings * costPerServing;
  const monthlyProfit = monthlyRevenue - monthlyCost;

  return (
    <div className="bg-cream/5 p-8">
      <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-1">{title}</p>
      <p className="font-body text-xs text-cream/40 mb-6">Using {tierLabel}</p>

      <div className="space-y-4 mb-8">
        <div>
          <label className="font-mono-label text-xs tracking-widest uppercase text-cream/50 block mb-1">
            Grams per serving
          </label>
          <input
            type="number"
            value={state.grams}
            onChange={(e) => setState({ ...state, grams: Number(e.target.value) })}
            className="w-full bg-cream/10 border border-cream/10 text-cream px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="font-mono-label text-xs tracking-widest uppercase text-cream/50 block mb-1">
            Price per kg (€)
          </label>
          <input
            type="number"
            value={state.pricePerKg}
            onChange={(e) => setState({ ...state, pricePerKg: Number(e.target.value) })}
            className="w-full bg-cream/10 border border-cream/10 text-cream px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="font-mono-label text-xs tracking-widest uppercase text-cream/50 block mb-1">
            Menu price per cup (€)
          </label>
          <input
            type="number"
            step="0.1"
            value={state.menuPrice}
            onChange={(e) => setState({ ...state, menuPrice: Number(e.target.value) })}
            className="w-full bg-cream/10 border border-cream/10 text-cream px-4 py-2.5 font-body text-sm focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between border-b border-cream/10 pb-3">
          <span className="font-body text-sm text-cream/50">Cost per serving</span>
          <span className="font-heading text-lg text-gold font-bold">€{costPerServing.toFixed(3)}</span>
        </div>
        <div className="flex justify-between border-b border-cream/10 pb-3">
          <span className="font-body text-sm text-cream/50">Gross margin</span>
          <span className={`font-heading text-lg font-bold ${margin > 85 ? "text-matcha" : "text-gold"}`}>
            {margin.toFixed(1)}%
          </span>
        </div>
        <div className="bg-cream/5 p-4 mt-4">
          <p className="font-mono-label text-xs tracking-widest uppercase text-cream/40 mb-3">
            Monthly projection (20 cups/day)
          </p>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-body text-cream/50">Revenue</span>
            <span className="font-body text-cream">€{monthlyRevenue.toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-body text-cream/50">Tea cost</span>
            <span className="font-body text-cream/70">€{monthlyCost.toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-cream/10 pt-2 mt-2">
            <span className="font-body text-cream font-semibold">Gross profit</span>
            <span className="font-heading text-lg text-gold font-bold">€{monthlyProfit.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const ref = useFadeUp();

  return (
    <section id="pricing" className="bg-ink py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Pricing & Margin
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-4">
            Your margin, calculated.
          </h2>
          <p className="font-body text-cream/50 max-w-2xl mx-auto">
            Adjust the fields below to see exactly how much you make per cup.
            Pre-filled with our most popular café tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Calculator
            title="Matcha Latte"
            tierLabel="T2 Café · €42/kg"
            defaults={{ grams: 3, pricePerKg: 42, menuPrice: 4.5 }}
          />
          <Calculator
            title="Houjicha Latte"
            tierLabel="H2 Café Roast · €28/kg"
            defaults={{ grams: 4, pricePerKg: 28, menuPrice: 4.0 }}
          />
        </div>

        <p className="font-body text-xs text-cream/30 text-center mt-8 max-w-2xl mx-auto">
          Calculations are illustrative. Actual margins depend on milk cost, portion size, labour, 
          and local pricing. All tea prices are ex-works Lisbon, ex-VAT.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
