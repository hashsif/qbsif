---
name: QuickBooks (Global) — Redesign Target
description: Brand-faithful modernization of QuickBooks' global sign-in surface — same palette and type, resolved token generation, tighter hierarchy
colors:
  primary-green: "#2CA01C"
  accent-green-bright: "#0FD46C"
  accent-teal: "#00D7D7"
  surface-dark-brand: "#0D333F"
  surface: "#FFFFFF"
  surface-warm-neutral: "#F7F8F3"
  text-primary: "#000000"
  text-secondary: "#393A3D"
  text-on-dark: "#FFFFFF"
  text-muted: "#8D9096"
  link: "#0000EE"
  surface-dark-brand-hover: "#0a2732"
typography:
  body:
    fontFamily: "\"AvenirNext forINTUIT\", Helvetica, Arial, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: 1.5
  display:
    fontFamily: "\"AvenirNext forINTUIT\", Avenir, Helvetica, Arial, sans-serif"
    fontWeight: 700
    fontSize: "clamp(28px, 4vw, 40px)"
    lineHeight: 1.15
  title:
    fontFamily: "\"AvenirNext forINTUIT\", Avenir, Helvetica, Arial, sans-serif"
    fontWeight: 700
    fontSize: "22px"
    lineHeight: 1.25
  label:
    fontFamily: "\"AvenirNext forINTUIT\", Helvetica, Arial, sans-serif"
    fontWeight: 700
    fontSize: "12px"
    letterSpacing: "0.5px"
rounded:
  sm: "4px"
  md: "8px"
  pill: "40px"
  circle: "50%"
spacing:
  sectionPadding:
    desktop: "64px"
    tablet: "48px"
    mobile: "32px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.surface-dark-brand}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "#0a2732"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.surface-dark-brand}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
  badge:
    backgroundColor: "{colors.surface-warm-neutral}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
  link:
    textColor: "{colors.link}"
---

# Design System: QuickBooks (Global) — Redesign Target

## Overview

**Creative North Star: "The Resolved Refresh"**

This is a **brand-faithful modernization**, not a rebrand. QuickBooks' green/navy/teal identity, its AvenirNext forINTUIT typeface, and its bounded-color-block visual language all carry forward unchanged — the redesign resolves what the captured site left unresolved: two competing token generations, a fragmented sign-in/promo relationship, thin alt-text coverage, and an undifferentiated footer. The site already knows what it looks like; this redesign finishes the thought.

Palette and type are pinned to the captured brand surface (`_brand-extraction.json`); this file does not introduce a new hue or typeface. What moves is craft: one token generation committed to, one compositional idea connecting the utility action to the value proposition, and accessibility brought up to the standard the brand's trust signals (TRUSTe badge, full legal transparency) already claim.

**Key Characteristics:**
- Same palette, same type, same bounded-color-block motif language as the captured site
- One design idea ties the sign-in card to the promo carousel, replacing the current hard visual break
- Legacy and web-refresh CSS token generations resolved to one (the newer `--web-refresh-*` ramp)
- Footer restructured into clearly separated utility-navigation and trust-signal zones
- 100% of informational icons and logos carry descriptive alt text

## Colors

Same palette as the captured site, unchanged. Character: green/teal/navy identity system on a white/near-black neutral base, brand color always bounded inside rounded-rect blocks, never spanning the page canvas.

### Primary
- **QuickBooks Green** (`#2CA01C`): brand mark color — logo glyphs, and now consistently the accent for primary confirmations/success states across resolved components.
- **Bright Signal Green** (`#0FD46C`): promo-tile and CTA-adjacent accent.

### Secondary
- **Deep Brand Navy** (`#0D333F`): primary dark surface — promo tile background, primary button fill.
- **Signal Teal** (`#00D7D7`): secondary promo-tile accent.

### Neutral
- **Paper White** (`#FFFFFF`): page and card background — unchanged from captured.
- **Ink Black** (`#000000`): primary text.
- **Graphite** (`#393A3D`): secondary text.
- **Warm Off-White** (`#F7F8F3`): secondary surface tone, now used deliberately to separate the trust-signal footer zone from the utility-navigation zone (Design Principle 4).
- **Muted Grey** (`#8D9096`): tertiary/caption text.

### Named Rules
**The Bounded Color Rule.** Saturated brand color never spans the full page background — it appears only inside rounded-rect blocks. Inherited unchanged from the captured site.

**The One-Generation Rule.** Every component on this page resolves to the `--web-refresh-*` token generation. No component may reference a legacy `--color-blue-*` / `--color-green-*` custom property going forward — this is the structural fix for Improvements #3.

