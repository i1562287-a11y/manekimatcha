

## Product Image Carousel for Matcha

### What we're building
A Shopify-style image carousel inside the Matcha product card with swipe/click navigation and dot indicators. 4 photos in order:
1. Powder (ball of matcha powder)
2. Top view (matcha in cup from above)
3. Package front
4. Package back

### Implementation

**1. Copy uploaded images to `src/assets/products/matcha/`**
- `user-uploads://ChatGPT_Image_13_апр._2026_г._14_33_12.png` → `matcha-powder.png`
- `user-uploads://6rGfX9DXxv3oUKKx0282a_gkaUZgfu_1.jpg` → `matcha-cup.jpg`
- `user-uploads://ChatGPT_Image_13_апр._2026_г._14_44_08.png` → `matcha-pack-front.png`
- `user-uploads://ChatGPT_Image_13_апр._2026_г._14_45_23.png` → `matcha-pack-back.png`

**2. Create `src/components/maneki/ProductCarousel.tsx`**
- Reusable carousel component using Embla (already installed via `carousel.tsx`)
- Thumbnail dots at bottom, click to navigate
- Touch swipe support (Embla handles this)
- Sharp corners (no border-radius), consistent with brand
- Aspect ratio container for consistent image sizing
- Current slide indicator dots styled with matcha/gold colors

**3. Update `src/components/maneki/Products.tsx`**
- Import `ProductCarousel` and matcha images
- Add carousel above the price block inside the Matcha card
- Pass array of image imports + alt texts to the carousel
- Houjicha card stays as-is (no photos yet)

### Layout
The carousel sits at the top of each product card, before the product name. Full-width within the card padding area. Dot navigation below the image.

