/**
 * Footer component
 * Injects the current year into the copyright notice.
 */

(function initFooter() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
