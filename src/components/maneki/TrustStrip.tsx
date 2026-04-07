const points = [
  "Farm-traceable origin",
  "EU-compliant documentation",
  "CIF Lisbon delivery",
  "Seasonal batch import",
  "VAT-registered importer",
];

const TrustStrip = () => (
  <section className="bg-ink py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      {points.map((point, i) => (
        <span key={i} className="flex items-center gap-6">
          <span className="font-mono-label text-xs tracking-widest uppercase text-cream/70">
            {point}
          </span>
          {i < points.length - 1 && (
            <span className="w-1.5 h-1.5 bg-gold inline-block hidden sm:inline-block" />
          )}
        </span>
      ))}
    </div>
  </section>
);

export default TrustStrip;
