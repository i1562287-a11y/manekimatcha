import { Smartphone, Landmark, CreditCard, Building2, FileText } from "lucide-react";
import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const Pricing = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const paymentMethods = [
    { name: t("pricing.mbway"), desc: t("pricing.mbway_desc"), icon: Smartphone },
    { name: t("pricing.multibanco"), desc: t("pricing.multibanco_desc"), icon: Landmark },
    { name: t("pricing.card"), desc: t("pricing.card_desc"), icon: CreditCard },
    { name: t("pricing.bank"), desc: t("pricing.bank_desc"), icon: Building2 },
    { name: t("pricing.invoice"), desc: t("pricing.invoice_desc"), icon: FileText },
  ];

  return (
    <section id="pricing" className="bg-ink py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">{t("pricing.tag")}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-4">{t("pricing.headline")}</h2>
          <p className="font-body text-cream/50 max-w-2xl mx-auto">{t("pricing.sub")}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-3">
            {paymentMethods.map((m) => (
              <div key={m.name} className="flex items-center gap-4 bg-cream/5 p-5 border border-cream/10">
                <m.icon className="text-gold shrink-0" size={20} />
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
