

## Hero Section: Photo Integration

### What changes

**Right panel** — replace the dark "Product Passport" block with a full-bleed matcha powder photo (the one already saved at `src/assets/products/matcha/matcha-powder.png`). The Product Passport specs move into a compact overlay strip at the bottom of the image (semi-transparent ink background), keeping the data visible but secondary to the visual.

This gives the hero a strong product-first impression — powder on dark, text on cream — classic split layout.

### Farm photo for background/secondary use

You don't need it in the hero itself, but it would work great as a full-width background for the **TrustBlock** or **JapanTrust** section (parallax-style, dimmed).

**Ideal size:** 1920 x 1080 px (landscape, 16:9)

**Scene I'd want:**
> Rows of tea bushes (tencha) on a misty hillside in Shizuoka, early morning light, soft fog between the rows. No people, no signage. Muted greens and warm golden light. Photographic style — not illustration. Think editorial travel photography: shallow atmosphere, natural haze, quiet and contemplative.

### Technical steps

1. Import `matcha-powder.png` into `Hero.tsx`
2. Replace the right-side `<div className="bg-ink ...">` with an image container — `object-cover`, sharp corners, full height
3. Move Product Passport specs into a small overlay bar at the bottom of the image (absolute positioned, `bg-ink/80 backdrop-blur`, horizontal layout on desktop, stacked on mobile)
4. Adjust responsive behavior: on mobile, image stacks above text at ~50vh height

