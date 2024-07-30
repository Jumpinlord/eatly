export function burger() {
  const burgerBtn = document.querySelector('#burger-btn');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const mobileMenu = document.querySelector('#primary-navigation');

  const openBurgerMenu = () => {
    burgerBtn?.setAttribute('data-state', 'opened');
    burgerBtn?.setAttribute('aria-expanded', 'true');
    burgerBtn?.setAttribute('aria-label', 'Close menu');
    mobileMenu?.classList.remove('translate-x-full');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenu.removeAttribute('inert', 'false')
    document.documentElement.style.overflowY = 'hidden';

  };

  const closeBurgerMenu = () => {
    burgerBtn?.setAttribute('data-state', 'closed');
    burgerBtn?.setAttribute('aria-expanded', 'false');
    burgerBtn?.setAttribute('aria-label', 'Open menu');
    mobileMenu?.classList.add('translate-x-full');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.setAttribute('inert', 'true')
    document.documentElement.style.overflowY = '';

  };

  burgerBtn.addEventListener('click', () => {
    const currentState = burgerBtn?.getAttribute('data-state');

    if (!currentState || currentState === 'closed') {
      openBurgerMenu();
    } else {
      closeBurgerMenu();
    }
  });

  menuItems?.forEach(el => el.addEventListener('click', closeBurgerMenu));

  document.addEventListener('keyup', function ({ key }) {
    if (key === 'Escape') closeBurgerMenu();
  });
}


