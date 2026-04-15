

## Sticky Cart Drawer — B2B Order Flow

### Problem

Current flow: user clicks "Add to Order" on a product card → page scrolls to an inline order summary at the bottom of the Products section. This is unintuitive because:
- The summary disappears when scrolling away
- No persistent cart indicator — user forgets what's in the order
- Adding a second product requires scrolling back up, then down again
- No way to edit quantities from the summary

### Solution: Floating Cart with Slide-out Drawer

A persistent mini-cart icon in the navbar + a slide-out drawer that shows the full order. This is familiar cart UX adapted for B2B: still shows invoice/bank transfer options, VAT calculation, and bulk kg quantities.

```text
┌─────────────────────────────────────────────┐
│  野狩 Nokari Matcha   Products  ...  [🛒 2] │  ← cart badge in navbar
└─────────────────────────────────────────────┘

                              ┌──────────────────┐
                              │  YOUR ORDER       │
                              │                   │
                              │  Matcha    3 kg   │
                              │  [-] [3] [+]      │
                              │  €465.00          │
                              │                   │
                              │  Houjicha  1 kg   │
                              │  [-] [1] [+]      │
                              │  €115.00          │
                              │                   │
                              │  ─────────────    │
                              │  Subtotal €580    │
                              │  VAT 23%  €133.40 │
                              │  Total    €713.40 │
                              │                   │
                              │  [Request Invoice]│
                              │  [Pay by Card]    │
                              │  [Get in Touch]   │
                              └──────────────────┘
```

### UX Details

1. **Cart state via React Context** — shared between Navbar, Products, and the Drawer. Persists during session.
2. **"Add to Order" buttons stay on product cards** — clicking adds 1 kg (or increments) and briefly opens the cart drawer with a toast/animation confirming the add.
3. **Cart badge in Navbar** — shows total number of items (kg count or product count). Always visible. Clicking opens the drawer.
4. **Cart Drawer (right side)** — uses the existing Vaul `Drawer` component or a `Sheet` from shadcn. Shows:
   - Each product with name, kg stepper (editable), line total
   - Remove button per item
   - Subtotal, VAT, Total
   - Three CTA buttons: Request Invoice, Pay by Card, Get in Touch
5. **Inline order summary in Products section removed** — replaced by the drawer. Product cards become cleaner.
6. **KgStepper reused** — same component, just styled for dark drawer background.
7. **Empty cart state** — "Your order is empty. Browse products above."

### Files Changed

| File | Change |
|------|--------|
| `src/context/CartContext.tsx` | New. React context with items array, add/remove/update functions |
| `src/components/maneki/CartDrawer.tsx` | New. Sheet/Drawer component with order summary, steppers, CTAs |
| `src/components/maneki/Navbar.tsx` | Add cart icon + badge, open drawer on click |
| `src/components/maneki/Products.tsx` | Simplify: remove inline order summary, connect "Add to Order" to cart context, remove local state for kg |
| `src/pages/Order.tsx` | Read items from cart context (fallback to location.state for backward compat) |
| `src/App.tsx` | Wrap routes with CartProvider |

### Design

- Drawer background: `bg-ink`, text `cream`, accents `gold` — consistent with current order summary
- Sharp corners (no border-radius per brand rules)
- Font classes: `font-heading`, `font-mono-label`, `font-body` — same as everywhere
- Cart icon: `ShoppingCart` from lucide with a small gold badge circle showing item count

