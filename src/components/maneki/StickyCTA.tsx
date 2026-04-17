import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const StickyCTA = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    let heroVisible = true;
    let contactVisible = false;

    const update = () => setVisible(!heroVisible && !contactVisible);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.1 }
    );
    const contactObs = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );

    heroObs.observe(hero);
    contactObs.observe(contact);
    return () => {
      heroObs.disconnect();
      contactObs.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur border-t border-ink/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-opacity duration-300 pb-[env(safe-area-inset-bottom)] ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-ink/60 leading-tight">
            {t("sticky.price_anchor")}
          </span>
          <a
            href="#contact"
            onClick={handleClick}
            className="bg-matcha text-cream font-mono-label text-xs tracking-[0.2em] uppercase px-5 py-3 hover:bg-ink transition-colors whitespace-nowrap"
          >
            {t("nav.request_samples")}
          </a>
        </div>
      </div>

      {/* Desktop: floating pill bottom-right */}
      <div
        className={`hidden md:block fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="#contact"
          onClick={handleClick}
          className="flex items-center gap-3 bg-cream border border-ink/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)] pl-5 pr-2 py-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all group"
        >
          <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-ink/60">
            {t("sticky.price_anchor")}
          </span>
          <span className="bg-matcha text-cream font-mono-label text-xs tracking-[0.2em] uppercase px-4 py-2 group-hover:bg-ink transition-colors">
            {t("nav.request_samples")} →
          </span>
        </a>
      </div>
    </>
  );
};

export default StickyCTA;
