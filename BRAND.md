# CCS Brand Design System — v2

A practical reference for the visual language of the CCS website. Every value
in this document is pulled directly from the production design — not invented.
Use this as the source of truth when extending the site, building a deck, a
proposal template, or any branded artifact.

**Source files:**
- Color, type, and component values: [`components/designs/OptionH.tsx`](components/designs/OptionH.tsx) (the live design — "Version B")
- Alternate cream/serif treatment: [`components/designs/OptionC.tsx`](components/designs/OptionC.tsx) ("Version A" — togglable from the bottom switcher for comparison; not the primary direction)
- Font loading: [`app/layout.tsx`](app/layout.tsx)
- Logo and photography: [`public/`](public/)

**Companion doc:** The CCS Brand Voice Guide v2.1 (lives in OneDrive at
`CCS Environment > 04 - Marketing & Content > Brand Voice System`) covers
language, tone, vocabulary, and forbidden words. This doc covers visuals only.

**Version note:** v1 of this doc (May 17) documented Version A. Version B
became the team's chosen direction on May 18 and is now the default landing
on the live URL. This rewrite reflects that. See §11 for what changed.

---

## 1. Foundation

CCS is a boutique consulting house. The visual system reflects that
positioning, with two opposing weights working together:

- **Confident, not loud.** Restrained palette, generous whitespace, real
  Austin photography. No stock illustrations, no glowing CTAs, no
  testimonial badges.
- **Editorial in voice, dimensional in presentation.** Dark navy hero
  sections framed against bone/cream content sections. Sharp geometry on
  cards and buttons. A teal accent that picks up the wave motif in the
  logo without overwhelming it.
- **Anchored to Austin.** Real skyline imagery in the hero. The brand
  doesn't try to look like it could be anywhere.

If something looks like a SaaS landing page or an AI-startup deck, it's
probably wrong. The North Star is *editorial advisory* — closer to a
Bloomberg Businessweek feature than a tech homepage.

---

## 2. Color palette

The palette uses three families: **navy** (the brand spine), **bone** (warm
neutral backgrounds and surfaces), and **teal** (the accent that links the
body design back to the logo). Orange appears in the logo and once on the
home stat strip; otherwise it stays in the logo.

### Navy scale

| Token | Hex | Usage |
|---|---|---|
| **Navy 900** | `#0E141C` | Deepest navy. Hero backdrop, footer, lock screen, "Let's Start" CTA section. |
| **Navy 800** | `#1B2838` | Primary brand navy — the logo navy. Buttons, hero gradient overlay, dark section backgrounds, headings on dark surfaces. |
| **Navy 700** | `#2A3A4F` | Button hover state. |
| **Navy 500** | `#3F4E66` | Reserved for future depth needs. |
| **Navy 400** | `#5E6F86` | Step counters on light sections, contact-card eyebrow labels. |
| **Navy 300** | `#92A2B9` | Light-on-dark text in footer columns. |
| **Navy 200** | `#B6C3D5` | Lede paragraphs on navy sections, "Let's Start" body copy. |

### Bone scale (warm cream surfaces)

