/* ============================================================
   AURORA ARCADE — store, icons, helpers, card renderer
   ============================================================ */

const KEY = { fav: 'aa.favorites', recent: 'aa.recent' };

const store = {
  read(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } },
  write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  favorites() { return store.read(KEY.fav, []); },
  isFavorite(id) { return store.favorites().includes(id); },
  toggleFavorite(id) {
    const list = store.favorites();
    const i = list.indexOf(id);
    if (i > -1) list.splice(i, 1); else list.push(id);
    store.write(KEY.fav, list);
    return i === -1;
  },
  recent() { return store.read(KEY.recent, []); },
  pushRecent(id) {
    const list = store.recent().filter(x => x !== id);
    list.unshift(id);
    store.write(KEY.recent, list.slice(0, 12));
  },
};

/* ---------------------------------------------------------- icons */
const ICON = {
  home:   '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  grid:   '<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/>',
  heart:  '<path d="M12 20.4 4.9 13.4a4.6 4.6 0 0 1 6.5-6.5l.6.6.6-.6a4.6 4.6 0 0 1 6.5 6.5z"/>',
  clock:  '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.3l3.4 2"/>',
  layers: '<path d="m12 3 8.5 4.6L12 12.2 3.5 7.6z"/><path d="m3.5 12.4 8.5 4.6 8.5-4.6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  play:   '<path d="M7 4.5v15l12-7.5z"/>',
  expand: '<path d="M4 9V4h5"/><path d="M20 15v5h-5"/><path d="M15 4h5v5"/><path d="M9 20H4v-5"/>',
  back:   '<path d="M15 5l-7 7 7 7"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 5v6h-6"/>',
  close:  '<path d="m6 6 12 12"/><path d="m18 6-12 12"/>',
  alert:  '<path d="M12 8.5v4.2"/><circle cx="12" cy="16.4" r=".9" fill="currentColor" stroke="none"/><path d="M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  menu:   '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  star:   '<path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.8l5.9-.9z"/>',
};

const svg = (path, cls = 'ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;

const logoMark = `<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M12 3.2 4.6 7.4v9.2L12 20.8l7.4-4.2V7.4z"/>
  <path d="M12 8.4 8.4 10.4v3.2L12 15.6l3.6-2v-2.2z" fill="currentColor" stroke="none" opacity=".9"/>
</svg>`;

/* ---------------------------------------------------------- helpers */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const gameById = id => GAMES.find(g => g.id === id);
const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const bus = new EventTarget();
const emit = (name, detail) => bus.dispatchEvent(new CustomEvent(name, { detail }));

/* ---------------------------------------------------------- toast */
function toast(msg, iconName = 'star') {
  let host = $('.toasts');
  if (!host) { host = document.createElement('div'); host.className = 'toasts'; document.body.appendChild(host); }
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = svg(ICON[iconName] || ICON.star, 'ico ico-sm') + `<span>${esc(msg)}</span>`;
  host.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 2200);
}

/* ---------------------------------------------------------- card */
function cardHTML(g, opts = {}) {
  const fav = store.isFavorite(g.id);
  const badge = opts.badge
    ? `<span class="chip ${opts.badge === 'Featured' ? 'chip-new' : ''}">${esc(opts.badge)}</span>` : '';
  const style = `--tint:${esc(g.tint)};--tint2:${esc(g.tint2)}`;
  return `
  <article class="card" style="${style}" data-id="${esc(g.id)}">
    <a class="card-link" href="play.html?g=${encodeURIComponent(g.id)}"
       aria-label="Play ${esc(g.title)}"></a>
    <div class="card-art" data-initials="${esc(g.initials)}">
      <img src="${g.thumb}" alt="" loading="lazy" decoding="async"
           onerror="this.closest('.card-art').classList.add('no-img');this.remove();">
      <div class="veil"></div>
      ${badge ? `<div class="card-badges">${badge}</div>` : ''}
      <div class="card-play"><i>${svg(ICON.play)}</i></div>
    </div>
    <button class="card-fav${fav ? ' is-on' : ''}" type="button" data-fav="${esc(g.id)}"
            aria-pressed="${fav}"
            aria-label="${fav ? 'Remove' : 'Add'} ${esc(g.title)} ${fav ? 'from' : 'to'} favourites">
      ${svg(ICON.heart, 'ico-sm')}
    </button>
    <div class="card-body">
      <h3 class="card-title">${esc(g.title)}</h3>
      <p class="card-desc">${esc(g.tagline)}</p>
      <div class="card-meta"><span class="tag">${esc(g.tags[0])}</span></div>
    </div>
  </article>`;
}

