// Imperfect English — quiet reveal-on-scroll, nothing more.

(() => {
  const targets = document.querySelectorAll(
    '.display, .lede, .body, .portrait, .btn'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  targets.forEach((el) => io.observe(el));
})();