## Typography

**Body Font:** "AvenirNext forINTUIT", Helvetica, Arial, sans-serif (inherited, unchanged)
**Display Font:** "AvenirNext forINTUIT", Avenir, Helvetica, Arial, sans-serif (inherited, unchanged)

**Character:** Single humanist sans-serif family, unchanged from the captured site. Hierarchy is weight/size only.

### Hierarchy
- **Display** (700, clamp(28px, 4vw, 40px), 1.15): page-level headline ("Sign in to QuickBooks").
- **Title** (700, 22px, 1.25): promo-tile headlines.
- **Body** (400, 16px, 1.5): form labels, tile descriptions, footer link text.
- **Label** (700, 12px, 0.5px tracking): eyebrow/category labels distinguishing the footer's utility-nav vs. trust-signal zones.

### Named Rules
**The Single-Family Rule.** AvenirNext forINTUIT carries every text role. No second typeface is introduced — inherited unchanged from the captured site.

## Layout

Two-panel split preserved (sign-in card + promo carousel) per Design Principle 1 (sign-in stays the priority action), but the two panels now share a visual connector per Design Principle 2 rather than reading as independently-styled blocks — the specific mechanism (shared baseline grid, accent line, or promoted cross-reference) is a page-level composition decision for `prototype`, not fixed here. Section padding: 64px desktop / 48px tablet / 32px mobile (balanced density — brand register, multi-audience IA).

## Elevation & Depth

Unchanged from the captured site: flat by default, shadow reserved for floating/overlay UI only (chat widget). No new elevation introduced.

### Shadow Vocabulary
- **Floating overlay** (`box-shadow: rgba(0,0,0,0.15) 0px 10px 40px 0px, rgba(0,0,0,0.15) 0px 4px 4px 0px`): chat widget popup, inherited unchanged.

### Named Rules
**The Flat-Card Rule.** Primary content cards are distinguished by fill color and rounded corners, not shadow. Inherited unchanged.

## Shapes

8px corner radius remains dominant (cards, tiles, buttons), 4px for compact controls, 40px pill and 50% circle for the chat launcher and small badges — all inherited unchanged from the captured site.

## Components

### Buttons
- **Shape:** 8px rounded corners (unchanged).
- **Primary:** dark navy fill (`#0D333F`), white text — now resolved to the web-refresh token generation exclusively.
- **Secondary:** white-on-dark or dark-on-tint depending on host tile, following tile background for contrast (unchanged pattern).
- **Hover/Focus:** primary darkens ~15% on hover; focus-visible gets a 2px green (`#0FD46C`) outline with 2px offset — new, since the captured page had no observed focus treatment.

### Cards / Containers
- **Corner Style:** 8px (unchanged).
- **Background:** white (sign-in card) or single saturated brand color per tile (unchanged).
- **Shadow Strategy:** none (see Elevation & Depth).

### Inputs / Fields
- **Style:** minimal stroke, 4px radius, white background (extending the captured pattern, which had no fields beyond the radio choice).
- **Focus:** 2px green outline, matching button focus treatment for consistency.

### Navigation
- **Style:** horizontal top nav, white background, unchanged from captured — region selector and Login control retained, but the Login control is now visually subordinated to ghost/text-only styling on this specific page since the sign-in card below is the primary action (Improvements #2; deployment detail lives in the page shape brief).
- **Footer:** restructured into two visually distinct zones per Design Principle 4 — utility navigation (product/feature links, warm off-white band) and trust signals (legal, security, compliance, TRUSTe badge — near-black band with clearly higher contrast treatment). Exact column layout is a page-level decision.

### Floating Chat Launcher (signature component)
Unchanged: circular, brand-green, fixed bottom-right, expands into a greeting card. This is the page's signature interactive element and is preserved per signature-preservation rules.

## Do's and Don'ts

### Do:
- **Do** keep the exact captured palette and typeface — this is a brand-faithful modernization, not a rebrand.
- **Do** resolve every component to the `--web-refresh-*` token generation; treat legacy tokens as deprecated on this page.
- **Do** label every informational icon and logo with descriptive alt text — no exceptions for icon-sized images.
- **Do** keep the sign-in action as the first, most prominent interactive element on the page.

### Don't:
- **Don't** introduce a second typeface family or a color outside the captured palette.
- **Don't** strip the page to a minimal centered-card auth shell — the promotional context (nav, tiles, footer) is a confirmed brand commitment.
- **Don't** let the header's Login control visually compete with the page's own sign-in card.
- **Don't** apply drop shadows to primary content cards — elevation stays color-driven, not shadow-driven.
