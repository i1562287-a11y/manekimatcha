import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const TrustBlock = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();

  const proofCards = [
    { number: t("trust.proof.moq_num"), label: t("trust.proof.moq"), line: t("trust.proof.moq_line") },
    { number: t("trust.proof.reply_num"), label: t("trust.proof.reply"), line: t("trust.proof.reply_line") },
    { number: t("trust.proof.docs_num"), label: t("trust.proof.docs"), line: t("trust.proof.docs_line") },
    { number: t("trust.proof.fees_num"), label: t("trust.proof.fees"), line: t("trust.proof.fees_line") },
  ];

  const feedbackCards = [
    { quote: t("trust.fb1.quote"), attribution: t("trust.fb1.attr"), tag: t("trust.fb1.tag") },
    { quote: t("trust.fb2.quote"), attribution: t("trust.fb2.attr"), tag: t("trust.fb2.tag") },
    { quote: t("trust.fb3.quote"), attribution: t("trust.fb3.attr"), tag: t("trust.fb3.tag") },
  ];

  const credentials = [
    { label: t("trust.cred.importer"), value: t("trust.cred.importer_val") },
    { label: t("trust.cred.origin"), value: t("trust.cred.origin_val") },
    { label: t("trust.cred.compliance"), value: t("trust.cred.compliance_val") },
    { label: t("trust.cred.based"), value: t("trust.cred.based_val") },
  ];

  return (
    <section id="trust-block" className="bg-cream-dark py-20 border-t-4 border-matcha" ref={ref as any}>
      <div className="fade-up max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {proofCards.map((card) => (
            <div key={card.label} className="bg-white border-l-4 border-matcha p-8" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <span className="font-heading text-6xl text-ink font-bold block mb-2">{card.number}</span>
              <span className="font-mono-label text-fog uppercase" style={{ fontSize: "0.65rem" }}>{card.label}</span>
              <p className="font-body text-ink mt-3 leading-relaxed">{card.line}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha mb-4">{t("trust.feedback_tag")}</p>
          <h2 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-3">{t("trust.feedback_headline")}</h2>
          <p className="font-body text-fog italic mb-10 max-w-2xl">{t("trust.feedback_sub")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbackCards.map((card, i) => (
              <div key={i} className="bg-white border-t-[3px] border-mist p-8" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <blockquote className="font-body italic text-ink border-l-[3px] border-gold pl-4 mb-5" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{card.quote}</blockquote>
                <p className="font-mono-label text-fog uppercase mb-3" style={{ fontSize: "0.65rem" }}>{card.attribution}</p>
                <span className="inline-block bg-pale-matcha text-matcha font-mono-label uppercase px-3 py-1" style={{ fontSize: "0.6rem" }}>{card.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-ink p-8 md:p-10 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {credentials.map((item, i) => (
              <div key={i} className={`${i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}`}>
                <span className="font-mono-label text-fog uppercase block mb-1" style={{ fontSize: "0.6rem" }}>{item.label}</span>
                <span className="font-body text-cream font-bold" style={{ fontSize: "1rem" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="font-mono-label text-fog uppercase mb-3" style={{ fontSize: "0.7rem" }}>{t("trust.cta_tag")}</p>
          <h2 className="font-heading text-2xl md:text-3xl text-ink font-bold mb-3">{t("trust.cta_headline")}</h2>
          <p className="font-body text-ink mb-6">{t("trust.cta_body")}</p>
          <a href="#contact" className="inline-block bg-ink text-cream font-body px-10 py-4 hover:opacity-90 transition-opacity">{t("trust.cta_button")}</a>
          <p className="font-mono-label text-fog mt-4" style={{ fontSize: "0.6rem" }}>{t("trust.cta_note")}</p>
        </div>

      </div>
    </section>
  );
};

export default TrustBlock;
