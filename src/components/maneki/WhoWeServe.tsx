import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const WhoWeServe = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const personas = [
    { icon: "☕", title: t("serve.cafe.title"), pain: t("serve.cafe.pain"), body: t("serve.cafe.body") },
    { icon: "🌿", title: t("serve.wellness.title"), pain: t("serve.wellness.pain"), body: t("serve.wellness.body") },
    { icon: "🏪", title: t("serve.retail.title"), pain: t("serve.retail.pain"), body: t("serve.retail.body") },
  ];

  return (
    <section id="serve" className="bg-warm-cream py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">{t("serve.tag")}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold">{t("serve.headline")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p) => (
            <div key={p.title} className="bg-cream p-8 border border-ink/5">
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="font-heading text-2xl text-ink font-semibold mb-3">{p.title}</h3>
              <p className="font-heading text-sm text-matcha italic mb-4">{p.pain}</p>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
