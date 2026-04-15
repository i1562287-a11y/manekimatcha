import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";
import moodPicking from "@/assets/mood/shot_002-2.png";

const WhySection = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const reasons = [
    { num: "01", title: t("why.r1.title"), body: t("why.r1.body") },
    { num: "02", title: t("why.r2.title"), body: t("why.r2.body") },
    { num: "03", title: t("why.r3.title"), body: t("why.r3.body") },
    { num: "04", title: t("why.r4.title"), body: t("why.r4.body") },
  ];

  const comparisonRows = [
    { feature: t("why.cmp.traceability"), nokari: t("why.cmp.traceability_yes"), others: t("why.cmp.traceability_no") },
    { feature: t("why.cmp.origin_cert"), nokari: t("why.cmp.origin_cert_yes"), others: t("why.cmp.origin_cert_no") },
    { feature: t("why.cmp.hs_code"), nokari: t("why.cmp.hs_code_yes"), others: t("why.cmp.hs_code_no") },
    { feature: t("why.cmp.freshness"), nokari: t("why.cmp.freshness_yes"), others: t("why.cmp.freshness_no") },
    { feature: t("why.cmp.labels"), nokari: t("why.cmp.labels_yes"), others: t("why.cmp.labels_no") },
    { feature: t("why.cmp.pricing"), nokari: t("why.cmp.pricing_yes"), others: t("why.cmp.pricing_no") },
    { feature: t("why.cmp.moq"), nokari: t("why.cmp.moq_yes"), others: t("why.cmp.moq_no") },
  ];

  return (
    <section id="why" className="bg-pale-matcha py-24 relative" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            {t("why.tag")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-12">
            {t("why.headline")}
          </h2>

          <div className="mb-10 overflow-hidden">
            <img src={moodPicking} alt="Hands picking Japanese tea leaves" className="w-full h-[240px] object-cover" />
          </div>

          <div className="space-y-10">
            {reasons.map((r) => (
              <div key={r.num} className="flex gap-6">
                <span className="font-heading text-5xl text-matcha/20 font-bold leading-none shrink-0">{r.num}</span>
                <div>
                  <h3 className="font-heading text-xl text-ink font-semibold mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-ink/60 leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ink p-8 lg:p-10 self-start">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-6">
            {t("why.comparison_tag")}
          </p>
          <div className="space-y-0">
            <div className="grid grid-cols-3 gap-4 pb-3 border-b border-cream/10 mb-1">
              <span className="font-mono-label text-xs tracking-widest uppercase text-cream/40">{t("why.col_feature")}</span>
              <span className="font-mono-label text-xs tracking-widest uppercase text-gold">{t("why.col_nokari")}</span>
              <span className="font-mono-label text-xs tracking-widest uppercase text-cream/40">{t("why.col_others")}</span>
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
