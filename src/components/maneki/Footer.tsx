import { Instagram } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const navLinks = [
    { label: t("footer.products"), href: "#products" },
    { label: t("footer.pricing"), href: "#pricing" },
    { label: t("footer.compliance"), href: "#compliance" },
    { label: t("footer.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-ink py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">野狩</span>
              <span className="font-mono-label text-sm tracking-[0.2em] uppercase text-cream font-medium">Nokari Matcha</span>
            </div>
            <p className="font-body text-sm text-cream/40 max-w-xs whitespace-pre-line mb-5">{t("footer.prices_note")}</p>
            <a
              href="https://www.instagram.com/nokari.matcha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nokari Matcha on Instagram"
              className="inline-flex items-center gap-2 font-mono-label text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors"
            >
              <Instagram size={16} />
              @nokari.matcha
            </a>
          </div>

          <div>
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/30 mb-4">{t("footer.nav_title")}</p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block font-body text-sm text-cream/60 hover:text-gold transition-colors">{link.label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/30 mb-4">{t("footer.legal_title")}</p>
            <p className="font-body text-sm text-cream/40 leading-relaxed whitespace-pre-line">{t("footer.legal_body")}</p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/30">{t("footer.copyright", { year: String(year) })}</p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-cream/30 hover:text-gold transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="font-body text-xs text-cream/30 hover:text-gold transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
