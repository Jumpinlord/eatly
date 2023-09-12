

// new PerformanceObserver((list) => {
//   const latestEntry = list.getEntries().at(-1);

//   if (latestEntry?.element?.getAttribute('loading') == 'lazy') {
//     console.warn('Warning: LCP element was lazy loaded', latestEntry);
//   }
// }).observe({type: 'largest-contentful-paint', buffered: true});


document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('#burger-btn');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const mobileMenu = document.querySelector('#primary-navigation');
  const body = document.body;
  const accordionBtns = document.querySelectorAll('.accordion-button');
  const footerDate = document.querySelector('.current-year');

  const openBurgerMenu = () => {
    burgerBtn?.setAttribute("data-state", "opened");
    burgerBtn?.setAttribute("aria-expanded", "true");
    burgerBtn?.setAttribute('aria-label', 'Close menu');
    mobileMenu?.classList.remove('translate-x-full');
    disableScroll();
  }

  const closeBurgerMenu = () => {
    burgerBtn?.setAttribute('data-state', 'closed');
    burgerBtn?.setAttribute('aria-expanded', 'false');
    burgerBtn?.setAttribute('aria-label', 'Open menu');
    mobileMenu?.classList.add('translate-x-full');
    enableScroll();
  }

  burgerBtn.addEventListener("click", () => {
    const currentState = burgerBtn?.getAttribute("data-state");
    
    if (!currentState || currentState === "closed") {
      openBurgerMenu();
    }
    else {
      closeBurgerMenu();
    }
  });

  menuItems?.forEach(el => el.addEventListener('click', closeBurgerMenu));

  document.addEventListener('keyup', function ({key}) {
    if (key === 'Escape') closeBurgerMenu();
  });

  const disableScroll = () => {
    const pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add('scroll-off');
    body.style.top = `-${pagePosition}px`;
    document.documentElement.classList.remove('scroll-smooth');
  }

  const enableScroll = () => {
    const pagePosition = parseInt(body.dataset.position, 10);
    body.classList.remove('scroll-off');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    body.removeAttribute('data-position');
    document.documentElement.classList.add('scroll-smooth');
  }

  // Accordion
  accordionBtns.forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.closest('.accordion').querySelector('.accordion-content');
      const chevron = button.querySelector('.chevron');
      const isOpened = button.getAttribute('aria-expanded');

      chevron.classList.toggle('-rotate-180');

      if (isOpened === 'true') {
        button.setAttribute('aria-expanded', false);
        accordionContent.setAttribute('aria-hidden', true);
      } else {
        button.setAttribute('aria-expanded', true);
        accordionContent.setAttribute('aria-hidden', false);
      }
    });
  })

  // Date
  footerDate.textContent = new Date().getFullYear();
})




















