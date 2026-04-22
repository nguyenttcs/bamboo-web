/**
 * Header component
 * Handles mobile menu toggle, accessibility, and scroll-triggered solid bg.
 */

(function initHeader() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.header__menu-toggle');
  const nav    = document.querySelector('#primary-nav');

  if (!header) return;

  // ── Scroll: toggle solid background ──────────────────────────────
  const hero = document.querySelector('.hero');

  function onScroll() {
    const threshold = hero ? hero.offsetHeight * 0.15 : 80;
    header.classList.toggle('header--solid', window.scrollY > threshold);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ── Mobile menu toggle ────────────────────────────────────────────
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    nav.classList.toggle('header__nav--open', !isOpen);
  });

  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('header__nav--open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header') && nav.classList.contains('header__nav--open')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('header__nav--open');
    }
  });
})();
