

## Add Mood Photography to Site

Four beautiful photos available — tea farm, processing, matcha bowl, leaf picking. The goal is to add atmosphere without overloading. Here's where they fit best:

### Placement Strategy

**1. Hero section** — Replace current matcha-powder product shot with `shot_003.png` (farmer on tea field with misty mountains). This is the strongest hero image — cinematic, emotional, tells the "from Japanese farms" story instantly. The product photos already live in the Products section.

**2. JapanTrust section** — Add a full-width mood image above the three cards. Use `shot_002.png` (tea processing workshop). This section is about craft, traceability, and the Japan standard — the processing photo reinforces that perfectly. Rendered as a wide horizontal band with `object-cover`, ~400px height.

**3. WhySection** — Add `shot_002-2.png` (hands picking tea leaves) as a small accent image below the "Why Nokari" heading, before the four reasons. Compact, square-ish crop. Adds a tactile, human element to the text-heavy section.

**4. Skip** `mood_05_wabi.png` (matcha bowl) — the Products section already has matcha-cup photos in the carousel. Adding another bowl shot would be redundant.

### Files Changed

| File | Change |
|------|--------|
| `src/assets/mood/` | Copy 3 images: `shot_003.png`, `shot_002.png`, `shot_002-2.png` |
| `Hero.tsx` | Import `shot_003` instead of `matchaPowder`; update alt text |
| `JapanTrust.tsx` | Import `shot_002`; add full-width image band above the 3 cards |
| `WhySection.tsx` | Import `shot_002-2`; add small image between heading and reasons list |

Three photos, three sections. No section gets more than one image. Page stays clean.

