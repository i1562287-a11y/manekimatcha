import { useFadeUp } from "./useFadeUp";

const items = [
  {
    num: "①",
    title: "Certificate of Origin",
    body: "Issued per batch by the Japanese Chamber of Commerce, confirming the tea's origin and production region. Required for EU import clearance."
  },
  {
    num: "②",
    title: "Batch Traceability",
    body: "Each shipment carries harvest date, flush, farm name, and region. Your customers can ask — and you'll have the answer."
  },
  {
    num: "③",
    title: "Portuguese-Language Labels",
    body: "Pre-printed labels meeting PT/EU food labelling law: ingredients, allergens, net weight, lot number, best-before, importer details. Ready to stick."
  },
  {
    num: "④",
    title: "Phytosanitary Certificate",
    body: "Issued by Japan's Ministry of Agriculture (MAFF) confirming the product is pest-free and safe for EU entry."
  },
  {
    num: "⑤",
    title: "Commercial Invoice with HS Code",
    body: "Every invoice lists HS 0902.10.00 — the internationally recognised commodity code for green tea. Clean customs, clean books."
  },
  {
    num: "⑥",
    title: "Registered Importer",
    body: "Vechirka LDA is a registered Portuguese food importer (VAT PT 517639475). We handle ASAE obligations, customs clearance, and all import administration."
  },
];

const Compliance = () => {
  const ref = useFadeUp();

  return (
    <section id="compliance" className="bg-pale-matcha py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            Compliance
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-4">
            Everything your inspector wants to see.
          </h2>
          <p className="font-body text-ink/50 max-w-2xl mx-auto">
            We don't just sell tea — we deliver it with every document required under EU and Portuguese food safety law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.num} className="bg-cream p-8 border border-ink/5">
              <span className="font-heading text-3xl text-matcha mb-4 block">{item.num}</span>
              <h3 className="font-heading text-xl text-ink font-semibold mb-3">{item.title}</h3>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
