import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2, FileText, CreditCard, MessageCircle } from "lucide-react";

const VAT_RATE = 0.23;

const CartDrawer = () => {
  const navigate = useNavigate();
  const { items, drawerOpen, setDrawerOpen, updateItem, removeItem } = useCart();

  const subtotal = items.reduce((s, i) => s + i.kg * i.pricePerKg, 0);
  const vat = subtotal * VAT_RATE;
  const total = subtotal + vat;

  const orderItems = items.map((i) => ({
    name: i.name,
    kg: i.kg,
    pricePerKg: i.pricePerKg,
  }));

  const handleRequestInvoice = () => {
    setDrawerOpen(false);
    navigate("/order", { state: { items: orderItems } });
  };

  const handlePayNow = () => {
    setDrawerOpen(false);
    navigate("/order", { state: { items: orderItems, defaultPaymentMethod: "card" } });
  };

  const handleGetInTouch = () => {
    setDrawerOpen(false);
    const lines = items.map((i) => `${i.kg} kg ${i.name}`);
    const msg = encodeURIComponent(
      `I'm interested in: ${lines.join(", ")}. Please contact me to discuss samples and ordering.`
    );
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const textarea = el.querySelector("textarea");
        if (textarea) {
          textarea.value = decodeURIComponent(msg);
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 600);
    }
  };

  return (
    <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
      <SheetContent
        side="right"
        className="bg-ink border-cream/10 w-full sm:max-w-md p-0 rounded-none flex flex-col"
      >
        <SheetHeader className="p-6 pb-0">
          <SheetTitle className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold">
            Your Order
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <p className="font-body text-sm text-cream/40 text-center">
              Your order is empty.<br />Browse products above to get started.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.name} className="bg-cream/5 border border-cream/10 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-heading text-lg text-cream font-bold">{item.name}</p>
                      <p className="font-body text-xs text-cream/40">
                        €{item.pricePerKg} / kg
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-cream/30 hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0 border border-cream/20 inline-flex">
                      <button
                        onClick={() => updateItem(item.name, item.kg - 1)}
                        className="w-9 h-9 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-cream/5 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={item.kg}
                        onChange={(e) =>
                          updateItem(item.name, Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="w-12 h-9 text-center font-heading text-base text-cream bg-transparent border-x border-cream/20 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => updateItem(item.name, item.kg + 1)}
                        className="w-9 h-9 flex items-center justify-center text-cream/60 hover:text-gold hover:bg-cream/5 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-heading text-lg text-cream font-bold">
                      €{(item.kg * item.pricePerKg).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-cream/10 p-6 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between font-body text-sm text-cream/50">
                  <span>Subtotal (ex VAT)</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-body text-sm text-cream/50">
                  <span>VAT (23%)</span>
                  <span>€{vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-heading text-xl text-cream font-bold pt-2">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleRequestInvoice}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-ink py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors"
                >
                  <FileText size={18} />
                  Request Invoice
                </button>
                <button
                  onClick={handlePayNow}
                  className="w-full flex items-center justify-center gap-2 border border-cream/20 text-cream/60 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  <CreditCard size={18} />
                  Pay by Card
                </button>
                <button
                  onClick={handleGetInTouch}
                  className="w-full flex items-center justify-center gap-2 border border-cream/20 text-cream/60 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  <MessageCircle size={18} />
                  Get in Touch
                </button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
