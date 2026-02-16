(function () {
  const EMAIL = "inquiry@shoug-tech.com";

  function getBase() {
    try {
      if (typeof __md_get === "function") return __md_get("__base") || "";
    } catch (e) {}
    return "";
  }

  function url(path) {
    const base = getBase();
    return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
  }

  function getSiteName() {
    const titleEl = document.querySelector(".md-header__title .md-ellipsis");
    return titleEl ? titleEl.textContent.trim() : "Website";
  }

  function addHeaderCTA() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;
    if (headerInner.querySelector("a.header-cta")) return;

    const cta = document.createElement("a");
    cta.className = "header-cta";
    cta.href = `mailto:${EMAIL}`;
    cta.textContent = "Contact Us";
    cta.setAttribute("aria-label", "Contact Us");
    headerInner.appendChild(cta);
  }

  function styleFooterMetaToMatch() {
    // Make the bottom footer bar match the same gradient as .custom-footer
    const meta = document.querySelector(".md-footer-meta");
    if (!meta) return;

    const scheme =
      document.documentElement.getAttribute("data-md-color-scheme") || "default";

    // Your CSS variables (already in extra.css)
    if (scheme === "slate") {
      meta.style.background = "linear-gradient(90deg, var(--dark-1), var(--dark-2))";
      meta.style.borderTop = "1px solid rgba(230, 244, 241, 0.12)";
      meta.style.color = "rgba(230, 244, 241, 0.78)";
    } else {
      meta.style.background = "linear-gradient(90deg, var(--mint-1), var(--mint-2))";
      meta.style.borderTop = "1px solid rgba(31, 41, 55, 0.10)";
      meta.style.color = "var(--ink-muted)";
    }

    // Ensure all links/text inherit the matching color
    meta.querySelectorAll("*").forEach((el) => {
      el.style.color = "inherit";
    });
  }

  function addFooterBlock() {
    const footer = document.querySelector(".md-footer");
    if (!footer) return;

    if (footer.querySelector(".custom-footer")) return;

    const meta = footer.querySelector(".md-footer-meta");
    const block = document.createElement("section");
    block.className = "custom-footer";

    const siteName = getSiteName();

    block.innerHTML = `
      <div class="custom-footer__inner">
        <div class="custom-footer__left">
          <div class="custom-footer__brand">${siteName}</div>
          <div class="custom-footer__title">Stay Updated</div>

          <form class="custom-footer__form" action="mailto:${EMAIL}" method="get">
            <input
              class="custom-footer__input"
              type="email"
              name="email"
              placeholder="Email address"
              autocomplete="email"
              required
            >
            <button class="custom-footer__button" type="submit">
              Subscribe
            </button>
          </form>

          <div class="custom-footer__note">
            By entering your email, you agree to be contacted regarding this course project.
          </div>
        </div>

        <div class="custom-footer__right">
          <div class="footer-col">
            <div class="footer-col__title">About</div>
            <a class="footer-link" href="${url("Project%20Overview/introduction/")}">Project Overview</a>
            <a class="footer-link" href="${url("Sustainability/reflection/")}">Reflection</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Legal</div>
            <a class="footer-link" href="${url("privacy-notice/")}">Privacy Notice</a>
            <a class="footer-link" href="${url("academic-disclaimer/")}">Academic Disclaimer</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Contact</div>
            <a class="footer-link" href="mailto:${EMAIL}">${EMAIL}</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Reports</div>
            <a class="footer-link" href="${url("Phase%201/report.pdf")}">Phase 1 PDF</a>
            <a class="footer-link" href="${url("Phase%202/report.pdf")}">Phase 2 PDF</a>
          </div>
        </div>
      </div>
    `;

    if (meta) footer.insertBefore(block, meta);
    else footer.prepend(block);
  }

  function run() {
    addHeaderCTA();
    addFooterBlock();
    styleFooterMetaToMatch();
  }

  // MkDocs Material instant navigation support
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();
