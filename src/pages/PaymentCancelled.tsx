import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";

const PaymentCancelled = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-cream relative flex flex-col">
      <NoiseOverlay />
      <nav className="relative z-10 w-full px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">野狩</span>
            <span className="font-mono-label text-sm tracking-[0.2em] uppercase text-cream font-medium">
              Nokari Matcha
            </span>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-lg w-full mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 border-2 border-cream/20 flex items-center justify-center">
              <XCircle className="w-10 h-10 text-cream/40" />
            </div>
          </div>

          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-cream/40 mb-4">
            Payment Cancelled
          </p>

          <h1 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-6">
            No worries.
          </h1>

          <p className="font-body text-cream/60 mb-8 leading-relaxed">
            Your payment was not completed. Your order details have been saved —
            we'll follow up if you'd like to proceed later.
          </p>

          <div className="bg-cream/5 border border-cream/10 p-6 mb-10 text-left">
            <p className="font-mono-label text-xs tracking-widest uppercase text-cream/40 mb-2">
              Need help?
            </p>
            <p className="font-body text-sm text-cream/70">
              If you experienced any issues during checkout, feel free to contact us.
              We're happy to help with alternative payment methods.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Nokari
            </button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="inline-flex items-center justify-center gap-2 border border-cream/20 text-cream/60 px-8 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={18} />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
