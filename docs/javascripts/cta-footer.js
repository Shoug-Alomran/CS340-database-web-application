(function () {
  const EMAIL = "inquiry@shoug-tech.com";
  const MAIN_WEBSITE = "https://shoug-tech.com/";
  const BLUEPRINT_WEBSITE = "https://blueprint.shoug-tech.com/";

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
    if (headerInner.querySelector(".header-utility")) return;

    const utility = document.createElement("div");
    utility.className = "header-utility";

    const navToggle = document.createElement("button");
    navToggle.className = "header-toggle";
    navToggle.type = "button";
    navToggle.textContent = "Nav";
    navToggle.setAttribute("aria-label", "Toggle navigation sidebar");
    navToggle.setAttribute(
      "aria-pressed",
      String(!document.body.classList.contains("sidebar-nav-collapsed"))
    );
    navToggle.addEventListener("click", () => {
      const collapsed = document.body.classList.toggle("sidebar-nav-collapsed");
      navToggle.setAttribute("aria-pressed", String(!collapsed));
    });

    const tocToggle = document.createElement("button");
    tocToggle.className = "header-toggle";
    tocToggle.type = "button";
    tocToggle.textContent = "TOC";
    tocToggle.setAttribute("aria-label", "Toggle table of contents sidebar");
    tocToggle.setAttribute(
      "aria-pressed",
      String(!document.body.classList.contains("sidebar-toc-collapsed"))
    );
    tocToggle.addEventListener("click", () => {
      const collapsed = document.body.classList.toggle("sidebar-toc-collapsed");
      tocToggle.setAttribute("aria-pressed", String(!collapsed));
    });

    const badge = document.createElement("span");
    badge.className = "header-badge";
    badge.textContent = "CS340 CORE";
    badge.setAttribute("aria-label", "CS340 project documentation");

    const cta = document.createElement("a");
    cta.className = "header-cta";
    cta.href = `mailto:${EMAIL}`;
    cta.textContent = "Connect";
    cta.setAttribute("aria-label", "Email project team");

    utility.appendChild(navToggle);
    utility.appendChild(tocToggle);
    utility.appendChild(badge);
    utility.appendChild(cta);
    headerInner.appendChild(utility);
  }

  function styleFooterMetaToMatch() {
    const meta = document.querySelector(".md-footer-meta");
    if (!meta) return;

    const scheme =
      document.documentElement.getAttribute("data-md-color-scheme") || "default";

    if (scheme === "slate") {
      meta.style.background = "linear-gradient(120deg, #0a3d28, #145a3b)";
      meta.style.borderTop = "1px solid rgba(150, 208, 173, 0.32)";
      meta.style.color = "rgba(232, 250, 240, 0.9)";
    } else {
      meta.style.background = "linear-gradient(120deg, #0f5132, #1f7a4d)";
      meta.style.borderTop = "1px solid rgba(150, 208, 173, 0.35)";
      meta.style.color = "rgba(236, 255, 246, 0.92)";
    }

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
          <div class="custom-footer__kicker">DATA + DEFENSE + DELIVERY</div>
          <div class="custom-footer__title">Build Better Systems</div>
          <div class="custom-footer__subtitle">
            Structured database engineering, documented end to end for CS340.
          </div>

          <form class="custom-footer__form" action="mailto:${EMAIL}" method="get">
            <label class="sr-only" for="footer-email-input">Email address</label>
            <input
              id="footer-email-input"
              class="custom-footer__input"
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Email address"
              autocomplete="email"
              required
            >
            <button class="custom-footer__button" type="submit">
              Subscribe
            </button>
          </form>

          <div class="custom-footer__note">
            Submitting opens your email app and drafts a message to the team.
          </div>
        </div>

        <div class="custom-footer__right">
          <div class="footer-col footer-col--panel">
            <div class="footer-col__title">Project</div>
            <a class="footer-link" href="${url("Project-Overview/introduction/")}">Introduction</a>
            <a class="footer-link" href="${url("Phase-5/backend/")}">Backend</a>
            <a class="footer-link" href="${url("Phase-5/frontend/")}">Frontend</a>
          </div>

          <div class="footer-col footer-col--panel">
            <div class="footer-col__title">Phases</div>
            <a class="footer-link" href="${url("Phase-1/application-concept/")}">Phase 1</a>
            <a class="footer-link" href="${url("Phase-2/eer-diagram/")}">Phase 2</a>
            <a class="footer-link" href="${url("Phase-3/relational-schema/")}">Phase 3</a>
            <a class="footer-link" href="${url("Phase-4/sql-ddl/")}">Phase 4</a>
          </div>

          <div class="footer-col footer-col--panel">
            <div class="footer-col__title">Reports</div>
            <a class="footer-link" href="${url("Phase-1/report.pdf")}">Phase 1 PDF</a>
            <a class="footer-link" href="${url("Phase-2/report.pdf")}">Phase 2 PDF</a>
            <a class="footer-link" href="${url("Phase-3/report.pdf")}">Phase 3 PDF</a>
            <a class="footer-link" href="${url("Phase-4/report.pdf")}">Phase 4 PDF</a>
          </div>

          <div class="footer-col footer-col--panel">
            <div class="footer-col__title">Contact</div>
            <a class="footer-link" href="mailto:${EMAIL}">${EMAIL}</a>
            <a class="footer-link" href="${url("privacy-notice/")}">Privacy Notice</a>
            <a class="footer-link" href="${url("academic-disclaimer/")}">Academic Disclaimer</a>
            <a class="footer-link" href="${MAIN_WEBSITE}" target="_blank" rel="noopener">shoug-tech.com</a>
          </div>
        </div>

      </div>
    `;

    if (meta) footer.insertBefore(block, meta);
    else footer.prepend(block);
  }

  function updateFooterAttribution() {
    const attributionLink = document.querySelector(
      '.md-footer-meta a[href*="squidfunk.github.io/mkdocs-material"]'
    );
    if (!attributionLink) return;
    attributionLink.href = BLUEPRINT_WEBSITE;
    attributionLink.textContent = "Made by Blueprint";
    attributionLink.setAttribute("target", "_blank");
    attributionLink.setAttribute("rel", "noopener");
  }

  function run() {
    document.body.classList.remove("sidebar-nav-collapsed", "sidebar-toc-collapsed");
    addHeaderCTA();
    addFooterBlock();
    updateFooterAttribution();
    styleFooterMetaToMatch();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();
