interface KanjiWatermarkProps {
  kanji?: string;
  className?: string;
}

const KanjiWatermark = ({ kanji = "抹茶", className = "" }: KanjiWatermarkProps) => (
  <span
    className={`absolute select-none pointer-events-none font-heading text-[20rem] leading-none opacity-[0.04] ${className}`}
    aria-hidden="true"
  >
    {kanji}
  </span>
);

export default KanjiWatermark;
