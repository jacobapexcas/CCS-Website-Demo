# CCS Brand Design System

A practical reference for the visual language of the CCS website. Every value
in this document is pulled directly from the production design — not invented.
Use this as the source of truth when extending the site, building a deck, a
proposal template, or any branded artifact.

**Source files:**
- Color, type, and component values: [`components/designs/OptionC.tsx`](components/designs/OptionC.tsx)
- Font loading: [`app/layout.tsx`](app/layout.tsx)
- Logo and photography: [`public/`](public/)

**Companion doc:** The CCS Brand Voice Guide v2.1 (lives in your OneDrive
`CCS Environment > 04 - Marketing & Content > Brand Voice System`) covers
language, tone, vocabulary, and forbidden words. This doc covers the
visual side only.

---

## 1. Foundation

CCS is a boutique consulting house. The visual system reflects that
positioning:

- **Restrained, not loud.** Limited palette, generous whitespace, refined
  typography. Closer to a McKinsey or Bain advisory than a tech startup.
- **Warm, not cold.** Cream background instead of pure white. Bronze accent
  instead of bright orange. Human, not corporate.
- **Editorial, not promotional.** Long-form serif headlines, real Austin
  photography, no stock imagery, no testimonial badges, no glowing CTAs.

Every visual choice should support the "trusted advisor" feel. If something
looks like it belongs on a SaaS landing page, it's probably wrong.

---

## 2. Color palette

### Primary

| Role | Hex | Usage |
|---|---|---|
| **Navy** | `#1B2838` | Primary brand color. Use for headings, buttons, dark sections, the logo. The exact CCS logo navy. |
| **Cream** | `#F8F4ED` | Default page background. Warm off-white — never use pure `#FFFFFF` for the page. |
| **White** | `#FFFFFF` | Card surfaces only — to separate content from the cream page background. |

### Accents

| Role | Hex | Usage |
|---|---|---|
| **Bronze** | `#B07C42` | Section overlines, italic highlights in headings, "Learn More →" links, accent rules. Reserved for visual punctuation — never use bronze for long-form text. |
| **Warm surface** | `#FCF9F3` | Alternate surface for layered sections (rarely used). |

### Neutrals (text)

| Role | Hex | Usage |
|---|---|---|
| **Ink** | `#0F1820` | Body text and headings — slightly deeper than navy for stronger contrast on cream. |
| **Ink soft** | `#3A4554` | Secondary body text and descriptions. |
| **Muted** | `#8A93A0` | Small captions, footer text, "Service Line" labels, deemphasized metadata. |

### Hairlines and tints

| Role | Value | Usage |
|---|---|---|
| **Warm border** | `rgba(27,40,56,0.10)` | Default card borders, section dividers. Hairline weight (1px). |
| **Warm border strong** | `rgba(27,40,56,0.16)` | Heavier dividers for emphasis. |
| **Navy tint light** | `rgba(27,40,56,0.06)` | Subtle navy backgrounds — hero pills, badge backgrounds. |
| **Navy tint mid** | `rgba(27,40,56,0.18)` | Underline accent under highlighted headline words. |
| **Bronze tint light** | `rgba(176,124,66,0.08)` | Subtle bronze backgrounds. |
| **Bronze tint mid** | `rgba(176,124,66,0.10)` | Slightly heavier bronze backgrounds. |

### What *not* to use

- The bright `#E8943A` from the logo orange — too saturated for editorial
  use. Use the muted bronze `#B07C42` instead. Orange lives only in the
  logo itself.
- The teal `#3AAFB5` from the logo waves — too vibrant. Avoid in body design.
- Any green, terracotta, sage, or purple. Those were earlier exploratory
  palettes and are no longer part of the brand.
- Pure `#000000` for text. Use `#0F1820` (ink) instead — slightly warmer.

---

## 3. Typography

Two fonts, both Google Fonts. These match what Tom uses in his Change
Management presentation deck, so the website and his thought-leadership
read as one voice.

### Display — Petrona

- **Family stack:** `'Petrona', Georgia, serif`
- **Loaded weights:** 400, 500, 600, 700, 800 (plus italic 400/500)
- **Use for:** All headlines (H1, H2, H3), section titles, card titles,
  italic emphasis inside headlines, numbered tags (e.g., "01"), values names.
- **Why:** Petrona is a confident transitional serif with strong, modern
  proportions — no flared serifs or quirks. Reads as boutique editorial.

### Body — Inter

- **Family stack:** `'Inter', system-ui, sans-serif`
- **Loaded weights:** 300, 400, 500, 600, 700
- **Use for:** All body copy, paragraph text, button labels, navigation,
  form fields, captions, footers.
- **Why:** Inter is the most readable workhorse sans-serif available. Strong
  legibility at every size. Pairs cleanly with serif display fonts without
  competing.

### Treatment rules

