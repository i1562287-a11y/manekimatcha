import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
    email: "",
    phone: "",
    paymentMethod: "bank-transfer",
  });
  const [submitting, setSubmitting] = useState(false);

  const activeItems = items.filter((i) => i.kg > 0);
  const totalExVat = activeItems.reduce((s, i) => s + i.kg * i.pricePerKg, 0);
  const vat = totalExVat * 0.23;
  const totalInclVat = totalExVat + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      toast.success(`Order received! Invoice will be sent to ${form.email}`);
      setForm({ name: "", business: "", email: "", phone: "", paymentMethod: "bank-transfer" });
      setSubmitting(false);
      onOpenChange(false);
    }, 800);
  };

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
              <span>VAT (23%)</span>
              <span>€{vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-heading text-lg text-cream font-bold">
              <span>Total</span>
              <span>€{totalInclVat.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-4">
          {[
            { key: "name", label: "Your Name", type: "text", required: true },
            { key: "business", label: "Business Name", type: "text", required: false },
            { key: "email", label: "Email", type: "email", required: true },
            { key: "phone", label: "Phone / WhatsApp", type: "tel", required: false },
          ].map((field) => (
            <div key={field.key}>
              <label className="font-mono-label text-xs tracking-widest uppercase text-cream/40 block mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                required={field.required}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-cream/5 border border-cream/10 text-cream px-4 py-3 font-body text-sm focus:outline-none focus:border-gold placeholder:text-cream/20 rounded-none"
              />
            </div>
          ))}

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
            {submitting ? "Sending..." : "Send Order Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
