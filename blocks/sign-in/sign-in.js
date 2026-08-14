/**
 * sign-in — QuickBooks sign-in card + promo-tile band.
 * Schema: stardust/eds-schema/global-login.json#sections[name=sign-in-and-value]
 *
 * Authoring rows:
 *   1. Sign-in card — cell content (in order): <h1> headline, a label paragraph
 *      ("Choose your product to sign in:"), one <ul> of account-type option labels,
 *      a CTA paragraph (<strong><a>Continue to sign in</a></strong>), a legal-links
 *      paragraph (Privacy | Terms of service).
 *   2..N. One row per promo tile — cell content: <h3>/<h4> heading, body <p>,
 *      CTA paragraph (<em><a>Learn more</a></em>). Tile ground color is assigned by
 *      position (banks=navy, invoices=teal, expenses=green) per DESIGN.md — no
 *      per-row marker survives DA flattening, so the rotation is positional (#61).
 */

const TILE_GROUNDS = ['banks', 'invoices', 'expenses'];

const ICONS = {
  banks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 10l9-6 9 6"/><path d="M4 10v9h16v-9"/><path d="M9 21v-6h6v6"/></svg>',
  invoices: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>',
  expenses: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 15l4-6 3 4 5-8"/></svg>',
};

function buildSignInCard(cell) {
  const card = document.createElement('div');
  card.className = 'sign-in-card';

  const heading = cell.querySelector('h1, h2, h3');
  if (heading) card.append(heading);

  const lists = [...cell.querySelectorAll('ul')];
  const optionList = lists[0];

  const paragraphs = [...cell.querySelectorAll('p')];
  const labelP = paragraphs.find((p) => !p.querySelector('a') && p.textContent.trim() && (!optionList || !optionList.contains(p)));
  if (labelP) {
    labelP.className = 'sign-in-label';
    card.append(labelP);
  }

  if (optionList) {
    const radioGroup = document.createElement('div');
    radioGroup.className = 'radio-group';
    radioGroup.setAttribute('role', 'radiogroup');
    radioGroup.setAttribute('aria-label', labelP ? labelP.textContent.trim() : 'Choose your product to sign in');
    [...optionList.querySelectorAll('li')].forEach((li, i) => {
      const id = `product-option-${i}`;
      const wrap = document.createElement('div');
      wrap.className = 'radio-option';
      wrap.innerHTML = `<input type="radio" name="product" id="${id}" ${i === 0 ? 'checked' : ''}><label for="${id}"></label>`;
      wrap.querySelector('label').textContent = li.textContent.trim();
      radioGroup.append(wrap);
    });
    card.append(radioGroup);
  }

  const ctaP = paragraphs.find((p) => p.querySelector('a.button, a'));
  const legalP = paragraphs.filter((p) => p !== labelP && p !== ctaP).find((p) => p.querySelector('a'));
  if (ctaP) {
    ctaP.className = 'sign-in-cta';
    card.append(ctaP);
  }
  if (legalP && legalP !== ctaP) {
    legalP.className = 'sign-in-legal';
    card.append(legalP);
  }

  return card;
}

function buildPromoTile(cell, index) {
  const ground = TILE_GROUNDS[index] || TILE_GROUNDS[TILE_GROUNDS.length - 1];
  const tile = document.createElement('div');
  tile.className = 'promo-tile';
  tile.dataset.tile = ground;

  const icon = document.createElement('span');
  icon.className = 'promo-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = ICONS[ground] || '';
  tile.append(icon);

  const heading = cell.querySelector('h1, h2, h3, h4');
  if (heading) tile.append(heading);

  const paragraphs = [...cell.querySelectorAll('p')];
  const bodyP = paragraphs.find((p) => !p.querySelector('a'));
  if (bodyP) tile.append(bodyP);

  const ctaP = paragraphs.find((p) => p.querySelector('a'));
  if (ctaP) {
    ctaP.className = 'promo-cta';
    tile.append(ctaP);
  }

  return tile;
}

export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'wrap';

  const [signInRow, ...tileRows] = rows;
  const signInCell = signInRow.firstElementChild;
  if (signInCell) wrap.append(buildSignInCard(signInCell));

  const promos = document.createElement('div');
  promos.className = 'promos';
  tileRows.forEach((row, i) => {
    const cell = row.firstElementChild;
    if (cell) promos.append(buildPromoTile(cell, i));
  });
  wrap.append(promos);

  block.replaceChildren(wrap);
}
