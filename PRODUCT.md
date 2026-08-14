# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Register

brand

## Users

Two primary audiences, both confirmed from the captured sign-in flow's account-type choice:

1. **Small-business owners/operators** managing their own books on QuickBooks Online — the default-selected account type.
2. **Accountants and bookkeepers** managing client books via QuickBooks Online Accountant.

The captured page targets the "Global" / Rest-of-World locale (en-ROW), a distinct audience from the US product.

## Product Purpose

Cloud accounting software for small businesses. The sign-in page itself promotes three headline capabilities even before authentication: automated bank-transaction tracking, fast professional invoicing, and effortless expense tracking. Success on this specific page is a fast, trustworthy path to the product — not a marketing conversion; the visitor is already a customer or prospect who knows the destination.

## Positioning

Automation and speed applied to routine bookkeeping tasks (bank feeds, invoicing, expense capture) — not a unique mechanism claim, a category-standard cloud-accounting promise executed with polish and reliability signals (TRUSTe verification, full legal/trademark transparency).

## Operating Context

This is the authentication gateway for the broader quickbooks.intuit.com marketing site. It hands off to a separate origin (`app.qbo.intuit.com` for business owners, `qbo.intuit.com` for accountants) on successful action. Full site nav and footer persist here — this product does not use a stripped-down "focus mode" login shell, and the redesign preserves that choice (see Brand Commitments).

## Capabilities and Constraints

- Two account types are distinguished at sign-in (QuickBooks Online business vs. Accountant) via a radio choice, defaulting to the business option.
- A persistent live-chat widget ("talk to an expert") and a side-anchored feedback tab are both considered standing support channels on this page, not marketing add-ons — preserve both.
- Region/locale selector (flag + language) is present in the header; behavior on interaction was not observed in this capture.

## Brand Commitments

- Brand name: **QuickBooks**, product of **Intuit** — kept as two distinct wordmarks in the footer lockup, never merged into one.
- Brand mark color: green (`#2CA01C`).
- Full site navigation and footer persist on this narrow-task (authentication) page — do not strip to a minimal login shell.
- Legal/trust transparency is binding, non-negotiable footer content: TRUSTe/TrustArc verified-privacy badge, full trademark notice, and Legal / Privacy / Security / Compliance links.
- Existing IA verbs and account-type labels ("QuickBooks Online", "QuickBooks Online Accountant", "Continue to sign in") are reused verbatim per IA-priority preservation — see Design Principles below.

## Anti-references

- Not a generic 2026 SaaS landing-page silhouette (oversized display hero + two-button CTA pair + sticky nav + serial-marker footer) — this is a sign-in utility page wearing marketing chrome, not a marketing page pretending to be a product.
- Not a minimal, chrome-stripped auth screen (Okta/Auth0-style centered card on empty background) — the brand's own promotional context (promo tiles, nav, footer) is a confirmed brand commitment, not a legacy accident to remove.

## Design Principles

1. **Sign-in stays the first, most prominent action** — the redesign may restructure the promo tiles and footer density, but the authentication path never gets buried below marketing content or a competing header CTA (Improvements #2).
2. **One design idea connects utility and value** — the sign-in card and the promo carousel should read as one composition, not two independently-styled blocks stitched together (Improvements #4).
3. **Commit to one token generation** — resolve the legacy/web-refresh token split observed in the captured CSS by picking the newer generation and applying it uniformly (Improvements #3).
4. **Trust signals get their own visual zone** — legal/compliance content in the footer is differentiated from utility navigation, not buried at the bottom of an undifferentiated link wall (Improvements #5).
5. **Every icon and logo is labeled** — no informational image ships without descriptive alt text (Improvements #1).

## Evidence on Hand

- `stardust/current/pages/global-login.json` — full captured content, headings, CTAs, media inventory (54 images).
- `stardust/current/assets/screenshots/global-login.png` — full-page screenshot.
- `stardust/current/assets/logo.svg`, `stardust/current/assets/favicon.png` — extracted brand assets.
- No customer testimonials, pricing, or case studies present on this page — none should be fabricated; other site pages were not captured (single-page extraction scope).

## Accessibility & Inclusion

Alt-text coverage is a named, confirmed gap (Improvements #1) — the redesign must not carry forward the 67% empty-alt rate on informational images. No other accessibility requirement was established beyond WCAG AA baseline (impeccable default).
