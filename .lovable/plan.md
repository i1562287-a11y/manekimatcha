

# Maneki Matcha — B2B Website (Updated with Copy)

Full single-page B2B site using the exact copy from Maneki_Copy_v1.docx. All text inserted 1:1 as specified.

## 1. Setup & Design System

**Files:** `src/index.css`, `tailwind.config.ts`, `index.html`

- Add Google Fonts: Shippori Mincho (headings), DM Mono (labels/meta), Archivo Narrow (body)
- Define CSS custom properties for brand colors:
  - `cream: #F5F0E8` (main bg), `ink: #1A2E1E`, `matcha: #2D6A4F`, `gold: #C9A84C`
  - `pale-matcha: #EDF5EF`, `batch-gold: #FBF3DC`, `warm-cream: #FAF6EF`
- Set `border-radius: 0` globally — sharp corners everywhere
- Create reusable noise texture SVG overlay (fractalNoise, 3-5% opacity)
- Add SEO meta tags to `index.html`: title, meta description, OG tags from the copy doc (Section 14)

## 2. Component Architecture

All components in `src/components/maneki/`:

| Component | Description |
|-----------|-------------|
| `Navbar.tsx` | Fixed nav with logo 招き猫 MANEKI MATCHA, links, CTA "Request Samples", blur bg, burger on mobile |
| `Hero.tsx` | 2-column 100vh. Left: eyebrow, H1, subtitle, gold-border quote, 2 CTAs. Right: dark specs panel with origin/importer grid + kanji watermark |
| `BatchBadge.tsx` | Gold bg, green dot indicator, farm name, harvest info, animated progress bar (75%), CTA |
| `TrustStrip.tsx` | Dark strip, 5 trust points separated by gold dots |
| `WhySection.tsx` | Pale green bg, left: 4 numbered reasons with full copy. Right: dark comparison table (7 rows) |
| `Products.tsx` | 2 equal cards — Matcha (SHIZUMAT 06) + Houjicha (MIYAHOP) with tiers, margins, inclusions, CTAs |
| `Pricing.tsx` | Dark bg. Full price tables + 2 interactive margin calculator cards |
| `Compliance.tsx` | Pale green bg, 6 compliance items with numbering (①-⑥) and full descriptions |
| `JapanTrust.tsx` | 3 cards: Shinrai (trust), Curated Standard, Direct Access — with full copy from doc |
| `WhoWeServe.tsx` | 3 persona cards: Specialty Café, Wellness & Vegan, Expat Retailer — with pain points and key messages |
| `Contact.tsx` | Matcha green bg, kanji watermark, 5-field form, channel buttons (Email/WhatsApp/Instagram), company details |
| `Footer.tsx` | Dark bg, logo + tagline, nav links, legal text, privacy/terms links |
| `NoiseOverlay.tsx` | SVG fractalNoise texture overlay component |
| `KanjiWatermark.tsx` | Reusable kanji watermark at low opacity |

## 3. Key Interactions

- **Margin Calculator**: Two calculator cards (matcha + houjicha). Input fields: grams/serving, price/kg tier, menu price. Outputs: cost per serving, gross margin %, monthly projections. Pre-filled with default values from copy (3g matcha at T2, 4g houjicha at H2)
- **Smooth scroll**: Nav links scroll to section anchors
- **FadeUp animations**: Intersection Observer triggers on each section
- **Progress bar**: Animated green fill on BatchBadge (75%)
- **Nav**: Becomes opaque with shadow after 50px scroll. Mobile burger opens full-screen overlay
- **Form**: Client-side only, shows toast on submit

## 4. Copy Integration

All text from the copy doc inserted verbatim:
- Hero H1: "Japanese matcha that proves itself."
- Hero subtitle: "From the farm to your menu — with the invoice to show for it."
- Hero quote: "Authentic Japanese farms. Lucky you found us."
- Hero body: Full paragraph about seasonal sourcing
- Specs panel: Origin, Product, Importer (Vechirka LDA · VAT PT 517639475), Compliance, Shipping
- Batch: Osada Seicha · Shizuoka Prefecture, Spring Harvest 2025 · Ichibancha · First flush
- Why section: Full 4 reasons with extended copy
- Products: Full descriptions for SHIZUMAT 06 and MIYAHOP, all tier prices
- Pricing: All tiers with details, disclaimer text
- Compliance: All 6 items with full descriptions
- Japan Trust: Shinrai explanation, curated standard story, distributor vs farm distinction
- Who We Serve: All 3 personas with pain points and supporting text
- Contact: "The cat beckons. We deliver." + form fields + privacy note
- Footer: Full legal text

## 5. Page Assembly

**File:** `src/pages/Index.tsx`

Stack all components in funnel order:
Navbar → Hero → BatchBadge → TrustStrip → WhySection → Products → Pricing → Compliance → JapanTrust → WhoWeServe → Contact → Footer

## 6. Responsive

- Mobile breakpoint: stack all 2-column layouts vertically
- Burger menu with fullscreen overlay
- Cards stack vertically
- Min font 14px
- Tables scroll horizontally on small screens

## Technical Notes

- No backend — form shows a success toast only
- Placeholder contacts: hello@manekimatcha.pt, wa.me/351000000000, @manekimatcha
- SEO sub-pages (Section 13) are NOT included in this build — main page only
- Instagram captions (Section 15) are content-only, not part of the site
- All Unsplash image briefs noted — will use placeholder/gradient backgrounds initially

