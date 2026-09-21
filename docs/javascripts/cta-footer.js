/* Progressive enhancements: all navigation and content work without JavaScript. */
(function () {
  function init() {
    const home = !!document.querySelector(".landing");
    document.body.classList.toggle("is-home", home);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduced && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(
          ".phase-card, .project-spotlight, .team-grid > ul > li",
        )
        .forEach((el, i) => {
          el.style.setProperty("--reveal-delay", `${(i % 3) * 65}ms`);
          el.classList.add("reveal");
          observer.observe(el);
        });
    }
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  else if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
