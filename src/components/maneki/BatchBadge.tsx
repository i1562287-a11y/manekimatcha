import { useEffect, useState } from "react";
import { useFadeUp } from "./useFadeUp";

const BatchBadge = () => {
  const ref = useFadeUp();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="batch" className="bg-batch-gold py-16 relative overflow-hidden" ref={ref as any}>
      <div className="fade-up max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-3 h-3 bg-matcha inline-block animate-pulse" />
          <span className="font-mono-label text-xs tracking-[0.3em] uppercase text-matcha font-medium">
            Current Batch Available
          </span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-2">
          Osada Seicha · Shizuoka Prefecture
        </h2>
        <p className="font-body text-ink/60 mb-8">
          Spring Harvest 2025 · Ichibancha · First flush
        </p>

        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between font-mono-label text-xs tracking-widest uppercase text-ink/60 mb-2">
            <span>Batch Allocation</span>
            <span>75% Reserved</span>
          </div>
          <div className="w-full h-3 bg-ink/10 overflow-hidden">
            <div
              className={`h-full bg-matcha transition-all duration-[2000ms] ease-out ${
                animated ? "w-[75%]" : "w-0"
              }`}
            />
          </div>
        </div>

        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="font-mono-label text-xs tracking-widest uppercase text-matcha border-b-2 border-matcha pb-1 hover:text-ink hover:border-ink transition-colors"
        >
          Secure your café's supply →
        </button>
      </div>
    </section>
  );
};

export default BatchBadge;
