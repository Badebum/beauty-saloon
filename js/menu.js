(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const backDropMenu = document.querySelector('[data-back-drop]');
  const closeBtn = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    closeBtn.setAttribute('aria-expanded', !expanded);

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    backDropMenu.classList.toggle('is-open');
  });
})();
