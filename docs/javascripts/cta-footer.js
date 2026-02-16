(function () {
  function addHeaderCTA() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;

    // Prevent duplicates (instant navigation)
    if (headerInner.querySelector(".header-cta")) return;

    const cta = document.createElement("a");
    cta.className = "header-cta";
    cta.href = "mailto:inquiry@shoug-tech.com";
    cta.textContent = "Contact Us";
    cta.setAttribute("aria-label", "Contact Us");

    // Put it at the end of header actions area
    headerInner.appendChild(cta);
  }

  function addFooterBlock() {
    const footer = document.querySelector(".md-footer");
    if (!footer) return;

    // Prevent duplicates (instant navigation)
    if (footer.querySelector(".custom-footer")) return;

    const meta = footer.querySelector(".md-footer-meta");
    const block = document.createElement("section");
    block.className = "custom-footer";

    block.innerHTML = `
      <div class="custom-footer__inner">
        <div class="custom-footer__left">
          <div class="custom-footer__brand">CS 340</div>
          <div class="custom-footer__title">Get updates in your inbox</div>

          <form class="custom-footer__form" action="mailto:inquiry@shoug-tech.com" method="get">
            <input class="custom-footer__input" type="email" name="email" placeholder="Email address" autocomplete="email">
            <button class="custom-footer__button" type="submit">Subscribe</button>
          </form>

          <div class="custom-footer__note">
            By entering your email, you agree to be contacted regarding this course project.
          </div>
        </div>

        <div class="custom-footer__right">
          <div class="footer-col">
            <div class="footer-col__title">About</div>
            <a class="footer-link" href="/Project%20Overview/introduction/">Project Overview</a>
            <a class="footer-link" href="/Sustainability/reflection/">Reflection</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Contact</div>
            <a class="footer-link" href="mailto:inquiry@shoug-tech.com">inquiry@shoug-tech.com</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Reports</div>
            <a class="footer-link" href="/Phase%201/report.pdf">Phase 1 PDF</a>
            <a class="footer-link" href="/Phase%202/report.pdf">Phase 2 PDF</a>
          </div>
        </div>
      </div>
    `;

    // Insert above the default Material footer meta
    if (meta) footer.insertBefore(block, meta);
    else footer.prepend(block);
  }

  function run() {
    addHeaderCTA();
    addFooterBlock();
  }

  // Material instant navigation support
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();
