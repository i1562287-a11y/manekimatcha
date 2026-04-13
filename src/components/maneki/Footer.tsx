const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">野狩</span>
              <span className="font-mono-label text-sm tracking-[0.2em] uppercase text-cream font-medium">
                Nokari Matcha
              </span>
            </div>
            <p className="font-body text-sm text-cream/40 max-w-xs">
              All prices ex-works Lisbon warehouse.<br />
              MOQ: 1 kg.<br />
              Bulk orders (5+ kg) available on request.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/30 mb-4">
              Navigation
            </p>
            <div className="space-y-2">
              {["Products", "Pricing", "Compliance", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/30 mb-4">
              Legal
            </p>
            <p className="font-body text-sm text-cream/40 leading-relaxed">
              Vechirka LDA<br />
              VAT PT 517639475<br />
              Registered food importer<br />
              Portugal
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/30">
            © {year} Nokari Matcha by Vechirka LDA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-cream/30 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-cream/30 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
