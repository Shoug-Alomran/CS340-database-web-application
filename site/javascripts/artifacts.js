(function () {
  document.querySelectorAll('.container > svg, .diagram-wrap > svg').forEach(svg => {
    const canvas = document.createElement('div'); canvas.className = 'diagram-canvas';
    canvas.tabIndex = 0; canvas.setAttribute('role', 'region'); canvas.setAttribute('aria-label','Diagram canvas; scroll to explore when zoomed');
    const tools = document.createElement('div'); tools.className = 'diagram-tools';
    const label = document.createElement('span'); label.textContent = 'MODEL CANVAS / 100%';
    let zoom = 100;
    const out = document.createElement('button'); out.type = 'button'; out.textContent = '−'; out.setAttribute('aria-label','Zoom out');
    const reset = document.createElement('button'); reset.type = 'button'; reset.textContent = 'Fit'; reset.setAttribute('aria-label','Fit diagram to canvas');
    const inside = document.createElement('button'); inside.type = 'button'; inside.textContent = '+'; inside.setAttribute('aria-label','Zoom in');
    const update = () => { svg.style.width = `${zoom}%`; label.textContent = `MODEL CANVAS / ${zoom}%`; out.disabled = zoom === 100; inside.disabled = zoom === 300; };
    out.onclick = () => { zoom = Math.max(100, zoom - 25); update(); }; inside.onclick = () => { zoom = Math.min(300, zoom + 25); update(); }; reset.onclick = () => { zoom = 100; update(); };
    tools.append(label,out,reset,inside); svg.before(tools,canvas); canvas.append(svg); update();
  });
})();
