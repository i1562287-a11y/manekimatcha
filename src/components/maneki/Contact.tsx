import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import KanjiWatermark from "./KanjiWatermark";
import { useFadeUp } from "./useFadeUp";

const Contact = () => {
  const ref = useFadeUp();
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
        body: {
          name: form.name,
          email: form.email,
          rawText: text,
        },
      });

      if (error) throw error;

      toast.success("Sample request sent! We'll be in touch within 24 hours.");
      setForm({ name: "", business: "", email: "", whatsapp: "", message: "" });
    } catch (err) {
      console.error("Sample request error:", err);
      toast.error("Failed to send request. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-matcha py-24 relative overflow-hidden" ref={ref as any}>
      <KanjiWatermark kanji="招" className="right-10 top-10 text-cream" />

      <div className="fade-up max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left */}
        <div>
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Get Started
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-4">
            The cat beckons.<br />We deliver.
          </h2>
          <p className="font-body text-cream/70 mb-10 max-w-md">
            Request a sample kit and discover what farm-traceable Japanese tea tastes like 
            in your café. No commitment, no minimum, just great tea.
          </p>

          <div className="space-y-4 mb-10">
            <a
              href="mailto:hello@manekimatcha.pt"
              className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors"
            >
              <span className="font-mono-label text-xs tracking-widest uppercase">Email</span>
              <span className="font-body text-sm">hello@manekimatcha.pt</span>
            </a>
            <a
              href="https://wa.me/351000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors"
            >
              <span className="font-mono-label text-xs tracking-widest uppercase">WhatsApp</span>
              <span className="font-body text-sm">+351 000 000 000</span>
            </a>
            <a
              href="https://instagram.com/manekimatcha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors"
            >
              <span className="font-mono-label text-xs tracking-widest uppercase">Instagram</span>
              <span className="font-body text-sm">@manekimatcha</span>
            </a>
          </div>

          <div className="border-t border-cream/10 pt-6">
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/30 mb-2">
              Legal Entity
            </p>
            <p className="font-body text-sm text-cream/60">
              Vechirka LDA · VAT PT 517639475<br />
              Registered food importer · Portugal
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <form onSubmit={handleSubmit} className="bg-ink p-8 lg:p-10 space-y-5">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-2">
            Sample Kit Request
          </p>

          {[
            { key: "name", label: "Your Name", type: "text" },
            { key: "business", label: "Business Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
            { key: "whatsapp", label: "WhatsApp (optional)", type: "tel" },
          ].map((field) => (
            <div key={field.key}>
              <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">
                {field.label}
              </label>
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
            <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">
              Message
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your café, your volume, or what you're looking for."
              className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-ink py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Request Sample Kit"}
          </button>

          <p className="font-body text-xs text-cream/30 text-center">
            By submitting, you agree to be contacted about Maneki Matcha products. 
            We don't share your data with third parties.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