/* One delegated handler for every favourite button on the page. */
function renderFeatured() {
  const host = document.querySelector('[data-featured]');
  if (!host) return;
  const feat = GAMES.filter(g => g.featured);
  const list = feat.length ? feat : GAMES.slice(0, 4);
  host.innerHTML = list.map(g => cardHTML(g, { badge: 'Featured' })).join('');
}

function renderFilters() {
  const host = document.querySelector('[data-filters]');
  if (!host) return;
  host.innerHTML = CATEGORIES.map((c, i) =>
    `<button class="filter" type="button" data-filter="${c.id}" aria-pressed="${i === 0}">${c.label}</button>`
  ).join('');
}

function wireFavButtons(root = document) {
  root.addEventListener('click', e => {
    const btn = e.target.closest('[data-fav]');
    if (!btn) return;
    e.preventDefault(); e.stopPropagation();
    const id = btn.dataset.fav;
    const now = store.toggleFavorite(id);
    const g = gameById(id);
    $$(`[data-fav="${CSS.escape(id)}"]`).forEach(b => {
      b.classList.toggle('is-on', now);
      b.setAttribute('aria-pressed', String(now));
    });
    toast(now ? `Added ${g ? g.title : id} to favourites` : 'Removed from favourites', 'heart');
    emit('favchange', { id, on: now });
  });
}

function wireSpotlight(root = document) {
  root.addEventListener('pointermove', e => {
    const card = e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

function wireReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });
  els.forEach(el => io.observe(el));
}

/* ---------------------------------------------------------- sidebar */
function buildRail() {
  const items = [
    { id: 'home',      label: 'Home',            icon: 'home',  href: '#/',          count: null },
    { id: 'all',       label: 'All Games',       icon: 'grid',  href: '#all',        count: GAMES.length },
    { id: 'favorites', label: 'Favourites',      icon: 'heart', href: '#favorites',  count: store.favorites().length },
    { id: 'recent',    label: 'Recently Played', icon: 'clock', href: '#recent',     count: store.recent().length },
  ];
  return `
  <div class="brand">
    <span class="brand-mark">${logoMark}</span>
    <span>
      <span class="brand-name">Aurora<em>Arcade</em></span><br>
      <span class="brand-sub">Play anything</span>
    </span>
  </div>
  ${items.map(i => `
    <a class="nav-item" href="${i.href}" data-nav="${i.id}">
      ${svg(ICON[i.icon])}
      <span>${esc(i.label)}</span>
      ${i.count !== null ? `<span class="nav-count" data-count="${i.id}">${i.count}</span>` : ''}
    </a>`).join('')}
  <div class="rail-label">Categories</div>
  ${CATEGORIES.filter(c => c.id !== 'all').map(c => `
    <a class="nav-item" href="#cat-${c.id}">
      ${svg(ICON.layers, 'ico ico-sm')}
      <span>${esc(c.label)}</span>
    </a>`).join('')}
  <div class="rail-foot">
    <b>${GAMES.length} games</b> ready to play.<br>
    Favourites and history stay on this device only.
  </div>`;
}

/* ---------------------------------------------------------- boot */
function bootSplash() {
  const el = $('.boot');
  if (!el) return;
  const done = () => { el.classList.add('done'); setTimeout(() => el.setAttribute('hidden', ''), 520); };
  if (document.readyState === 'complete') setTimeout(done, 260);
  else window.addEventListener('load', () => setTimeout(done, 300));
  setTimeout(done, 2400);
}


/* ============================================================
   Page bootstrap — multi-file build
   index.html  -> catalog grid, search, filters, favourites, history
   play.html   -> ?g=<id>, one game in a big frame
   ============================================================ */