- **Default body weight: 400.** Use 300 only for very small captions in
  light contexts where the design has space.
- **Headline weight: 400 with `<strong>` at 600 for accent words.** This
  produces the "regular + bold word" rhythm visible across the site.
- **No `font-weight: 700` (full bold) for headlines.** Use 600 instead.
  Petrona at 800 is reserved for very small accent moments only.
- **Line height:** 1.1–1.2 for headlines, 1.7–1.85 for body, 1.6 for captions.
- **Letter spacing:** Tighten headlines (`-0.015em` to `-0.02em`). Loosen
  uppercase overlines (`0.18em`–`0.22em`).

---

## 4. Type scale

Sizes use `clamp()` for fluid responsiveness — values below are the desktop
target.

| Element | Size | Weight | Use |
|---|---|---|---|
| **Hero H1** | `clamp(2.4rem, 5vw, 4.2rem)` (~38–67px) | 400 + 600 accents | Home page hero headline |
| **Page Hero H1** | `clamp(2rem, 4vw, 3.2rem)` (~32–51px) | 400 + 600 accents | Sub-page hero headlines (Coaching, Consulting, etc.) |
| **Section H2** | `clamp(1.8rem, 3.5vw, 2.8rem)` (~29–45px) | 400 + 600 accents | Major section titles within a page |
| **Sub-section H3** | `1.4rem` (22px) | 500 | Card titles, in-section headings |
| **H4** | `1.05rem` (17px) | 600 | Smaller card titles, list-item headings |
| **Body (default)** | `0.95–1.05rem` (15–17px) | 400 | Paragraphs, descriptions |
| **Body (small)** | `0.85–0.88rem` (14px) | 400 | Card body, secondary text |
| **Caption** | `0.78rem` (12.5px) | 400 | Metadata, attribution |
| **Overline** | `0.7rem` (11px) | 700 uppercase, `0.22em` tracking | Section labels above headlines ("Our Approach", "Coaching Outcomes") |
| **Micro label** | `0.62rem` (10px) | 700 uppercase, `0.2em` tracking | Tiny labels inside cards ("Service Line", "What We Deliver") |

---

## 5. Layout and spacing

### Container

- **Max width:** `1200px` (`1100px` for some narrower compositions like
  Contact and the Single-Page variant).
- **Horizontal padding:** `2rem` desktop, `1rem`–`1.5rem` mobile.

### Section vertical rhythm

- **Default section padding (desktop):** `5rem 0` (top and bottom).
- **Hero section:** `8rem 0 4rem` desktop, `5rem 1.5rem 3rem` mobile.
- **Mobile section padding:** `2.5rem 0`.

### Grid patterns

- **Two-column (intro):** `1fr 1.4fr` — overline + title on left, descriptive
  paragraph on right.
- **Four-column (features):** `repeat(4, 1fr)` desktop, `1fr` mobile.
- **Card grid:** `1fr 1fr` (or `repeat(2, 1fr)`) on desktop, single column
  on mobile.

### Mobile breakpoint

- **Breakpoint:** `768px` via the `useIsMobile` hook ([hooks/useIsMobile.ts](hooks/useIsMobile.ts)).
- All responsive behavior uses inline ternary expressions (`m ? mobile : desktop`),
  never CSS media queries.

---

## 6. Components

### Buttons

**Primary (navy filled):**

```
padding: 0.85rem 2rem
fontSize: 0.88rem
fontWeight: 600
borderRadius: 8px
background: #1B2838 (navy)
color: #FFFFFF
boxShadow: 0 6px 20px -8px rgba(27,40,56,0.4)
```

**Secondary (white outline):**

```
padding: 0.85rem 2rem
fontSize: 0.88rem
fontWeight: 600
borderRadius: 8px
background: #FFFFFF
color: #0F1820 (ink)
border: 1px solid rgba(27,40,56,0.10)
```

Use primary for the main CTA on every page ("Schedule a Discovery Call",
"Start a Coaching Engagement"). Use secondary for the alternate action
("See How We Work", "Our Approach").

### Cards

**Default card:**

```
background: #FFFFFF
border: 1px solid rgba(27,40,56,0.10)
borderRadius: 12px (use 4px for sharper "service line" cards)
padding: 1.75–2.5rem
```

**Hover state (service-line cards):**

```
borderColor: #1B2838 (navy)
transform: translateY(-3px)
boxShadow: 0 18px 50px -25px rgba(27,40,56,0.25)
transition: all 0.4s ease
```

### Hero pill (anchoring badge)

The "Driving Impactful Change Since 2010 · Austin, Texas" pill at the top
of the home hero:

```
display: inline-flex
padding: 0.45rem 1rem
borderRadius: 100px (fully rounded)
fontSize: 0.76rem
fontWeight: 600
background: rgba(27,40,56,0.06) (navy tint light)
color: #B07C42 (bronze)
gap: 0.6rem
```

