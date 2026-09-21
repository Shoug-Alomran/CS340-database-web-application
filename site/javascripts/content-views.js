/* Purpose-specific views, progressively enhanced from the complete document. */
(() => {
  const title = el => el.textContent.replace(/¶/g, '').replace(/^\d+(?:\.\d+)*\.?\s*/, '').trim();
  function init() {
    const menu = document.querySelector('.project-menu');
    if (menu && !menu.dataset.finder) {
      menu.dataset.finder = 'true';
      const groups = [...menu.querySelectorAll('.project-menu-grid > nav')];
      const categories = menu.querySelector('.project-menu-categories');
      const search = menu.querySelector('input');
      const status = menu.querySelector('.finder-status');
      const buttons = [];
      let selected = groups.findIndex(group => group.querySelector('[aria-current]'));
      if (selected < 0) selected = Math.max(0, groups.findIndex(group => group.querySelector('h2').textContent.includes('01 Planning')));
      function update() {
        const term = search.value.trim().toLowerCase();
        let count = 0;
        groups.forEach((group, i) => {
          let matches = 0;
          group.querySelectorAll('a').forEach(a => {
            const hit = !term || `${group.querySelector('h2').textContent} ${a.textContent}`.toLowerCase().includes(term);
            a.hidden = !hit;
            if (hit) matches++;
          });
          group.hidden = term ? !matches : i !== selected;
          if (!group.hidden) count += matches;
          buttons[i].setAttribute('aria-pressed', String(!term && i === selected));
        });
        status.textContent = term ? `${count} ${count === 1 ? 'page' : 'pages'} found` : '';
        menu.classList.toggle('is-searching', Boolean(term));
      }
      groups.forEach((group,i) => {
        const b = document.createElement('button'); b.type = 'button';
        b.textContent = group.querySelector('h2').textContent;
        b.addEventListener('click', () => { selected = i; search.value = ''; update(); });
        categories.append(b); buttons.push(b);
      });
      categories.hidden = false;
      search.addEventListener('input', update);
      menu.classList.add('finder-ready'); update();
    }
    const notebook = document.querySelector('.notebook');
    if (!notebook || notebook.dataset.views) return;
    notebook.dataset.views = 'true';
    const panels = [...notebook.querySelectorAll('.chapter-panel')];
    // Dense references become an entity inspector; normalization becomes a walkthrough.
    function makeInspector(items, labels, kind, caption) {
      if (items.length < 2) return;
      const workspace = document.createElement('div'); workspace.className = `content-inspector ${kind}`;
      items[0].before(workspace);
      const controls = document.createElement('div'); controls.className = 'inspector-controls';
      const label = document.createElement('label'); label.textContent = caption;
      const select = document.createElement('select');
      label.append(select); controls.append(label);
      const all = document.createElement('option'); all.value = 'all'; all.textContent = 'Show everything'; select.append(all);
      items.forEach((panel, i) => {
        const option = document.createElement('option'); option.value = String(i); option.textContent = labels[i]; select.append(option);
      });
      const tabs = document.createElement('div'); tabs.className = 'inspector-steps'; tabs.setAttribute('aria-label',caption);
      const buttons = items.map((panel,i) => {
        const button = document.createElement('button'); button.type = 'button'; button.textContent = labels[i];
        button.addEventListener('click', () => { select.value = String(i); update(); }); tabs.append(button); return button;
      });
      if (kind === 'normal-forms') controls.append(tabs);
      workspace.append(controls,...items);
      function update() {
        items.forEach((panel,i) => { panel.hidden = select.value !== 'all' && select.value !== String(i); buttons[i].setAttribute('aria-pressed',String(select.value === String(i))); });
      }
      select.addEventListener('change', update);
      function revealHash() {
        const id = decodeURIComponent(location.hash.slice(1));
        const index = items.findIndex(panel => [...panel.querySelectorAll('[id]')].some(el=>el.id === id));
        if (index >= 0) { select.value = String(index); update(); }
      }
      select.value = '0'; update(); revealHash();
      window.addEventListener('hashchange',revealHash);
      document.addEventListener('click', event => {
        const a = event.target.closest('a[href*="#"]'); if (!a) return;
        const url = new URL(a.href);
        if (url.pathname !== location.pathname) return;
        const id = decodeURIComponent(url.hash.slice(1));
        const index = items.findIndex(panel => [...panel.querySelectorAll('[id]')].some(el=>el.id === id));
        if (index >= 0) { select.value = String(index); update(); }
      });
    }
    if (location.pathname.includes('/data-dictionary/')) {
      const items = panels.filter(p => p.querySelector('table'));
      makeInspector(items, items.map(p=>title(p.querySelector('h2'))),'dictionary-inspector','Inspect an entity');
    }
    if (location.pathname.includes('/normalization/')) {
      const items = panels.filter(p => /\([123]NF\)/.test(p.querySelector('h2').textContent));
      makeInspector(items,['1NF · Atomic values','2NF · Whole-key dependency','3NF · Independent attributes'],'normal-forms','Normalization walkthrough');
    }
    // Requirements read as a board by default, with the original table one click away.
    if (location.pathname.includes('/requirements/')) notebook.querySelectorAll('.table-controls button').forEach(b => b.click());
    panels.forEach(panel => {
      const heading = panel.querySelector(':scope > h2');
      if (!heading) return;
      const name = title(heading);
      if (/outcome|summary$/i.test(name) && !panel.querySelector('table')) panel.classList.add('outcome-panel');
      // Workflow sequences become a numbered path; short parallel facts become tiles.
      panel.querySelectorAll(':scope > ol').forEach(list=>list.classList.add('workflow-path'));
      panel.querySelectorAll(':scope > ul').forEach(list => {
        if (list.children.length <= 6 && list.children.length > 1 && [...list.children].every(li=>li.textContent.length < 260)) list.classList.add('insight-list');
      });
      if (location.pathname.includes('/architecture/') && panel.querySelector('.grid.cards')) {
        panel.classList.add('architecture-panel'); panel.querySelector('.grid.cards').classList.add('architecture-flow');
      }
      // Long subtopic lists (screens, design decisions, constraints) become disclosures.
      const subheads = [...panel.children].filter(el=>el.tagName === 'H3');
      if (subheads.length >= 3 && !panel.querySelector('.catalog-card') && !location.pathname.includes('/requirements/')) {
        panel.classList.add('disclosure-panel');
        subheads.forEach(h => {
          const details = document.createElement('details'); details.className = 'topic-disclosure';
          const summary = document.createElement('summary');
          const label = document.createElement('span'); label.id = h.id; label.textContent = title(h); summary.append(label);
          h.before(details); details.append(summary); let next = h.nextSibling; h.remove();
          while (next && next.nodeName !== 'H3') { const following = next.nextSibling; details.append(next); next = following; }
        });
        const reveal = () => {
          const node = document.getElementById(decodeURIComponent(location.hash.slice(1)));
          const details = node?.closest('.topic-disclosure'); if (details) details.open = true;
        };
        window.addEventListener('hashchange',reveal); reveal();
      }
      const body = document.createElement('div'); body.className = 'section-body';
      [...panel.childNodes].filter(node=>node !== heading).forEach(node=>body.append(node));
      panel.append(body);
      const complex = body.querySelector('table, .grid, .catalog-search, .topic-disclosure, .record-grid, pre, iframe');
      panel.classList.add(complex ? 'section-full' : 'section-editorial');
    });
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
