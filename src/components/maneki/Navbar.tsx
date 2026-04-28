import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTranslation, Locale } from "@/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "pt", flag: "🇵🇹", label: "PT" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setDrawerOpen } = useCart();
  const { t, locale, setLocale } = useTranslation();

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.compliance"), href: "#compliance" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentLang = languages.find((l) => l.code === locale)!;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">野狩</span>
            <span className="font-mono-label text-sm tracking-[0.2em] uppercase text-ink font-medium">
              Nokari Matcha
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-mono-label text-xs tracking-widest uppercase text-ink/70 hover:text-ink transition-colors"
              >
                {link.label}
              </button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 font-mono-label text-xs tracking-widest uppercase text-ink/70 hover:text-ink transition-colors focus:outline-none">
                <Globe size={14} />
                <span>{currentLang.flag} {currentLang.label}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cream border-ink/10 min-w-0">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={`font-mono-label text-xs tracking-widest cursor-pointer ${
                      locale === lang.code ? "text-matcha font-bold" : "text-ink/70"
                    }`}
                  >
                    {lang.flag} {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleClick("#contact")}
              className="bg-matcha text-cream px-5 py-2.5 font-mono-label text-xs tracking-widest uppercase hover:bg-ink transition-colors"
            >
              {t("nav.request_samples")}
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative text-ink/70 hover:text-ink transition-colors p-1"
              aria-label="Open cart"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-ink text-[10px] font-mono-label font-bold w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative text-ink/70 hover:text-ink transition-colors p-1"
              aria-label="Open cart"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-ink text-[10px] font-mono-label font-bold w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="text-ink"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-heading text-3xl text-ink"
            >
              {link.label}
            </button>
          ))}

          <div className="flex gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLocale(lang.code); setMobileOpen(false); }}
                className={`font-mono-label text-sm tracking-widest px-3 py-2 border ${
                  locale === lang.code
                    ? "border-matcha text-matcha bg-pale-matcha"
                    : "border-ink/20 text-ink/60"
                }`}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleClick("#contact")}
            className="bg-matcha text-cream px-8 py-3 font-mono-label text-sm tracking-widest uppercase mt-4"
          >
            {t("nav.request_samples")}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
