/**
 * main.js — application entry point
 *
 * Imports and initialises all component scripts.
 * Component-specific logic lives in /components/<name>/<name>.js;
 * this file is only for orchestration.
 */

// ── Component initialisers ──────────────────────────────────────────
// Scripts are loaded as modules (type="module" in HTML),
// so each component file is responsible for its own self-invocation.
// Import them here so the bundler (if added later) can tree-shake.

import '../../components/header/header.js';
import '../../components/footer/footer.js';
import '../../components/form/form.js';

// ── Global utilities ────────────────────────────────────────────────

/**
 * Smooth-scroll any anchor that starts with "#"
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
