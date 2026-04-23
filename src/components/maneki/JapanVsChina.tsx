import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const JapanVsChina = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const rows = [
    { feature: t("vs.row.variety"), jp: t("vs.row.variety_jp"), cn: t("vs.row.variety_cn") },
    { feature: t("vs.row.theanine"), jp: t("vs.row.theanine_jp"), cn: t("vs.row.theanine_cn") },
    { feature: t("vs.row.color_source"), jp: t("vs.row.color_source_jp"), cn: t("vs.row.color_source_cn") },
    { feature: t("vs.row.color"), jp: t("vs.row.color_jp"), cn: t("vs.row.color_cn") },
    { feature: t("vs.row.taste"), jp: t("vs.row.taste_jp"), cn: t("vs.row.taste_cn") },
    { feature: t("vs.row.complaints"), jp: t("vs.row.complaints_jp"), cn: t("vs.row.complaints_cn") },
    { feature: t("vs.row.docs"), jp: t("vs.row.docs_jp"), cn: t("vs.row.docs_cn") },
    { feature: t("vs.row.price"), jp: t("vs.row.price_jp"), cn: t("vs.row.price_cn") },
  ];

  return (
    <section id="vs" className="bg-cream py-24 relative" ref={ref as any}>
      <div className="fade-up max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            {t("vs.tag")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ink font-bold leading-tight mb-5">
            {t("vs.headline")}
          </h2>
          <p className="font-body text-base md:text-lg text-ink/70 leading-relaxed">
            {t("vs.sub")}
          </p>
        </div>

        {/* Comparison table */}
        <div>
          {/* Header row */}
          <div className="grid grid-cols-12 mb-1">
            <div className="col-span-12 md:col-span-4 px-3 md:px-4 py-3 md:py-4 hidden md:block">
              <span className="font-mono-label text-xs md:text-sm tracking-widest uppercase text-ink/40">
                {t("vs.col_feature")}
              </span>
            </div>
            <div className="col-span-6 md:col-span-4 bg-matcha px-3 md:px-4 py-3 md:py-4">
              <span className="font-mono-label text-[11px] md:text-sm tracking-widest uppercase text-cream font-bold">
                {t("vs.col_jp")}
              </span>
            </div>
            <div className="col-span-6 md:col-span-4 bg-[hsl(15,25%,32%)] px-3 md:px-4 py-3 md:py-4">
              <span className="font-mono-label text-[11px] md:text-sm tracking-widest uppercase text-cream font-bold">
                {t("vs.col_cn")}
              </span>
            </div>
          </div>

          {/* Body rows */}
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-12">
              {/* Feature label — full width on mobile (above the colored cells) */}
              <div className="col-span-12 md:col-span-4 px-3 md:px-4 pt-4 pb-2 md:py-5 md:border-b md:border-ink/10 md:flex md:items-center bg-cream">
                <span className="font-mono-label md:font-body text-[11px] md:text-base tracking-widest md:tracking-normal uppercase md:normal-case text-ink/50 md:text-ink/70 md:font-medium">
                  {row.feature}
                </span>
              </div>
              <div className="col-span-6 md:col-span-4 bg-matcha/95 px-3 md:px-4 py-4 md:py-5 border-b border-cream/10 flex items-start md:items-center">
                <span className="font-body text-sm md:text-base text-cream leading-snug">
                  {row.jp}
                </span>
              </div>
              <div className="col-span-6 md:col-span-4 bg-[hsl(15,25%,32%)]/95 px-3 md:px-4 py-4 md:py-5 border-b border-cream/10 flex items-start md:items-center">
                <span className="font-body text-sm md:text-base text-cream/90 leading-snug">
                  {row.cn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dark CTA block AFTER table */}
        <div className="bg-ink p-8 md:p-10 mt-12">
          <div className="max-w-3xl">
            <p className="font-body text-base md:text-lg text-cream leading-relaxed mb-3">
              {t("vs.cta_line1")}
            </p>
            <p className="font-body text-sm md:text-base text-cream/70 leading-relaxed mb-6">
              {t("vs.cta_line2")}
            </p>
            <a
              href="#products"
              className="inline-block font-mono-label text-xs md:text-sm tracking-[0.2em] uppercase text-gold border-b border-gold pb-1 hover:text-cream hover:border-cream transition-colors"
            >
              {t("vs.cta_button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JapanVsChina;
