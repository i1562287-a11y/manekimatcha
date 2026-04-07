import { useFadeUp } from "./useFadeUp";

const paymentMethods = [
  { name: "MB Way", desc: "Instant mobile payment" },
  { name: "Multibanco", desc: "ATM & online reference" },
  { name: "Credit / Debit Card", desc: "Visa, Mastercard" },
  { name: "Bank Transfer (IBAN)", desc: "Direct bank transfer" },
  { name: "Invoice for B2B partners", desc: "NET 15 / NET 30 terms" },
];

const Pricing = () => {
  const ref = useFadeUp();

  return (
    <section id="pricing" className="bg-ink py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Payment
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-4">
            Payment options
          </h2>
          <p className="font-body text-cream/50 max-w-2xl mx-auto">
            We accept the following payment methods in Portugal.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-3">
            {paymentMethods.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between bg-cream/5 p-5 border border-cream/10"
              >
                <div>
                  <p className="font-body text-sm text-cream font-semibold">{m.name}</p>
                  <p className="font-body text-xs text-cream/40">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