| Token | Hex | Usage |
|---|---|---|
| **Bone 0** | `#FFFFFF` | Card surfaces only. |
| **Bone 50** | `#FAF8F4` | Default page background. Warm off-white. Never use pure `#FFFFFF` for the page. |
| **Bone 100** | `#F2EEE7` | Alternating section background for visual rhythm (e.g. Partnering for Success, Who It's For). |

### Teal accent (links body design to logo waves)

| Token | Hex | Usage |
|---|---|---|
| **Teal 800** | `#1B5F63` | Reserved. |
| **Teal 700** | `#247479` | Email links, "Learn More" CTAs on light surfaces, role labels on contact cards. |
| **Teal 500** | `#3AAFB5` | Section header rules on navy sections, phase bullets on AI page, input focus state. The exact CCS logo teal. |
| **Teal 400** | `#5AC3C9` | Reserved. |
| **Teal 300** | `#8ED6D9` | Eyebrows on navy backgrounds, footer column labels, hero eyebrow. |

### Orange (logo only, with one home-page exception)

| Token | Hex | Usage |
|---|---|---|
| **Orange 500** | `#E8943A` | The "100%" referral-driven stat on the home stat strip — one accent moment. Otherwise lives only in the logo. |

### Neutrals (text)

| Token | Hex | Usage |
|---|---|---|
| **fg** | `#0E141C` | Primary body text and headings on light surfaces. |
| **fg muted** | `#4A5563` | Secondary body copy, descriptions, list bodies. |
| **fg soft** | `#8A93A0` | Captions, metadata, service descriptions on contact cards. |

### Hairlines

| Token | Value | Usage |
|---|---|---|
| **border** | `rgba(27,40,56,0.10)` | Default card border, section dividers on light surfaces. |
| **border on navy** | `rgba(255,255,255,0.10)` | Dividers between engagement steps on navy sections, footer top border. |

### What *not* to use

- Pure black `#000000` for text — use `fg` `#0E141C` (slightly warmer).
- Bronze, terracotta, sage, or any other accent color — those belonged to
  earlier exploratory directions (Version A still uses bronze, by design).
- Excessive teal — it's a punctuation color. The site should still read
  navy + bone first, teal second.
- The orange `#E8943A` for anything beyond the one home stat or the logo.

---

## 3. Typography

The site uses **Inter for everything**, with **Petrona** reserved for one
specific editorial moment: the italic pull-quote on the home page (Tom's
"we self-select" voice quote). This is intentional — the boutique advisory
feel comes from one confident sans, not a constant serif/sans dance.

### Body and display — Inter

- **Family stack:** `'Inter', system-ui, sans-serif`
- **Loaded weights:** 300, 400, 500, 600, 700
- **Use for:** Everything. Hero headlines, section titles, body, navigation,
  buttons, captions, eyebrows.
- **Why:** Inter is the most readable workhorse sans-serif available. The
  weight range gives editorial hierarchy without needing a second face.

### Italic editorial — Petrona

- **Family stack:** `'Petrona', Georgia, serif`
- **Loaded weights:** 400 italic, 500 italic (regular weights also loaded
  but unused in v2).
- **Use for:** Italic pull-quote on the home page (currently Tom's "we
  self-select a small number of clients" line). Reserved for editorial
  moments where the voice shifts from declarative to reflective.

### Treatment rules

- **Default body weight: 400.** Use 300 only for very small captions in
  light contexts.
- **Headlines: 600 weight, no `<strong>` accent words.** Version B
  doesn't use the "regular + bold word" rhythm Version A relies on —
  headlines read as one confident block.
- **Letter spacing:**
  - Tighten headlines: `-0.018em` to `-0.022em`
  - Loosen uppercase eyebrows: `0.22em` (and `letter-spacing` alone does
    the spaced-caps work — no manual character insertion)
- **Line height:** 1.04 for hero H1, 1.1 for section H2, 1.55–1.6 for body.

---

## 4. Type scale

Sizes use `clamp()` where they need to scale fluidly. Values below are the
desktop target; mobile values cap smaller (see §5).

| Element | Desktop | Mobile | Weight | Use |
|---|---|---|---|---|
| **Hero H1 (home)** | `clamp(2.75rem, 6vw, 4.5rem)` (44–72px) | `2.25rem` (36px) | 600 | Home hero headline |
| **Hero H1 (sub-pages)** | `clamp(2.75rem, 6vw, 4.5rem)` | `2.25rem` | 600 | Coaching, Consulting, Talent, AI, About hero headlines |
| **Section H2** | `2.5rem` (40px) | `1.85rem` (~29px) | 600 | Major section titles within a page |
| **Section H3 (cards)** | `1.5rem` (24px) | `1.3rem` (~20px) | 600 | Pillar card titles, contact card names |
| **Body lede** | `1.0625rem` (17px) | `1rem` (16px) | 400 | Section description paragraphs |
| **Body** | `0.875–0.95rem` (14–15px) | same | 400 | Card body, descriptions |
| **Caption** | `0.75–0.78rem` (12–12.5px) | same | 400 | Metadata, services line on contact cards |
| **Eyebrow** | `0.7rem` (11px) | same | 600 uppercase, `0.22em` tracking | Above every section header and inside cards |
| **Stat — big number** | `2.5rem` (40px) | `1.75rem` (28px) | 600, tabular-nums | The 4-column stat strip |

---

## 5. Layout and spacing

### Container

- **Max width:** `1200px`. The contact page narrows visually inside the
  two-column grid but uses the same container.
- **Horizontal padding:** `1.5rem` desktop, `1.25rem` mobile.

### Section vertical rhythm

- **Default section padding (desktop):** `5rem 0`
- **Hero section:** flex-centered with `5rem 1.5rem 4rem` padding (4rem
  mobile top), `minHeight: 640px` desktop / `460px` mobile.
- **Mobile section padding:** `3rem 0`
- **"Let's Start" CTA section:** `5rem 1.5rem` desktop / `3rem 1.25rem` mobile.

### Section background alternation

Pages alternate three section backgrounds to create visual rhythm:

```
hero            navy900 with photo backdrop + 105° navy gradient
section A       bone50 (warm cream — default)
section B       bone100 (slightly darker bone — for contrast)
section C       navy800 (occasional dark sections — e.g. How We Engage,
                Our Process — for emphasis)
Let's Start     navy800 (closes every page)
footer          navy900 (always)
```

### Grid patterns

- **Stat strip:** `repeat(4, 1fr)` desktop / `1fr 1fr` mobile, with hairline
  vertical dividers between items.
- **Pillars (4 service cards):** `1fr 1fr` desktop / `1fr` mobile.
- **Long lists (offerings, who-it's-for):** `1fr 1fr` desktop with `2rem 3rem`
  gap / `1fr` mobile.
- **Two-column (intro):** `1fr 1fr` with `4rem` gap / single column mobile.
- **Engagement steps:** `80px 220px 1fr` desktop / `60px 1fr` mobile
  (title and body collapse below counter on mobile).

### Mobile breakpoint

- **Breakpoint:** `768px` via the `useIsMobile` hook ([hooks/useIsMobile.ts](hooks/useIsMobile.ts)).
- Responsive behavior uses inline ternary expressions (`m ? mobile : desktop`),
  never CSS media queries — keeps each component self-documenting.

---

## 6. Components

### Buttons

**Primary on light surface (navy filled):**

```
padding: 0.85rem 1.4rem
fontSize: 0.85rem
fontWeight: 500
borderRadius: 2px  (sharp, not rounded)
background: #1B2838 (navy 800)
color: #FAF8F4 (bone 50)
letterSpacing: 0.005em
hover: background → #2A3A4F (navy 700)
```

**Primary on navy surface (bone filled):**

```
Same shape, inverted colors:
background: #FAF8F4 (bone 50)
color: #0E141C (navy 900)
hover: background → #F2EEE7 (bone 100)
```

**Secondary (outlined):**

```
background: transparent
color: #1B2838 (or #FAF8F4 on navy)
border: 1px solid #1B2838 (or #FAF8F4 on navy)
hover: background → rgba(27,40,56,0.04) light / rgba(255,255,255,0.08) on navy
```

Primary is the main CTA on every page (e.g. "Schedule a Discovery Call",
"Contact Us"). Secondary is the alternate ("See How We Work").

### Cards

**Default (white surface on bone background):**

```
background: #FFFFFF (bone 0)
border: 1px solid rgba(27,40,56,0.10)
borderRadius: 8px
padding: 1.75rem 2rem
```

**Pillar card hover (used on home four-pillar grid):**

```
transform: translateY(-2px)
boxShadow: 0 2px 6px rgba(15,25,40,0.06), 0 12px 32px rgba(15,25,40,0.10)
transition: 0.2s ease
```

### Hero

The defining element of Version B. Always:

- **Background:** photo (`HomePageBackground.jpg` for home, page-specific
  for sub-pages) with `filter: saturate(0.85)`
- **Overlay:** `linear-gradient(105deg, rgba(14,20,28,0.82) 0%, rgba(14,20,28,0.55) 45%, rgba(14,20,28,0.2) 100%)` — heavier left where the text lives, lighter right to let the photo breathe
- **Eyebrow:** teal 300, spaced-caps, `0.22em` letter spacing
- **Headline:** Inter 600, white, tight letter spacing
- **Lede:** 17–18px, navy 200 (light blue-gray)
- **CTAs:** stack on mobile, row on desktop

### Stat strip

Sits directly below the hero on the home page only. 4 columns, hairline
vertical dividers between items, big number + small uppercase label.

```
Number: 40px Inter 600, navy 800 (orange 500 for the highlighted one)
Label: 11px Inter 600, fg soft, 0.16em letter spacing, uppercase
Border between: 1px solid border, paddingLeft 1.5rem
```

### Eyebrow (spaced-caps)

The most distinctive recurring element. Used above every section header,
inside cards, in footer columns:

```
fontSize: 0.7rem
fontWeight: 600
letterSpacing: 0.22em
textTransform: uppercase
color: #92A2B9 (navy 400) on light surfaces
color: #8ED6D9 (teal 300) on navy surfaces
```

**Important:** Don't manually insert spaces between characters. The CSS
`letter-spacing: 0.22em` does the spaced-caps work cleanly. Manual spacing
plus letter-spacing blurs word boundaries.

### Section header

A consistent unit used to open every content section:

```
1. Eyebrow (one of the above)
2. H2 title (Inter 600, 40px, line-height 1.1, tight tracking)
3. Lede paragraph (17px, fg muted, max-width 600px)
4. 36×2px rule beneath (navy 800 on light surfaces, teal 500 on navy)
```

### Numbered tags

Used on pillar cards and AI phase cards:

```
fontFamily: Inter
fontSize: 0.75rem
fontWeight: 500
color: #247479 (teal 700)
letterSpacing: 0.06em
fontVariantNumeric: tabular-nums
format: "01", "02", "03", "04"
```

### Engagement steps

Horizontal rows used for "How We Engage" and "Our Process" sections.
Each step is a 3-column grid (counter | title | body) separated by
hairline top borders. On mobile collapses to 2 columns (counter on left,
title and body stacked on right).

### "Let's Start" CTA section

Closes every page. Navy 800 full-bleed section with:

- Teal 300 eyebrow: "LET'S START"
- Large headline (52px Inter 600)
- Lede in navy 200
- Two buttons: bone-on-navy primary + ghost secondary

### Contact cards

The Tom/Brent cards on the Contact page open Outlook with prefilled emails.
Each card is a clickable `<a href="mailto:...">` with hover lift, and
contains a labeled "Email Tom →" / "Email Brent →" button at the foot so
the affordance is obvious.

---

## 7. Photography

### Local assets

| File | Use |
|---|---|
| `HomePageBackground.jpg` | Home hero — Austin skyline + Colorado River. Also used on lock screen and several sub-pages where a generic Austin shot fits. |
| `ExecutiveCoachingImage.jpg` | Coaching page hero — Austin skyline in blue/dusk tones. |
| `TalentManagementImage.jpg` | Talent page hero — ocean sunset. |
| `TomTriolo.jpg` | Tom's headshot — About page, Team modal. |
| `logo.png` | Standard CCS logo (navy circle with bone background). |
| `logo-transparent.png` | Transparent-background variant. Used on navy surfaces (lock screen, footer) so the navy circle sits cleanly. |
| `logo-alt.png` / `logo-alt2.png` | Earlier logo variants. |
| `apex-logo-full.png` | Apex CAS partner logo for the Powerful Partners section. |
| `brainard-logo.png` | Brainard Strategy partner logo for the Powerful Partners section. |

### Hero treatment

Hero photos are full-bleed (NOT masked to the right side like Version A
was). The diagonal navy gradient overlay carries the legibility. The
recipe:

```
filter on photo:    saturate(0.85)
gradient overlay:   linear-gradient(105deg,
                      rgba(14,20,28,0.82) 0%,
                      rgba(14,20,28,0.55) 45%,
                      rgba(14,20,28,0.2) 100%)
```

This produces a darkened upper-left (where headline + lede live) fading
to mostly-visible photo on the lower-right.

### Photography rules

- **Always real photography**, never stock illustration or 3D renders.
- **Austin-anchored where possible.** The brand is rooted in Austin
  since 2010; local imagery reinforces "trusted advisor with deep roots."
- **The gradient overlay is non-negotiable for hero shots.** It does the
  text-legibility work that lets the photo breathe.
- **No people stock photos.** Use real headshots only (Tom, Brent). No
  generic suit-and-tie boardroom imagery.

---

## 8. Logo

The CCS logo is a navy circle with white "CCS" lettering, teal waves below,
and an orange sunrise above.

| Variant | Path | Use |
|---|---|---|
| `logo.png` | `public/logo.png` | Primary. Use on bone/cream/white backgrounds. |
| `logo-transparent.png` | `public/logo-transparent.png` | Transparent background. Use on navy backgrounds (lock screen, footer, dark hero overlays). |

### Usage

- **Always on cream, white, or navy.** No tinted backgrounds.
- **Minimum size:** 32×32 px in the nav, 24×24 px in the footer.
- **Spacing:** Allow at least the height of the logo as breathing room.
- **Never recolor.** The teal waves and orange sunrise are trademark
  elements — don't tint or recompose.

### Logo colors (reference only)

| | Hex |
|---|---|
| Navy circle | `#1B2838` (= navy 800) |
| Teal waves | `#3AAFB5` (= teal 500) |
| Orange sunrise | `#E8943A` (= orange 500) |
| White lettering | `#FFFFFF` |

The teal and orange in the logo are echoed in the body design — teal as
the active accent, orange reserved for the one home stat highlight and
the logo itself.

---

## 9. Voice

This doc covers visuals only. For language, tone, vocabulary, signature
phrases, and forbidden words, see the locked **CCS Brand Voice Guide v2.1**
in OneDrive at:

`CCS Environment > 04 - Marketing & Content > Brand Voice System > 01 - CCS Brand Voice v2.1.md`

Key reminders from the voice guide that affect visual decisions:

- **No buzzwords, no consulting-speak** — that includes visual buzzwords.
  No "innovation labs" gradient meshes, no abstract 3D shapes, no AI
  illustration tropes.
- **Client names are private.** Never put a client logo on the site
  without written approval (voice guide §6). The Powerful Partners
  section is for collaborators, not clients.
- **Outcomes over deliverables.** Visual emphasis reinforces outcomes,
  not process. Lead with the result.

---

## 10. Quick reference card

```
PAGE BACKGROUND       #FAF8F4  (bone 50)
PRIMARY NAVY          #1B2838  (= logo navy = navy 800)
DEEPEST NAVY          #0E141C  (hero, footer, lock screen)
ACCENT (active)       #247479 teal 700 / #8ED6D9 teal 300 on navy
BODY TEXT             #0E141C  (fg)
BODY TEXT MUTED       #4A5563  (fg muted)
CAPTIONS              #8A93A0  (fg soft)
HAIRLINES             rgba(27,40,56,0.10)

FONT (everywhere)     Inter, weights 300–700
FONT (italic quotes)  Petrona, 400/500 italic

CONTAINER MAX         1200px
SECTION PADDING       5rem 0 desktop / 3rem 0 mobile
HERO MIN-HEIGHT       640px desktop / 460px mobile
MOBILE BREAKPOINT     768px

HERO H1               clamp(2.75rem, 6vw, 4.5rem) · 600 weight · -0.022em tracking
SECTION H2            2.5rem · 600 weight · -0.018em tracking
EYEBROW               0.7rem · 600 · uppercase · 0.22em tracking
BODY                  0.875–0.95rem · 400 · 1.55–1.6 line height

BUTTON RADIUS         2px (sharp — NOT rounded)
CARD RADIUS           8px
HERO GRADIENT         linear-gradient(105deg,
                        rgba(14,20,28,0.82),
                        rgba(14,20,28,0.55) 45%,
                        rgba(14,20,28,0.2))
```

---

## 11. What changed from v1

v1 (May 17) of this doc documented Version A (cream + Petrona display +
bronze accent + multi-page editorial). v2 (May 18) reflects Version B,
which became the team's chosen direction. The key shifts:

| | v1 (Version A) | v2 (Version B) |
|---|---|---|
| Display font | Petrona serif | Inter sans |
| Body font | Inter sans | Inter sans (same) |
| Hero treatment | Cream-washed photo on right side | Full-bleed navy with diagonal gradient overlay |
| Accent color | Bronze `#B07C42` | Teal `#247479` / `#8ED6D9` |
| Card radius | 4–12px | 8px (sharper) |
| Button radius | 8px | 2px (sharp) |
| Eyebrow style | Bronze, normal caps | Spaced-caps with letter-spacing 0.22em |
| Page rhythm | Warm cream throughout | Alternating bone/cream and navy sections |
| Closing CTA | Cream `CtaBanner` | Navy "Let's Start" section |

Version A is still togglable from the bottom switcher for side-by-side
comparison but is not the default. If anything needs to fall back to
Version A's vocabulary (e.g. for a warm proposal cover), use the patterns
in OptionC.tsx as the reference.

---

*Last updated: 2026-05-18. When the design evolves, update this doc.*
