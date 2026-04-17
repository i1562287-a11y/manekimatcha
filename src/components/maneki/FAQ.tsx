import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const categories = [
    { key: "cat1", count: 5 },
    { key: "cat2", count: 5 },
    { key: "cat3", count: 3 },
    { key: "cat4", count: 3 },
  ];

  let qIdx = 0;

  return (
    <section id="faq" className="bg-cream py-24 relative overflow-hidden" ref={ref as any}>
      <span
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none pointer-events-none font-heading text-[24rem] leading-none opacity-[0.04] text-ink"
        aria-hidden="true"
      >
        質
      </span>

      <div className="fade-up max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">
            {t("faq.tag")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold mb-4">
            {t("faq.headline")}
          </h2>
          <p className="font-body text-ink/50 max-w-2xl mx-auto">
            {t("faq.sub")}
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.key}>
              <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-6 pb-3 border-b border-ink/10">
                {t(`faq.${cat.key}.title`)}
              </p>
              <Accordion type="single" collapsible className="w-full">
                {Array.from({ length: cat.count }).map(() => {
                  qIdx += 1;
                  const i = qIdx;
                  return (
                    <AccordionItem
                      key={i}
                      value={`q-${i}`}
                      className="border-b border-ink/10 border-l-2 border-l-transparent hover:border-l-matcha transition-colors"
                    >
                      <AccordionTrigger className="font-heading text-lg md:text-xl text-ink font-semibold text-left py-5 px-4 hover:no-underline hover:bg-pale-matcha/30">
                        {t(`faq.q${i}.q`)}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-ink/70 text-base leading-relaxed px-4 pb-5">
                        {t(`faq.q${i}.a`)}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
