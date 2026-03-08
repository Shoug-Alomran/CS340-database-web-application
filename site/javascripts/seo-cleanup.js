(function () {
  const JUNK_PARAMS = new Set(["q", "query", "h"]);

  function ensureMeta(name, content) {
    let meta = document.head.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", name);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  function cleanUrl() {
    const current = new URL(window.location.href);
    const keys = [...current.searchParams.keys()];
    const hasParams = keys.length > 0;
    const hasJunkParams = keys.some((key) => JUNK_PARAMS.has(key));

    if (!hasParams) return;

    const canonical = `${current.origin}${current.pathname}`;
    const canonicalLink = document.head.querySelector('link[rel="canonical"]');

    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonical);
    }

    ensureMeta("robots", "noindex, follow");

    if (hasJunkParams || !current.searchParams.toString()) {
      window.history.replaceState({}, document.title, `${current.pathname}${current.hash}`);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cleanUrl, { once: true });
  } else {
    cleanUrl();
  }
})();
