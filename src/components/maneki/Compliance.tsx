import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const Compliance = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const items = [
    { num: "①", title: t("compliance.1.title"), body: t("compliance.1.body") },
    { num: "②", title: t("compliance.2.title"), body: t("compliance.2.body") },
    { num: "③", title: t("compliance.3.title"), body: t("compliance.3.body") },
    { num: "④", title: t("compliance.4.title"), body: t("compliance.4.body") },
    { num: "⑤", title: t("compliance.5.title"), body: t("compliance.5.body") },
    { num: "⑥", title: t("compliance.6.title"), body: t("compliance.6.body") },
  ];

  return (
    <section id="compliance" className="bg-pale-matcha py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">{t("compliance.tag")}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-4">{t("compliance.headline")}</h2>
          <p className="font-body text-ink/50 max-w-2xl mx-auto">{t("compliance.sub")}</p>
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
