export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();

      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // forma alternativa
      // const sectionTop = section.offsetTop;
      // window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
