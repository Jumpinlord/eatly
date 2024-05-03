const accordionBtns = document.querySelectorAll('.accordion-button');

accordionBtns.forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button
      .closest('.accordion')
      .querySelector('.accordion-content');
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
});