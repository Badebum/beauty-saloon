(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const backDropMenu = document.querySelector('[data-back-drop]');
  const closeBtnRef = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    backDropMenu.classList.toggle('is-open');
  });

  closeBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    backDropMenu.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-prod-button]');
  const mobileMenuRef = document.querySelector('[data-menu-prod]');
  const backDropMenu = document.querySelector('[data-back-drop-prod]');
  const closeBtnRef = document.querySelector('[data-menu-close-prod]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    backDropMenu.classList.toggle('is-open');
  });

  closeBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    backDropMenu.classList.toggle('is-open');
  });
})();
