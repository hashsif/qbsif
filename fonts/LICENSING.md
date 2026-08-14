# Font licensing

| File | Family shipped | Brand-intended family | Foundry / license | Status |
|---|---|---|---|---|
| `hanken-grotesk-variable.woff2` | Hanken Grotesk Variable | AvenirNext forINTUIT (proprietary, Intuit) | SIL OFL 1.1 (via Fontsource) | ✅ Redistributable — shipped as a substitute, not the real brand font |
| `hanken-grotesk-italic-variable.woff2` | Hanken Grotesk Variable (italic) | AvenirNext forINTUIT Italic | SIL OFL 1.1 (via Fontsource) | ✅ Redistributable |
| `roboto-*.woff2` | Roboto / Roboto Condensed | — (unused, boilerplate leftovers) | Apache 2.0 | Unused — safe to delete once confirmed no block references them |

## Why not the real brand font

"AvenirNext forINTUIT" is a proprietary Intuit-licensed font. It was not captured during
extraction (the single-page crawl of the login page did not hit the font-file capture
path), and even if it had been, this project holds no license to redistribute it.
Hanken Grotesk (SIL OFL 1.1, humanist grotesque, broadly similar proportions) was
self-hosted as the closest available redistributable substitute so the deployed page
still reads as a coherent, deliberate typographic choice rather than falling back to
an unstyled system font.

## Before this goes live for an actual Intuit property

Replace `fonts/hanken-grotesk-variable.woff2` (+ italic) with a properly licensed
"AvenirNext forINTUIT" webfont file, update the `@font-face` `src` in
`styles/fonts.css`, and remove this notice once done.

## Fallback calibration

No `size-adjust`/`ascent-override`/`descent-override` metric-override values were
computed for the `hanken-grotesk-fallback` face (see `styles/styles.css`) — computing
them requires decoding the woff2 with fontTools + the `brotli` Python extension, which
was not installed for this run. Instead the fallback face uses CSS
`font-size-adjust: from-font`, which asks the browser to match x-height against the
primary font stack automatically. This is less precise than computed metric overrides
but avoids fabricated calibration numbers and still meaningfully reduces layout shift
on font swap.
