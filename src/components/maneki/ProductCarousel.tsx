import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ProductCarouselProps {
  images: { src: string; alt: string }[];
  accentColor?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, accentColor = "bg-matcha" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  if (images.length === 0) return null;

  return (
    <div className="mb-6">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="aspect-square bg-cream-dark flex items-center justify-center overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 transition-all ${
                i === selectedIndex
                  ? `${accentColor} scale-125`
                  : "bg-ink/20 hover:bg-ink/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
