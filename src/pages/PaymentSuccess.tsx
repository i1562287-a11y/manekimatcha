import { useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Mail } from "lucide-react";
import NoiseOverlay from "@/components/maneki/NoiseOverlay";
import { fbqTrack } from "@/lib/fbpixel";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const value = parseFloat(searchParams.get("amount") || "") || undefined;
    const currency = searchParams.get("currency") || "EUR";
    fbqTrack("Purchase", value ? { value, currency } : { currency, value: 0 });
  }, [searchParams]);

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
            <div className="w-20 h-20 border-2 border-gold flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
          </div>

          <p className="font-mono-label text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Payment Confirmed
          </p>

          <h1 className="font-heading text-4xl md:text-5xl text-cream font-bold mb-6">
            Thank you.
          </h1>

          <p className="font-body text-cream/60 mb-8 leading-relaxed">
            Your payment has been processed successfully. We'll send a confirmation
            and invoice to your email shortly.
          </p>

          <div className="bg-cream/5 border border-cream/10 p-6 mb-10 text-left space-y-3">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-mono-label text-xs tracking-widest uppercase text-cream/40 mb-1">
                  What happens next
                </p>
                <ul className="font-body text-sm text-cream/70 space-y-1.5">
                  <li>• Invoice sent to your email within 24 hours</li>
                  <li>• Order confirmed and prepared for shipment</li>
                  <li>• Tracking info sent when dispatched</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3.5 font-mono-label text-sm tracking-widest uppercase hover:bg-cream transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Nokari
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
