/**
 * chat-launcher — fixed bottom-right circular launcher, expands into a greeting card.
 * Signature component (DESIGN.md), reproduced unchanged in position and mechanism.
 * Schema: stardust/eds-schema/global-login.json#sections[name=floating-chat-launcher]
 *
 * Authoring rows (template-slotted — fixed composition, one row):
 *   1. cell content: a short greeting heading (e.g. "Hello!") and one body paragraph
 *      (the prompt, e.g. "Want to talk to an expert about QuickBooks?").
 */

export default function decorate(block) {
  const cell = block.querySelector(':scope > div > div');
  const heading = cell?.querySelector('h1, h2, h3, h4, h5, h6');
  const body = cell?.querySelector('p');

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'chat-launcher-button';
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-controls', 'chat-launcher-popup');
  launcher.setAttribute('aria-label', 'Open chat with an expert');
  launcher.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.7 8.7 0 0 1-3.4-.7L3 21l1.8-5.4A8.4 8.4 0 1 1 21 11.5Z"/></svg>';

  const popup = document.createElement('div');
  popup.className = 'chat-launcher-popup';
  popup.id = 'chat-launcher-popup';
  popup.setAttribute('role', 'dialog');
  popup.setAttribute('aria-label', 'Chat with an expert');
  popup.hidden = true;

  const row = document.createElement('div');
  row.className = 'chat-avatar-row';
  row.innerHTML = '<span class="chat-avatar" aria-hidden="true">👋</span>';
  if (heading) {
    const strong = document.createElement('strong');
    strong.textContent = heading.textContent.trim();
    row.append(strong);
  }
  popup.append(row);
  if (body) popup.append(body);

  launcher.addEventListener('click', () => {
    const open = launcher.getAttribute('aria-expanded') === 'true';
    launcher.setAttribute('aria-expanded', String(!open));
    popup.hidden = open;
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && launcher.getAttribute('aria-expanded') === 'true') {
      launcher.setAttribute('aria-expanded', 'false');
      popup.hidden = true;
      launcher.focus();
    }
  });

  block.replaceChildren(launcher, popup);
}
