import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface OrderItem {
  name: string;
  kg: number;
  pricePerKg: number;
}

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: OrderItem[];
}

const OrderModal = ({ open, onOpenChange, items }: OrderModalProps) => {
  const [form, setForm] = useState({
    name: "",
    business: "",
    vatNumber: "",
    outsidePortugal: false,
    country: "",
    email: "",
    phone: "",
    paymentMethod: "bank-transfer",
  });
  const [submitting, setSubmitting] = useState(false);

  const activeItems = items.filter((i) => i.kg > 0);
  const totalExVat = activeItems.reduce((s, i) => s + i.kg * i.pricePerKg, 0);
  const vat = form.outsidePortugal ? 0 : totalExVat * 0.23;
  const totalInclVat = totalExVat + vat;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitting(true);

    try {
      if (form.paymentMethod === "card") {
        // Stripe checkout flow
        const { data, error } = await supabase.functions.invoke("create-checkout-session", {
          body: {
            name: form.name,
            business: form.business,
            vatNumber: form.vatNumber,
            outsidePortugal: form.outsidePortugal,
            country: form.country,
            email: form.email,
            phone: form.phone,
            items: activeItems,
          },
        });

        if (error) throw error;
        if (data?.url) {
          window.location.href = data.url;
          return;
        }
        throw new Error("No checkout URL returned");
      } else {
        // Invoice / non-card flow
        const { data, error } = await supabase.functions.invoke("send-order-telegram", {
          body: {
            name: form.name,
            business: form.business,
            vatNumber: form.vatNumber,
            outsidePortugal: form.outsidePortugal,
            country: form.country,
            email: form.email,
            phone: form.phone,
            paymentMethod: form.paymentMethod,
            items: activeItems,
            totalExVat,
            vat,
            totalInclVat,
          },
        });

        if (error) throw error;

        toast.success(
          `Order received! Invoice will be sent to ${form.email}${form.vatNumber ? ` (VAT: ${form.vatNumber})` : ""}`
        );
      }

      setForm({
        name: "",
        business: "",
        vatNumber: "",
        outsidePortugal: false,
        country: "",
        email: "",
        phone: "",
        paymentMethod: "bank-transfer",
      });
      onOpenChange(false);
    } catch (err) {
      console.error("Order submit error:", err);
      toast.error("Failed to send order. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const textFields = [
    { key: "name", label: "Your Name", type: "text", required: true },
    { key: "business", label: "Business Name", type: "text", required: false },
  ];

  const contactFields = [
    { key: "email", label: "Email", type: "email", required: true },
    { key: "phone", label: "Phone / WhatsApp", type: "tel", required: false },
  ];

  const renderInput = (field: { key: string; label: string; type: string; required: boolean }) => (
    <div key={field.key}>
      <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">
        {field.label}
      </label>
      <input
        type={field.type}
        required={field.required}
        value={form[field.key as keyof typeof form] as string}
        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
        className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20 rounded-none"
      />
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-ink border-cream/10 text-cream max-w-lg rounded-none p-0 gap-0">
        <DialogHeader className="p-8 pb-0">
          <DialogTitle className="font-heading text-2xl text-cream">
            Request Invoice
          </DialogTitle>
        </DialogHeader>

        {/* Order Summary */}
        <div className="mx-8 mt-6 bg-cream/5 border border-cream/10 p-5">
          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Order Summary
          </p>
          {activeItems.map((item) => (
            <div key={item.name} className="flex justify-between font-body text-sm text-cream/80 mb-1">
              <span>{item.kg} kg × {item.name}</span>
              <span>€{(item.kg * item.pricePerKg).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-cream/10 mt-3 pt-3 space-y-1">
            <div className="flex justify-between font-body text-sm text-cream/50">
              <span>Subtotal (ex VAT)</span>
              <span>€{totalExVat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-body text-sm text-cream/50">
              <span>
                {form.outsidePortugal ? "VAT (reverse charge)" : "VAT (23%)"}
              </span>
              <span>€{vat.toFixed(2)}</span>
            </div>
            {form.outsidePortugal && (
              <p className="font-body text-xs text-gold/70 italic">
                EU reverse charge — Art. 138 VAT Directive
              </p>
            )}
            <div className="flex justify-between font-heading text-lg text-cream font-bold">
              <span>Total</span>
              <span>€{totalInclVat.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-4">
          {textFields.map(renderInput)}

          {/* VAT / NIF */}
          <div>
            <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">
              {form.outsidePortugal ? "VAT Number (EU)" : "NIF / VAT Number"}
            </label>
            <input
              type="text"
              value={form.vatNumber}
              onChange={(e) => setForm({ ...form, vatNumber: e.target.value })}
              placeholder={form.outsidePortugal ? "DE123456789" : "PT123456789"}
              className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20 rounded-none"
            />
          </div>

          {/* Outside Portugal checkbox */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              checked={form.outsidePortugal}
              onCheckedChange={(checked) =>
                setForm({ ...form, outsidePortugal: checked === true, country: "" })
              }
              className="border-cream/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold rounded-none h-5 w-5"
            />
            <span className="font-body text-sm text-cream/70 group-hover:text-cream transition-colors">
              Company outside Portugal{" "}
              <span className="text-cream/40">(EU reverse charge — 0% VAT)</span>
            </span>
          </label>

          {/* Country — only when outside Portugal */}
          {form.outsidePortugal && (
            <div>
              <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">
                Country
              </label>
              <input
                type="text"
                required
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                placeholder="e.g. Germany, France, Spain"
                className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20 rounded-none"
              />
            </div>
          )}

          {contactFields.map(renderInput)}

          {/* Payment Method */}
          <div>
            <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-3">
              Preferred Payment
            </label>
            <RadioGroup
              value={form.paymentMethod}
              onValueChange={(v) => setForm({ ...form, paymentMethod: v })}
              className="grid grid-cols-2 gap-2"
            >
              {[
                { value: "bank-transfer", label: "Bank Transfer" },
                { value: "mbway", label: "MB Way" },
                { value: "multibanco", label: "Multibanco" },
                { value: "card", label: "Card" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 px-3 py-2.5 border cursor-pointer transition-colors ${
                    form.paymentMethod === opt.value
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-cream/10 text-cream/60 hover:border-cream/30"
                  }`}
                >
                  <RadioGroupItem value={opt.value} className="border-cream/30 text-gold" />
                  <span className="font-body text-sm">{opt.label}</span>
                </label>
              ))}
            </RadioGroup>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-ink py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors disabled:opacity-50"
          >
            {submitting
              ? "Processing..."
              : form.paymentMethod === "card"
              ? "Proceed to Payment"
              : "Send Order Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
