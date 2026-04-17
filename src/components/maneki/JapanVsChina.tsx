import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const JapanVsChina = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const rows = [
    { feature: t("vs.row.variety"), jp: t("vs.row.variety_jp"), cn: t("vs.row.variety_cn") },
    { feature: t("vs.row.theanine"), jp: t("vs.row.theanine_jp"), cn: t("vs.row.theanine_cn") },
    { feature: t("vs.row.color"), jp: t("vs.row.color_jp"), cn: t("vs.row.color_cn") },
    { feature: t("vs.row.taste"), jp: t("vs.row.taste_jp"), cn: t("vs.row.taste_cn") },
    { feature: t("vs.row.complaints"), jp: t("vs.row.complaints_jp"), cn: t("vs.row.complaints_cn") },
    { feature: t("vs.row.docs"), jp: t("vs.row.docs_jp"), cn: t("vs.row.docs_cn") },
    { feature: t("vs.row.price"), jp: t("vs.row.price_jp"), cn: t("vs.row.price_cn") },
  ];

  return (
    <section id="vs" className="bg-cream py-24 relative" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Dark left column */}
        <div className="lg:col-span-5 bg-ink p-8 lg:p-10 self-start">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-6">
            {t("vs.tag")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-cream font-bold leading-tight mb-6">
            {t("vs.headline")}
          </h2>
          <p className="font-body text-sm text-cream/70 leading-relaxed mb-8">
            {t("vs.sub")}
          </p>
          <div className="border-t border-cream/10 pt-6 space-y-3">
            <p className="font-body text-sm text-cream leading-relaxed">
              {t("vs.cta_line1")}
            </p>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              {t("vs.cta_line2")}
            </p>
            <a
              href="#products"
              className="inline-block mt-4 font-mono-label text-xs tracking-[0.2em] uppercase text-gold border-b border-gold pb-1 hover:text-cream hover:border-cream transition-colors"
            >
              {t("vs.cta_button")}
            </a>
          </div>
        </div>

        {/* Light right column with comparison table */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-3 pb-3 border-b-2 border-ink/10 mb-1">
            <span className="col-span-4 font-mono-label text-[10px] md:text-xs tracking-widest uppercase text-ink/40">
              {t("vs.col_feature")}
            </span>
            <span className="col-span-4 font-mono-label text-[10px] md:text-xs tracking-widest uppercase text-matcha">
              {t("vs.col_jp")}
            </span>
            <span className="col-span-4 font-mono-label text-[10px] md:text-xs tracking-widest uppercase text-ink/40">
              {t("vs.col_cn")}
            </span>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-12 gap-3 py-4 border-b border-ink/5">
              <span className="col-span-4 font-body text-xs md:text-sm text-ink/60">{row.feature}</span>
              <span className="col-span-4 font-body text-xs md:text-sm text-ink font-medium">{row.jp}</span>
              <span className="col-span-4 font-body text-xs md:text-sm text-ink/40">{row.cn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JapanVsChina;
