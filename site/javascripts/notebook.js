/* Content is preserved verbatim; the notebook adds optional exploration tools. */
(function () {
  function init() {
    const notebook = document.querySelector('.notebook');
    if (!notebook || notebook.dataset.enhanced) return;
    notebook.dataset.enhanced = 'true';
    const content = notebook.querySelector('.notebook-content');
    const pagePaths = new Set([...notebook.querySelectorAll('.chapter-pages a')].map(a => new URL(a.href).pathname));
    content.querySelectorAll('.home-hero a.md-button').forEach(link => {
      const target = new URL(link.href);
      if (target.origin === location.origin && pagePaths.has(target.pathname)) {
        const parent = link.parentElement;
        link.remove();
        if (!parent.textContent.trim() && !parent.querySelector('a')) parent.remove();
      }
    });
    const headings = [...content.querySelectorAll('h2')];
    // Each section becomes a numbered page in the engineering notebook.
    headings.forEach((heading, index) => {
      const panel = document.createElement('section');
      panel.className = 'chapter-panel';
      panel.setAttribute('aria-labelledby', heading.id);
      panel.dataset.section = String(index + 1).padStart(2, '0');
      heading.before(panel);
      let node = heading;
      while (node && (node === heading || node.nodeName !== 'H2')) {
        const next = node.nextSibling;
        panel.append(node);
        node = next;
      }
      const last = panel.lastElementChild;
      if (last?.tagName === 'HR') last.remove();
    });
    // Schema definitions become browsable entity cards; SQL gets a query catalog.
    const schema = location.pathname.includes('/relational-schema/');
    const queries = /\/(basic|advanced)-queries\//.test(location.pathname);
    if (schema || queries) {
      content.querySelectorAll('.chapter-panel').forEach(panel => {
        const entries = [...panel.children].filter(el => el.tagName === 'H3');
        if (!entries.length) return;
        const catalog = document.createElement('div');
        catalog.className = schema ? 'entity-catalog' : 'query-catalog';
        entries[0].before(catalog);
        entries.forEach(heading => {
          const card = document.createElement('section');
          card.className = 'catalog-card';
          card.setAttribute('aria-labelledby', heading.id);
          let node = heading;
          while (node && (node === heading || node.nodeName !== 'H3')) {
            const next = node.nextSibling;
            card.append(node);
            node = next;
          }
          catalog.append(card);
        });
        const label = document.createElement('label');
        label.className = 'catalog-search';
        label.append(document.createTextNode(schema ? 'Find an entity' : 'Find a query'));
        const input = document.createElement('input');
        input.type = 'search';
        input.placeholder = schema ? 'Try family, clinic, or PK…' : 'Try alerts, count, or q03…';
        label.append(input);
        const status = document.createElement('span');
        status.className = 'catalog-status';
        status.setAttribute('role', 'status');
        const cards = [...catalog.children];
        const update = () => {
          const term = input.value.trim().toLowerCase();
          let count = 0;
          cards.forEach(card => { card.hidden = !card.textContent.toLowerCase().includes(term); if (!card.hidden) count++; });
          status.textContent = count ? `${count} of ${cards.length} ${schema ? 'entities' : 'queries'}` : 'No matches. Try a different term.';
        };
        input.addEventListener('input', update);
        catalog.before(label, status);
        update();
        // Heading links must reveal filtered-out cards before jumping to them.
        document.addEventListener('click', event => {
          const anchor = event.target.closest('a[href*="#"]');
          if (!anchor) return;
          const target = new URL(anchor.href, location.href);
          if (target.pathname === location.pathname && target.hash && cards.some(card => [...card.querySelectorAll('[id]')].some(el => el.id === decodeURIComponent(target.hash.slice(1))))) {
            input.value = ''; update();
          }
        });
      });
    }
    // Dense tables can be read as a grid of records without losing header context.
    content.querySelectorAll('table').forEach((table, index) => {
      const headers = [...table.querySelectorAll('thead th')].map(h => h.textContent.trim());
      if (!headers.length) return;
      const wrapper = table.closest('.md-typeset__table') || table;
      const controls = document.createElement('div');
      controls.className = 'table-controls';
      const caption = document.createElement('span');
      caption.textContent = `${table.querySelectorAll('tbody tr').length} records / ${headers.length} fields`;
      const button = document.createElement('button');
      button.type = 'button'; button.textContent = 'Read as cards'; button.setAttribute('aria-pressed', 'false');
      const cards = document.createElement('div');
      cards.className = 'record-grid'; cards.id = `record-view-${index}`; cards.hidden = true;
      button.setAttribute('aria-controls', cards.id);
      table.querySelectorAll('tbody tr').forEach(row => {
        const record = document.createElement('dl');
        [...row.cells].forEach((cell, i) => {
          const dt = document.createElement('dt'); dt.textContent = headers[i] || `Field ${i + 1}`;
          const dd = document.createElement('dd');
          [...cell.childNodes].forEach(child => dd.append(child.cloneNode(true)));
          record.append(dt, dd);
        });
        cards.append(record);
      });
      button.addEventListener('click', () => {
        const active = cards.hidden;
        cards.hidden = !active; wrapper.hidden = active;
        button.textContent = active ? 'Read as table' : 'Read as cards';
        button.setAttribute('aria-pressed', String(active));
      });
      controls.append(caption, button);
      wrapper.before(controls); wrapper.after(cards);
    });
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
