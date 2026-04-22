/**
 * Form component
 * Basic client-side validation with accessible error messaging.
 */

(function initForms() {
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.form__input, .form__select, .form__textarea').forEach(field => {
        setFieldError(field, null);
      });

      // Validate required fields
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          setFieldError(field, 'This field is required.');
          isValid = false;
        }
      });

      // Validate email fields
      form.querySelectorAll('[type="email"]').forEach(field => {
        if (field.value && !isValidEmail(field.value)) {
          setFieldError(field, 'Please enter a valid email address.');
          isValid = false;
        }
      });

      if (isValid) {
        // TODO: replace with actual submit logic after design/backend integration
        console.log('Form submitted:', Object.fromEntries(new FormData(form)));
      }
    });
  });

  /**
   * Show or clear an error on a field.
   * @param {HTMLElement} field
   * @param {string|null} message — null clears the error
   */
  function setFieldError(field, message) {
    const group = field.closest('.form__group');
    if (!group) return;

    const errorEl = group.querySelector('.form__error');

    if (message) {
      field.classList.add('form__input--error');
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }
    } else {
      field.classList.remove('form__input--error');
      field.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
})();