function initHomePage() {
  const rail = document.querySelector('[data-rail]');
  if (rail) rail.innerHTML = buildRail('home');

  renderFeatured();
  renderFilters();
  wireFavButtons(); wireSpotlight(); wireReveal(); bootSplash();

  const grid = document.querySelector('[data-grid]');
  const emptyEl = document.querySelector('[data-empty]');
  const countEl = document.querySelector('[data-count-label]');
  let filter = 'all', term = '', sort = 'default';

  function paintGrid() {
    let list = GAMES.slice();
    if (filter !== 'all') list = list.filter(g => g.tags.map(t => t.toLowerCase().replace(/ /g,'-')).includes(filter));
    if (term) list = list.filter(g =>
      (g.title + ' ' + g.tagline + ' ' + g.desc + ' ' + g.tags.join(' ')).toLowerCase().includes(term));
    if (sort === 'az') list.sort((a,b) => a.title.localeCompare(b.title));
    if (sort === 'za') list.sort((a,b) => b.title.localeCompare(a.title));
    grid.innerHTML = list.map(g => cardHTML(g)).join('');
    countEl.textContent = (term || filter !== 'all')
      ? `${list.length} of ${GAMES.length} games` : `${GAMES.length} games`;
    emptyEl.hidden = list.length > 0;
  }

  document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
    filter = btn.dataset.filter;
    document.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    paintGrid();
  }));

  document.querySelector('[data-sort]')?.addEventListener('change', e => { sort = e.target.value; paintGrid(); });
  document.querySelector('[data-reset-filters]')?.addEventListener('click', () => {
    document.querySelector('.filter[data-filter="all"]')?.click();
    const s = document.querySelector('[data-search-input]');
    if (s) { s.value = ''; s.dispatchEvent(new Event('input')); }
  });

  /* search */
  const search = document.querySelector('[data-search]');
  const input  = document.querySelector('[data-search-input]');
  const results= document.querySelector('[data-results]');
  let active = -1;
  const close = () => { results.dataset.open = 'false'; active = -1; };

  function render(q) {
    const t = q.trim().toLowerCase();
    if (!t) return close();
    const hits = GAMES.filter(g =>
      (g.title + ' ' + g.tagline + ' ' + g.desc + ' ' + g.tags.join(' ')).toLowerCase().includes(t));
    results.innerHTML = hits.length
      ? `<div class="result-head">${hits.length} game${hits.length===1?'':'s'}</div>` +
        hits.map((g,i) => `<a class="result" href="play.html?g=${encodeURIComponent(g.id)}" data-i="${i}">
            <img src="${g.thumb}" alt="" loading="lazy">
            <span><span class="result-title">${esc(g.title)}</span><br>
            <span class="result-sub">${esc(g.tags.join(' · '))}</span></span>
            <span class="result-go">${svg(ICON.play,'ico ico-sm')}</span></a>`).join('')
      : `<div class="results-empty">No games match “${esc(q)}”.</div>`;
    results.dataset.open = 'true'; active = -1;
  }

  input?.addEventListener('input', () => {
    search.classList.toggle('has-value', !!input.value);
    term = input.value.toLowerCase(); render(input.value); paintGrid();
  });
  input?.addEventListener('keydown', e => {
    const rows = results.querySelectorAll('.result');
    if (e.key === 'Escape') { close(); input.blur(); return; }
    if (!rows.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      active = e.key === 'ArrowDown' ? (active+1)%rows.length : (active-1+rows.length)%rows.length;
      rows.forEach((r,i) => r.classList.toggle('is-active', i === active));
      rows[active].scrollIntoView({ block:'nearest' });
    }
    if (e.key === 'Enter') { e.preventDefault(); (rows[active] || rows[0]).click(); }
  });
  document.querySelector('[data-search-clear]')?.addEventListener('click', () => {
    input.value=''; search.classList.remove('has-value'); term=''; render(''); paintGrid(); input.focus();
  });
  document.addEventListener('click', e => { if (search && !search.contains(e.target)) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName) && input) {
      e.preventDefault(); input.focus();
    }
  });

  /* favourites + history */
  function paintFav() {
    const favs = store.favorites().map(gameById).filter(Boolean);
    const sec = document.querySelector('[data-favorites-section]');
    if (sec) sec.hidden = !favs.length;
    const host = document.querySelector('[data-favorites]');
    if (host) host.innerHTML = favs.map(g => cardHTML(g)).join('');
  }
  function paintRecent() {
    const rec = store.recent().map(gameById).filter(Boolean);
    const sec = document.querySelector('[data-recent-section]');
    if (sec) sec.hidden = !rec.length;
    const host = document.querySelector('[data-recent]');
    if (host) host.innerHTML = rec.map(g => cardHTML(g)).join('');
  }
  function paintCounts() {
    const f = document.querySelector('[data-count="favorites"]');
    const r = document.querySelector('[data-count="recent"]');
    if (f) f.textContent = store.favorites().length;
    if (r) r.textContent = store.recent().length;
  }
  paintFav(); paintRecent(); paintGrid();

  document.querySelector('[data-clear-recent]')?.addEventListener('click', () => {
    localStorage.removeItem('aa.recent'); paintRecent(); paintCounts(); toast('History cleared','clock');
  });
  bus.addEventListener('favchange', paintFav);
  bus.addEventListener('favchange', paintCounts);
  bus.addEventListener('favchange', () => { paintGrid(); });
}

