import { useFadeUp } from "./useFadeUp";
import moodProcessing from "@/assets/mood/shot_002.png";

const cards = [
  {
    kanji: "信頼",
    reading: "shinrai",
    title: "Trust is earned, not claimed",
    body: "In Japanese business, shinrai (信頼) — trust — isn't built on marketing. It's built on consistency, traceability, and keeping your word. Every batch we sell is an act of shinrai: verifiable, documented, and backed by a named farm."
  },
  {
    kanji: "厳選",
    reading: "genzen",
    title: "A curated standard",
    body: "We don't list hundreds of SKUs. We work with a small number of farms and select only what meets our threshold — in colour, aroma, taste, and grind. If a harvest doesn't pass, we don't sell it. That's why our range is tight: because we'd rather have seven excellent tiers than seventy average ones."
  },
  {
    kanji: "直接",
    reading: "chokusetsu",
    title: "Direct means direct",
    body: "We are not a distributor pretending to be close to the source. We import directly from Japanese farms via seasonal contracts. There is no European middleman. No blending house. No repackager. The tea that reaches your café left Japan in the same form — with the same traceability — as when it was packed at the farm."
  },
];

const JapanTrust = () => {
  const ref = useFadeUp();

  return (
    <section id="japantrust" className="bg-cream py-24" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            The Japan Standard
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold">
            Why Japan. Why this way.
          </h2>
        </div>

        <div className="mb-12 overflow-hidden">
          <img
            src={moodProcessing}
            alt="Traditional Japanese tea processing workshop"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.kanji} className="bg-ink p-8 lg:p-10 relative overflow-hidden">
              <span className="absolute right-4 top-4 font-heading text-[8rem] leading-none text-cream/[0.03] select-none pointer-events-none">
                {card.kanji}
              </span>
              <div className="relative z-10">
                <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-1">
                  {card.kanji} · {card.reading}
                </p>
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
