# Aunties Marketplace — Design Framework

The visual rules for everything we build: the coming-soon page now, the shop later.
When in doubt, aim for **warm, calm and uncluttered** — like a well-kept kitchen table, organised the way Notion is.

---

## 1. Principles

Borrowed from Notion's UI, adapted to a warmer brand:

1. **Content first.** Lots of whitespace, few borders, no decoration that doesn't help someone do something.
2. **Quiet by default, colour with purpose.** Most of the screen is ivory and ink. Green and pumpkin are used deliberately — for brand moments and actions — never as wallpaper.
3. **Soft, rounded, friendly.** Rounded cards and pill buttons, gentle shadows only on things that float.
4. **Calm interactions.** Subtle hover backgrounds instead of loud colour changes; short, gentle transitions.
5. **Readable for everyone.** Text meets WCAG AA contrast (4.5:1) at minimum. Every colour pair below lists its ratio.
6. **Mobile first.** Design for a 360px phone, then scale up.

---

## 2. Colour

All colours are defined as CSS custom properties on `:root` (see `styles.css`). Use the tokens, never raw hex values in components.

### Primary — Forest green
The brand colour. Header, footer, primary buttons, headings, feature sections.

| Token | Hex | Use |
|---|---|---|
| `--green` | `#1f4d2b` | Primary buttons, nav bar, headings, dark sections |
| `--green-dark` | `#163a20` | Hover / pressed state of green elements |
| `--green-soft` | `#e4ece0` | Tinted backgrounds, focus rings, selected rows |

Ivory text on `--green`: **9.5:1** ✅

### Secondary — Pumpkin
Warmth and highlights. Use sparingly: a badge, a secondary button, an icon, a "New" label, a sale price. Roughly one pumpkin element per screen area.

| Token | Hex | Use |
|---|---|---|
| `--pumpkin` | `#e07b24` | Badges, icons, illustrations, highlights |
| `--pumpkin-dark` | `#b35a14` | Pumpkin **text** and pumpkin buttons with ivory text |
| `--pumpkin-soft` | `#fbe9d7` | Tinted backgrounds for highlighted cards / callouts |

> ⚠️ `--pumpkin` is too light for ivory text (2.9:1). On a `--pumpkin` background use **ink** text (5.0:1). For pumpkin-coloured text, or a pumpkin button with ivory text, use `--pumpkin-dark` (4.7:1).

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `--ivory` | `#fffcf2` | Page background, text on dark |
| `--ivory-deep` | `#f6f1e1` | Alternate section background, sidebar |
| `--surface` | `#ffffff` | Inputs, cards that need to lift off ivory |
| `--border` | `rgba(31, 77, 43, 0.12)` | Card and divider lines |
| `--hover` | `rgba(31, 77, 43, 0.06)` | Notion-style hover background on rows and menu items |
| `--ink` | `#1d2a20` | Body text (14.6:1 on ivory) |
| `--muted` | `#56645a` | Secondary text, captions, placeholders (6.1:1 on ivory) |

### Status — traffic lights + info
For notifications, form messages, order states and badges. Each status has three shades:
a **solid** colour for icons, dots and filled badges, a **soft** tint for backgrounds, and a **text** shade for words on that tint.

| Status | Meaning | Solid | Soft (bg) | Text on soft |
|---|---|---|---|---|
| 🟢 Success | Done, saved, in stock, delivered | `--success` `#2e7d4f` | `--success-soft` `#e3f2e8` | `--success-text` `#1e5e3a` (6.7:1) |
| 🟠 Warning (amber) | Needs attention, low stock, pending | `--warning` `#d98e04` | `--warning-soft` `#fdf1d8` | `--warning-text` `#8a5a00` (5.3:1) |
| 🔴 Error | Failed, invalid, out of stock, cancelled | `--error` `#c0392b` | `--error-soft` `#fbe4e1` | `--error-text` `#9b2c20` (6.2:1) |
| 🔵 Info | Neutral news, tips, "did you know" | `--info` `#2b6cb0` | `--info-soft` `#e2edf8` | `--info-text` `#1f4e85` (7.1:1) |

Rules:
- **Never rely on colour alone.** Pair it with an icon or a word ("✓ Saved", "⚠ Low stock").
- Ivory text works on solid success, error and info (4.9–5.3:1). **Amber needs ink text** (5.6:1) — ivory on amber fails.
- Success green is deliberately brighter than brand green so a "saved" message never looks like a regular button.
- Amber is a yellow-orange; pumpkin is a red-orange. Don't use pumpkin to mean "warning".

```css
:root {
  /* Primary */
  --green: #1f4d2b;
  --green-dark: #163a20;
  --green-soft: #e4ece0;

  /* Secondary */
  --pumpkin: #e07b24;
  --pumpkin-dark: #b35a14;
  --pumpkin-soft: #fbe9d7;

  /* Neutrals */
  --ivory: #fffcf2;
  --ivory-deep: #f6f1e1;
  --surface: #ffffff;
  --border: rgba(31, 77, 43, 0.12);
  --hover: rgba(31, 77, 43, 0.06);
  --ink: #1d2a20;
  --muted: #56645a;

  /* Status */
  --success: #2e7d4f;  --success-soft: #e3f2e8;  --success-text: #1e5e3a;
  --warning: #d98e04;  --warning-soft: #fdf1d8;  --warning-text: #8a5a00;
  --error:   #c0392b;  --error-soft:   #fbe4e1;  --error-text:   #9b2c20;
  --info:    #2b6cb0;  --info-soft:    #e2edf8;  --info-text:    #1f4e85;
}
```

---

## 3. Typography

Two families, both free on Google Fonts:

