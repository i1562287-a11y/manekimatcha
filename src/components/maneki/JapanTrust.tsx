import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";
import moodProcessing from "@/assets/mood/shot_002.png";

const JapanTrust = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const cards = [
    { kanji: "信頼", reading: "shinrai", title: t("japan.shinrai.title"), body: t("japan.shinrai.body") },
    { kanji: "厳選", reading: "genzen", title: t("japan.genzen.title"), body: t("japan.genzen.body") },
    { kanji: "直接", reading: "chokusetsu", title: t("japan.chokusetsu.title"), body: t("japan.chokusetsu.body") },
  ];

  return (
    <section id="japantrust" className="bg-cream py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">{t("japan.tag")}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold">{t("japan.headline")}</h2>
        </div>

        <div className="mb-12 overflow-hidden">
          <img src={moodProcessing} alt="Traditional Japanese tea processing workshop" className="w-full h-[400px] object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.kanji} className="bg-ink p-8 lg:p-10 relative overflow-hidden">
              <span className="absolute right-4 top-4 font-heading text-[8rem] leading-none text-cream/[0.03] select-none pointer-events-none">{card.kanji}</span>
              <div className="relative z-10">
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-1">{card.kanji} · {card.reading}</p>
                <h3 className="font-heading text-2xl text-cream font-semibold mb-4">{card.title}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JapanTrust;
