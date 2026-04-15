import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import KanjiWatermark from "./KanjiWatermark";
import { useFadeUp } from "./useFadeUp";
import { useTranslation } from "@/i18n/LanguageContext";

const Contact = () => {
  const ref = useFadeUp();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitting(true);

    try {
      const text = [
        `📦 <b>Sample Kit Request</b>`,
        ``,
        `<b>Name:</b> ${form.name}`,
        form.business ? `<b>Business:</b> ${form.business}` : null,
        `<b>Email:</b> ${form.email}`,
        form.whatsapp ? `<b>WhatsApp:</b> ${form.whatsapp}` : null,
        form.message ? `\n<b>Message:</b>\n${form.message}` : null,
      ].filter(Boolean).join('\n');

      const { error } = await supabase.functions.invoke("send-order-telegram", {
        body: { name: form.name, email: form.email, rawText: text },
      });

      if (error) throw error;

      toast.success(t("contact.toast_success"));
      setForm({ name: "", business: "", email: "", whatsapp: "", message: "" });
    } catch (err) {
      console.error("Sample request error:", err);
      toast.error(t("contact.toast_error"));
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    { key: "name", label: t("contact.form_name"), type: "text" },
    { key: "business", label: t("contact.form_business"), type: "text" },
    { key: "email", label: t("contact.form_email"), type: "email" },
    { key: "whatsapp", label: t("contact.form_whatsapp"), type: "tel" },
  ];

  return (
    <section id="contact" className="bg-matcha py-24 relative overflow-hidden" ref={ref as any}>
      <KanjiWatermark kanji="招" className="right-10 top-10 text-cream" />

      <div className="fade-up max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">{t("contact.tag")}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-4 whitespace-pre-line">{t("contact.headline")}</h2>
          <p className="font-body text-cream/70 mb-10 max-w-md">{t("contact.sub")}</p>

          <div className="space-y-4 mb-10">
            <a href="tel:+351920164126" className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors">
              <span className="font-mono-label text-xs tracking-widest uppercase">{t("contact.manager")}</span>
              <span className="font-body text-sm">+351 920 164 126</span>
            </a>
          </div>

          <div className="border-t border-cream/10 pt-6">
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/30 mb-2">{t("contact.legal_tag")}</p>
            <p className="font-body text-sm text-cream/60 whitespace-pre-line">{t("contact.legal_body")}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-ink p-8 lg:p-10 space-y-5">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-2">{t("contact.form_tag")}</p>

          {fields.map((field) => (
            <div key={field.key}>
              <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">{field.label}</label>
              <input
                type={field.type}
                required={field.key !== "whatsapp"}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20"
              />
            </div>
          ))}

          <div>
            <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">{t("contact.form_message")}</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t("contact.form_placeholder")}
              className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-ink py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors disabled:opacity-50"
          >
            {submitting ? t("contact.form_sending") : t("contact.form_submit")}
          </button>

          <p className="font-body text-xs text-cream/30 text-center">{t("contact.form_consent")}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