| Role | Font | Why |
|---|---|---|
| Headings, brand name | **Fraunces** (500, 700) | A soft, characterful serif — warm and homely, not corporate |
| Body, UI, buttons, forms | **Inter** (400, 500, 600) | Clean and highly legible at small sizes; the same style of UI sans-serif Notion uses |

Fallbacks: `Georgia, serif` for Fraunces; `system-ui, -apple-system, "Segoe UI", sans-serif` for Inter.

### Type scale

| Style | Font | Size | Weight | Line height |
|---|---|---|---|---|
| Display (hero title) | Fraunces | `clamp(2.6rem, 10vw, 5rem)` | 700 | 1.1 |
| H2 (section title) | Fraunces | `clamp(1.8rem, 5vw, 2.4rem)` | 700 | 1.15 |
| H3 (card title) | Fraunces | 1.3rem | 700 | 1.2 |
| Body | Inter | 1.0625rem (17px) | 400 | 1.65 |
| Lead / intro | Inter | 1.2rem | 400 | 1.6 |
| UI label, button, tab | Inter | 0.95rem | 500–600 | 1.4 |
| Caption, helper text | Inter | 0.875rem | 400 | 1.5 |
| Eyebrow (small caps label) | Inter | 0.8rem, uppercase, `letter-spacing: 0.18em` | 600 | 1.4 |

Rules:
- Serif for **headings only**; never set paragraphs or buttons in Fraunces.
- Keep body text lines to about **65 characters** (`max-width: 65ch`).
- Sentence case everywhere ("Notify me", not "Notify Me") — friendlier and easier to read. *(The current nav tabs use title case; switch them when next editing.)*

---

## 4. Spacing & layout

- **8px grid.** Spacing values: `4, 8, 12, 16, 24, 32, 48, 64, 88` px.
- **Page gutter:** 16px on phones, content max-width **1040px** (wide) or **640px** (text-focused).
- **Section padding:** 88px top/bottom on desktop, 64px on phones.
- **Breakpoint:** `560px` for the phone layout. Grids use `repeat(auto-fit, minmax(240px, 1fr))` so they reflow on their own.

---

## 5. Shape & elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `8px` | Badges, small buttons, menu items, inputs (non-pill) |
| `--radius` | `14px` | **Cards**, callouts, modals |
| `--radius-lg` | `20px` | Large feature panels, image tiles |
| `--radius-pill` | `999px` | Primary buttons, email input, status pills |

Elevation — keep it flat, like Notion:
- **Resting cards:** no shadow, just a 1px `--border`.
- **Hover (clickable cards only):** `box-shadow: 0 4px 16px rgba(29, 42, 32, 0.08)` and lift `translateY(-2px)`.
- **Floating things** (sticky header, menus, modals, toasts): `0 2px 12px rgba(0, 0, 0, 0.12)`.

### Section dividers
Brand sections (dark green) use **soft wave edges** instead of straight lines — see `.wavy` in `styles.css`. Use at most one or two wavy sections per page so they stay special.

---

## 6. Components

### Cards
```css
.card {
  background: var(--surface);   /* or --ivory on --ivory-deep sections */
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}
```
- One idea per card: optional emoji/icon → Fraunces title → short Inter text → optional action.
- Emoji icons are welcome (🧺 🌿 📦) — Notion-style, friendly and need no icon library.
- Product cards later: rounded image on top (`--radius` top corners), title, maker name in `--muted`, price; pumpkin badge for "New" or "Local".

### Buttons
| Type | Style | Use |
|---|---|---|
| Primary | `--green` bg, ivory text, pill | The one main action per section |
| Secondary | `--pumpkin-dark` bg, ivory text, pill | A second, warmer action ("Browse aunties") |
| Ghost | Transparent, `--green` text, `--hover` bg on hover | Low-priority actions, toolbars |
| Destructive | `--error` bg, ivory text | Delete / cancel order — always confirm first |

All buttons: 14px × 28px padding, Inter 600, visible focus ring (`3px solid --green-soft`), 44px minimum tap height on phones.

### Notifications & messages
- **Inline message** (under a form): status text colour, icon first — `✓ Thank you, you're on the list.`
- **Callout** (Notion-style): soft status background, `--radius`, emoji on the left, text in the matching `-text` colour.
- **Toast** (later, in the shop): ivory surface, floating shadow, 4px left border in the solid status colour, auto-dismiss after ~5s, with a close button.
- **Status pill/badge:** soft background, text colour, `--radius-pill`, 0.8rem Inter 600 — e.g. `● In stock`, `● Low stock`.

### Forms
- Inputs: `--surface` background, 1.5px border at `rgba(31, 77, 43, 0.3)`, pill or `--radius-sm`.
- Focus: border `--green` + `0 0 0 3px var(--green-soft)` ring.
- Errors: border `--error`, message below in `--error-text` with an icon.
- Every input has a label (visible, or visually hidden for single-field forms like the email sign-up).

### Navigation
- Sticky green header; tabs centred, active tab marked with an ivory underline.
- Notion-style lists and menus: no borders between rows, `--hover` background on hover, `--radius-sm` corners.

---

## 7. Motion

- Durations: **150–200ms** for hovers and colour changes, **250ms** for anything that moves.
- Easing: `ease-out`.
- Smooth scrolling for in-page links.
- Respect `prefers-reduced-motion`: turn off smooth scrolling, lifts and slides.

---

## 8. Accessibility checklist

- [ ] Text contrast ≥ 4.5:1 (large headings ≥ 3:1) — use the pairs listed above
- [ ] Status never shown by colour alone
- [ ] Visible focus style on every interactive element
- [ ] Tap targets ≥ 44px on mobile
- [ ] Images have `alt` text; decorative emoji have `aria-hidden="true"`
- [ ] Works at 360px wide with no sideways scrolling
