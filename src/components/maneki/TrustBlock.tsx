import { useFadeUp } from "./useFadeUp";

const proofCards = [
  { number: "500g", label: "MINIMUM ORDER", line: "No large upfront commitment. Start, see the results, scale." },
  { number: "24h", label: "REPLY TIME", line: "Every sample request and pricing question answered within one business day." },
  { number: "6", label: "DOCUMENTS PER ORDER", line: "Origin cert, batch ID, PT labels, allergen declaration, SOP card, spec sheet. Always included." },
  { number: "0", label: "HIDDEN FEES", line: "Pricing is public. What you see is what you pay — ex-VAT, no registration required." },
];

const feedbackCards = [
  {
    quote: "\"The SOP card fixed the lump problem in two days. I wish someone had given us this six months ago.\"",
    attribution: "SPECIALTY CAFÉ · CASCAIS · SAMPLE SESSION",
    tag: "FIRST IMPRESSION",
  },
  {
    quote: "\"I've been asking every supplier for the PT-language labels for two years. You're the first one who just included them without me asking.\"",
    attribution: "WELLNESS OPERATOR · LISBOA · SAMPLE SESSION",
    tag: "COMPLIANCE FEEDBACK",
  },
  {
    quote: "\"The houjicha is the only one I've found in Portugal with actual farm documentation. We're putting it on the menu next month.\"",
    attribution: "BRUNCH CAFÉ · CASCAIS · SAMPLE SESSION",
    tag: "HOUJICHA PILOT",
  },
];

const credentials = [
  { label: "REGISTERED IMPORTER", value: "Vechirka LDA · VAT PT 517639475" },
  { label: "ORIGIN", value: "Shizuoka & Miyazaki, Japan" },
  { label: "COMPLIANCE", value: "ASAE-ready documentation" },
  { label: "BASED IN", value: "Cascais, Portugal" },
];

const TrustBlock = () => {
  const ref = useFadeUp();

  return (
    <section id="trust-block" className="bg-cream-dark py-20 border-t-4 border-matcha" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">

        {/* PART 1 — Proof Block */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {proofCards.map((card) => (
            <div
              key={card.label}
              className="bg-white border-l-4 border-matcha p-8"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              <span className="font-heading text-6xl text-ink font-bold block mb-2">{card.number}</span>
              <span className="font-mono-label text-fog uppercase" style={{ fontSize: "0.65rem" }}>{card.label}</span>
              <p className="font-body text-ink mt-3 leading-relaxed">{card.line}</p>
            </div>
          ))}
        </div>

        {/* PART 2 — Early Feedback */}
        <div className="mb-20">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            Early Feedback
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-3">
            What happened after the first sample kit.
          </h2>
          <p className="font-body text-fog italic mb-10 max-w-2xl">
            We're at the beginning. These are real conversations from our first café visits and sample sessions in Lisbon and Cascais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbackCards.map((card, i) => (
              <div
                key={i}
                className="bg-white border-t-[3px] border-mist p-8"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                <blockquote className="font-body italic text-ink border-l-[3px] border-gold pl-4 mb-5" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                  {card.quote}
                </blockquote>
                <p className="font-mono-label text-fog uppercase mb-3" style={{ fontSize: "0.65rem" }}>
                  {card.attribution}
                </p>
                <span className="inline-block bg-pale-matcha text-matcha font-mono-label uppercase px-3 py-1" style={{ fontSize: "0.6rem" }}>
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3 — Credentials Strip */}
        <div className="bg-ink p-8 md:p-10 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {credentials.map((item, i) => (
              <div
                key={i}
                className={`${i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}`}
              >
                <span className="font-mono-label text-fog uppercase block mb-1" style={{ fontSize: "0.6rem" }}>
                  {item.label}
                </span>
                <span className="font-body text-cream font-bold" style={{ fontSize: "1rem" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PART 4 — Closing CTA */}
        <div className="text-center">
          <p className="font-mono-label text-fog uppercase mb-3" style={{ fontSize: "0.7rem" }}>
            Not sure yet?
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-ink font-bold mb-3">
            The sample kit exists for exactly this situation.
          </h2>
          <p className="font-body text-ink mb-6">
            €25 — deducted from your first order. No commitment. Just the product in your hands.
          </p>
          <a
            href="#contact"
            className="inline-block bg-ink text-cream font-body px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Request Sample Kit →
          </a>
          <p className="font-mono-label text-fog mt-4" style={{ fontSize: "0.6rem" }}>
            We reply within 24 hours · No newsletter · No registration
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrustBlock;
