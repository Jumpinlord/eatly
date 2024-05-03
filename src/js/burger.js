const burgerBtn = document.querySelector('#burger-btn');
const menuItems = document?.querySelectorAll('[data-menu-item]');
const mobileMenu = document.querySelector('#primary-navigation');

const openBurgerMenu = () => {
  burgerBtn?.setAttribute('data-state', 'opened');
  burgerBtn?.setAttribute('aria-expanded', 'true');
  burgerBtn?.setAttribute('aria-label', 'Close menu');
  mobileMenu?.classList.remove('translate-x-full');
  mobileMenu.setAttribute('aria-hidden', 'false');
  // disableScroll();
};

const closeBurgerMenu = () => {
  burgerBtn?.setAttribute('data-state', 'closed');
  burgerBtn?.setAttribute('aria-expanded', 'false');
  burgerBtn?.setAttribute('aria-label', 'Open menu');
  mobileMenu?.classList.add('translate-x-full');
  mobileMenu.setAttribute('aria-hidden', 'true');
  // enableScroll();
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

// const disableScroll = () => {

//   const pagePosition = window.scrollY;
//   body.dataset.position = pagePosition;
//   body.classList.add('scroll-off');
//   body.style.top = `-${pagePosition}px`;
//   document.documentElement.classList.remove('scroll-smooth');
// };

// const enableScroll = () => {

//   const pagePosition = parseInt(body.dataset.position, 10);
//   body.classList.remove('scroll-off');
//   window.scroll({
//     top: pagePosition,
//     left: 0,
//   });
//   body.removeAttribute('data-position');
//   document.documentElement.classList.add('scroll-smooth');
// };