Includes a tiny `#B07C42` dot to the left.

### Section overline

Use above every major section title:

```
fontSize: 0.7rem
letterSpacing: 0.22em
textTransform: uppercase
color: #B07C42 (bronze)
fontWeight: 700
marginBottom: 1rem
```

### Numbered tags (service cards)

Replaces the emoji icons that were removed for the boutique aesthetic:

```
fontFamily: 'Petrona', Georgia, serif
fontSize: 1rem
fontStyle: italic
fontWeight: 500
color: #B07C42 (bronze)
```

Followed by a 32px-wide horizontal hairline rule in bronze at 0.5 opacity,
then the "Service Line" micro-label.

---

## 7. Photography

### Local assets

| File | Use |
|---|---|
| `HomePageBackground.jpg` | Home hero — Austin skyline + Colorado River. The defining brand image. |
| `ExecutiveCoachingImage.jpg` | Coaching page hero — Austin skyline in blue/dusk tones. |
| `TalentManagementImage.jpg` | Talent page hero — ocean sunset. |
| `TomTriolo.jpg` | Tom's headshot — About page, Team modal. |
| `logo.png` / `logo-alt.png` / `logo-alt2.png` | Logo variants. |

### Hero treatment

Hero images are masked to the right side of the viewport with a horizontal
opacity gradient and overlaid with a cream wash (`rgba(248,244,237,0.95)` at
left, fading to `0.4` at right). This keeps navy headline text crisp while
grounding the page in real Austin imagery.

Image opacity: ~32% desktop, ~18% mobile.

### Photography rules

- **Always real photography**, never stock illustration or 3D renders.
- **Austin-anchored when possible.** The brand is rooted in Austin, Texas
  since 2010 — leaning into local imagery reinforces the "trusted advisor
  with deep roots" feel.
- **Subdued treatment.** Never let an image overpower the typography. The
  cream wash is non-negotiable for any hero image.
- **No people stock photos.** If you need a person, use Tom's or Brent's
  real headshot. Generic suit-and-tie boardroom stock photos undermine
  the boutique positioning.

---

## 8. Logo

The CCS logo is a navy circle with white "CCS" lettering, teal waves below,
and an orange sunrise above. Available as:

- `public/logo.png` — primary
- `public/logo-alt.png`, `public/logo-alt2.png` — variants

### Usage

- **Always on cream or white.** The logo's navy circle reads strongest on
  light backgrounds.
- **Minimum size:** 32×32 px in the nav, 24×24 px in the footer.
- **Spacing:** Allow at least the height of the logo as breathing room
  on all sides.
- **Never recolor.** The logo's teal waves and orange sunrise are part of
  the trademark — don't tint or recompose.

### Brand colors *in the logo* (reference only — see §2 for body design)

| | Hex |
|---|---|
| Navy circle | `#1B2838` |
| Teal waves | `#3AAFB5` |
| Orange sunrise | `#E8943A` |
| White lettering | `#FFFFFF` |

The teal and orange appear *in the logo* but are not used in the body
design system. Body design uses navy + cream + bronze.

---

## 9. Voice

This doc covers visuals only. For language, tone, vocabulary, signature
phrases, and forbidden words, see the locked **CCS Brand Voice Guide v2.1**
in your OneDrive at:

`CCS Environment > 04 - Marketing & Content > Brand Voice System > 01 - CCS Brand Voice v2.1.md`

Key reminders from the voice guide that affect visual decisions:

- **No buzzwords, no consulting-speak.** That includes visual buzzwords —
  no "innovation labs" gradient meshes, no abstract 3D shapes, no AI
  illustration tropes.
- **Names are private.** Never put a client logo on the site without
  written approval (§6 of the voice guide).
- **Outcomes over deliverables.** Visual emphasis should reinforce
  outcomes, not list deliverables. Lead with the result, not the process.

---

## 10. Quick reference card

For when you need a fast lookup:

```
Page background      #F8F4ED
Primary brand        #1B2838  (navy)
Accent               #B07C42  (bronze)
Body text            #0F1820  (ink)
Body text soft       #3A4554  (ink soft)
Captions             #8A93A0  (muted)
Hairlines            rgba(27,40,56,0.10)

Display font         Petrona, weights 400–700
Body font            Inter, weights 300–700

Container max        1200px
Section padding      5rem 0 desktop / 2.5rem 0 mobile
Mobile breakpoint    768px

Hero H1              clamp(2.4rem, 5vw, 4.2rem) · 400 + 600 accents
Section H2           clamp(1.8rem, 3.5vw, 2.8rem) · 400 + 600 accents
Overline             0.7rem · 700 · uppercase · 0.22em tracking · bronze
Body                 0.95–1.05rem · 400 · 1.7–1.85 line height
```

---

*Last updated: 2026-05-17. When the design evolves, update this doc.*
