// Interface : onglets, recherche, cartes, fiche détaillée, langue
const UI = {
  fr: {
    appSub: 'Palpations et mobilisations pour l\'examen pratique', settings: 'Réglages', language: 'Langue', close: 'Fermer',
    search: 'Rechercher un muscle, une manœuvre…', all: 'Tout', cards: (n) => `${n} fiche${n > 1 ? 's' : ''}`,
    steps: 'Ordre d\'exécution', note: 'Remarque sur le PDF', web: 'Compléments (web, vérifiés)',
    source: (p, s) => `Source : ${p}, diapo ${s}`, empty: 'Aucune fiche ne correspond.', noImg: 'Pas d\'image dans le PDF',
    footer: 'Contenu tiré des supports de cours de Mireia Yeste (UCV, 2026-27). Compléments sourcés sur chaque fiche.'
  },
  en: {
    appSub: 'Palpations and mobilizations for the practical exam', settings: 'Settings', language: 'Language', close: 'Close',
    search: 'Search a muscle, a maneuver…', all: 'All', cards: (n) => `${n} card${n > 1 ? 's' : ''}`,
    steps: 'Order of execution', note: 'Note on the slides', web: 'Extra info (web, verified)',
    source: (p, s) => `Source: ${p}, slide ${s}`, empty: 'No card matches.', noImg: 'No picture in the PDF',
    footer: 'Content from Mireia Yeste\'s course slides (UCV, 2026-27). Extra info is sourced on each card.'
  },
  es: {
    appSub: 'Palpaciones y movilizaciones para el examen práctico', settings: 'Ajustes', language: 'Idioma', close: 'Cerrar',
    search: 'Buscar un músculo, una maniobra…', all: 'Todo', cards: (n) => `${n} ficha${n > 1 ? 's' : ''}`,
    steps: 'Orden de ejecución', note: 'Nota sobre el PDF', web: 'Complementos (web, verificados)',
    source: (p, s) => `Fuente: ${p}, diapositiva ${s}`, empty: 'Ninguna ficha coincide.', noImg: 'Sin imagen en el PDF',
    footer: 'Contenido de los apuntes de Mireia Yeste (UCV, 2026-27). Los complementos llevan su fuente en cada ficha.'
  }
};

const PRACTICES = {
  p1: L('Palpation du tronc', 'Trunk palpation', 'Palpación del tronco'),
  p2: L('Mobilisations du rachis', 'Spine mobilizations', 'Movilizaciones de columna'),
  p3: L('Mobilisations de l\'épaule', 'Shoulder mobilizations', 'Movilizaciones de hombro'),
  p6: L('Palpation du membre inférieur', 'Lower limb palpation', 'Palpación del miembro inferior')
};
const PDF_NAME = { p1: 'Practice 1 Trunk palpation', p2: 'Practice 2 Spine mobilizations', p3: 'Practice 3 Shoulder mobilizations', p6: 'Practice 6 Lower limb palpation' };

const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* stockage indisponible */ } }
};

let lang = ['fr', 'en', 'es'].includes(store.get('kine_lang')) ? store.get('kine_lang') : 'fr';
let practice = store.get('kine_practice') || 'all';
let query = '';

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const imgTag = (name, cls = '') => `<img src="img/${esc(name)}.jpg" alt="" loading="lazy" class="${cls}">`;

function applyStatic() {
  const u = UI[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { const v = u[el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', u[el.dataset.i18nAria]));
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => el.setAttribute('placeholder', u[el.dataset.i18nPh]));
  document.querySelectorAll('input[name="lang"]').forEach((r) => { r.checked = r.value === lang; });
}

function renderTabs() {
  const items = [['all', UI[lang].all], ...Object.entries(PRACTICES).map(([k, v]) => [k, v[lang]])];
  $('#tabs').innerHTML = items.map(([k, label]) =>
    `<button type="button" class="tab" data-p="${k}" aria-pressed="${k === practice}">${esc(label)}</button>`).join('');
}

function visibleCards() {
  const q = norm(query.trim());
  return CARDS.filter((c) => (practice === 'all' || c.p === practice) &&
    (!q || norm([c.t[lang], c.g[lang], c.d[lang], ...c.st[lang]].join(' ')).includes(q)));
}

function renderGrid() {
  const list = visibleCards();
  $('#count').textContent = UI[lang].cards(list.length);
  $('#grid').innerHTML = list.length ? list.map((c) => `
    <button type="button" class="card" data-id="${c.id}">
      ${c.img[0] ? imgTag(c.img[0], 'thumb') : `<div class="thumb placeholder">${esc(UI[lang].noImg)}</div>`}
      <div class="card-body">
        <div class="chips"><span class="chip">${esc(c.g[lang])}</span>${c.k ? `<span class="chip alt">${esc(c.k[lang])}</span>` : ''}</div>
        <h3>${esc(c.t[lang])}</h3>
        <p>${esc(c.d[lang])}</p>
      </div>
    </button>`).join('') : `<p class="empty">${esc(UI[lang].empty)}</p>`;
}

function renderDetail(id) {
  const c = CARDS.find((x) => x.id === id);
  if (!c) return;
  const u = UI[lang];
  $('#detail-body').innerHTML = `
    <div class="chips"><span class="chip">${esc(PRACTICES[c.p][lang])}</span><span class="chip">${esc(c.g[lang])}</span>${c.k ? `<span class="chip alt">${esc(c.k[lang])}</span>` : ''}</div>
    <h2>${esc(c.t[lang])}</h2>
    ${c.img.length ? `<div class="photos">${c.img.map((i) => imgTag(i)).join('')}</div>` : ''}
    <p class="desc">${esc(c.d[lang])}</p>
    <h3>${esc(u.steps)}</h3>
    <ol class="steps">${c.st[lang].map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
    ${c.n ? `<aside class="box warn"><strong>${esc(u.note)}</strong><p>${esc(c.n[lang])}</p></aside>` : ''}
    ${c.w ? `<aside class="box web"><strong>${esc(u.web)}</strong><p>${esc(c.w.x[lang])}</p>
      <ul>${c.w.src.map((s) => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.n)}</a></li>`).join('')}</ul></aside>` : ''}
    <p class="src">${esc(u.source(PDF_NAME[c.p], c.s))}</p>`;
  const dlg = $('#detail');
  dlg.dataset.id = id;
  if (!dlg.open) dlg.showModal();
  dlg.scrollTop = 0;
}

function renderAll() {
  applyStatic();
  renderTabs();
  renderGrid();
  const dlg = $('#detail');
  if (dlg.open) renderDetail(dlg.dataset.id);
}

document.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (tab) { practice = tab.dataset.p; store.set('kine_practice', practice); renderTabs(); renderGrid(); return; }
  const card = e.target.closest('.card');
  if (card) { renderDetail(card.dataset.id); return; }
  if (e.target.closest('#settings-btn')) { $('#settings').showModal(); return; }
  // clic sur le fond d'une fenêtre = fermeture
  if (e.target.tagName === 'DIALOG') e.target.close();
});

document.addEventListener('change', (e) => {
  if (e.target.name === 'lang') { lang = e.target.value; store.set('kine_lang', lang); renderAll(); }
});

$('#search').addEventListener('input', (e) => { query = e.target.value; renderGrid(); });

renderAll();