function initPlayerPage() {
  const id = new URLSearchParams(location.search).get('g');
  const g = gameById(id) || GAMES[0];
  if (!g) return;
  document.title = g.title + ' — Aurora Arcade';
  store.pushRecent(g.id);

  const rail = document.querySelector('[data-rail]');
  if (rail) rail.innerHTML = buildRail('all');

  document.querySelector('[data-p-title]').textContent = g.title;
  document.querySelector('[data-p-sub]').textContent = g.tagline || '';

  const stage = document.querySelector('[data-stage]');
  const overlay = document.querySelector('[data-overlay]');
  const frame = document.querySelector('[data-frame]');
  let loaded = false;

  const show = h => { overlay.innerHTML = h; overlay.hidden = false; };
  const hide = () => { overlay.hidden = true; };

  function load() {
    loaded = false;
    show(`<div class="ov-inner"><div class="ring" role="status" aria-label="Loading"></div>
      <h3>Loading ${esc(g.title)}</h3>
      <p>The game is being embedded from its host. On a slow connection this can take a moment.</p></div>`);
    try { frame.src = 'about:blank'; } catch(e) {}
    setTimeout(() => { frame.src = g.embed; }, 40);
  }
  frame.addEventListener('load', () => { if (frame.src !== 'about:blank') { loaded = true; hide(); } });
  let watchdog = null;
  const arm = () => {
    clearTimeout(watchdog);
    watchdog = setTimeout(() => {
      if (loaded) return;
      show(`<div class="ov-inner"><div class="err-mark">${svg(ICON.alert)}</div>
        <h3>This game didn't load</h3>
        <p>Its host may block embedding, or the page may be offline. You can open the game at its source instead.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <a class="btn btn-primary btn-sm" href="${esc(g.embed)}" target="_blank" rel="noopener">Open at source</a>
          <button class="btn btn-sm" type="button" data-retry>Retry</button></div></div>`);
    }, 9000);
  };
  overlay.addEventListener('click', e => { if (e.target.closest('[data-retry]')) { load(); arm(); } });
  load(); arm();
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !loaded) arm(); });

  document.querySelector('[data-fullscreen]')?.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (stage.requestFullscreen) await stage.requestFullscreen();
      else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
      else toast('Fullscreen is not available in this browser','alert');
    } catch { toast('Fullscreen was blocked by the browser','alert'); }
  });
  document.querySelector('[data-restart]')?.addEventListener('click', () => { load(); arm(); toast('Reloading the game','refresh'); });

  document.querySelector('[data-p-info]').innerHTML = `<h3>About this game</h3><p>${esc(g.desc)}</p>
    <div style="margin-top:16px">
      <div class="kv"><span>Category</span><b>${esc(g.tags.join(', '))}</b></div>
      <div class="kv"><span>Players</span><b>${g.tags.includes('Multiplayer') ? 'Multiplayer' : 'Single player'}</b></div>
      <div class="kv"><span>Source</span><b>Embedded</b></div></div>`;
  document.querySelector('[data-p-controls]').innerHTML =
    `<h3>Controls</h3><ul class="controls-list">${g.controls.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;

  const rel = GAMES.filter(x => x.id !== g.id)
    .sort((a,b) => {
      const s = t => t.tags.filter(x => g.tags.includes(x)).length;
      return s(b.tags) - s(a.tags);
    }).slice(0, 4);
  document.querySelector('[data-p-related]').innerHTML = rel.map(x => cardHTML(x)).join('');

  const favBtn = document.querySelector('[data-p-fav]');
  const sync = () => {
    const on = store.isFavorite(g.id);
    favBtn.classList.toggle('is-on', on);
    favBtn.setAttribute('aria-pressed', String(on));
    document.querySelector('[data-p-fav-label]').textContent = on ? 'Favourited' : 'Favourite';
  };
  sync();
  favBtn?.addEventListener('click', () => { store.toggleFavorite(g.id); sync(); });

  wireFavButtons(); wireSpotlight(); wireReveal();
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'player') initPlayerPage(); else initHomePage();
  document.querySelector('[data-burger]')?.addEventListener('click', () =>
    document.body.dataset.drawer = document.body.dataset.drawer === 'open' ? '' : 'open');
  document.addEventListener('click', e => { if (e.target.closest('.scrim')) document.body.dataset.drawer = ''; });
});
