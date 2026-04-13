import { useFadeUp } from "./useFadeUp";

const reasons = [
  {
    num: "01",
    title: "You know where it comes from",
    body: "Every batch is traceable to a named Japanese farm — not a blending facility, not a trading house. You get origin, region, harvest season, and flush. Your invoice says exactly what's inside your tin."
  },
  {
    num: "02",
    title: "You get real documentation",
    body: "Certificate of Origin, phytosanitary clearance, commercial invoice with HS codes, Portuguese-language labelling. No \"trust me\" — just paperwork that satisfies any inspection."
  },
  {
    num: "03",
    title: "The price makes your margin work",
    body: "We sell at import-direct pricing because that's exactly what it is. No layers. You buy closer to the farm than any European wholesaler allows — and your per-cup cost proves it."
  },
  {
    num: "04",
    title: "We only sell what's in season",
    body: "We don't stockpile. When a harvest arrives, we offer it. When it's gone, we wait. You'll never receive last year's tea repackaged as this year's — because we don't carry it."
  },
];

const comparisonRows = [
  { feature: "Farm traceability", nokari: "✓ Named farm", others: "✗ Blend / unknown" },
  { feature: "Certificate of Origin", nokari: "✓ Every batch", others: "✗ Rarely provided" },
  { feature: "HS code on invoice", nokari: "✓ 0902.10.00", others: "✗ Often missing" },
  { feature: "Seasonal freshness", nokari: "✓ Current harvest", others: "✗ Old stock" },
  { feature: "PT-compliant labels", nokari: "✓ Included", others: "✗ Your problem" },
  { feature: "Pricing transparency", nokari: "✓ Per-kg, no markup layers", others: "✗ Opaque" },
  { feature: "MOQ", nokari: "✓ From 1 kg", others: "✗ 5–25 kg typical" },
];

const WhySection = () => {
  const ref = useFadeUp();

  return (
    <section id="why" className="bg-pale-matcha py-24 relative" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — Reasons */}
        <div>
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            Why Nokari
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-12">
            Four reasons this isn't your usual supplier pitch.
          </h2>

          <div className="space-y-10">
            {reasons.map((r) => (
              <div key={r.num} className="flex gap-6">
                <span className="font-heading text-5xl text-matcha/20 font-bold leading-none shrink-0">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-ink font-semibold mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-ink/60 leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Comparison Table */}
        <div className="bg-ink p-8 lg:p-10 self-start">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Nokari vs. Generic Suppliers
          </p>
          <div className="space-y-0">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 pb-3 border-b border-cream/10 mb-1">
              <span className="font-mono-label text-xs tracking-widest uppercase text-cream/40">Feature</span>
              <span className="font-mono-label text-xs tracking-widest uppercase text-gold">Nokari</span>
              <span className="font-mono-label text-xs tracking-widest uppercase text-cream/40">Others</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 py-3 border-b border-cream/5">
                <span className="font-body text-sm text-cream/70">{row.feature}</span>
                <span className="font-body text-sm text-matcha">{row.nokari}</span>
                <span className="font-body text-sm text-cream/30">{row.others}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
