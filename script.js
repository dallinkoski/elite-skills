// Elite Skills Academy - scroll reveal + micro
(function(){
  const targets = document.querySelectorAll('.section-head, .formula-equation, .formula-body, .tech-card, .coach-grid, .owner-inner, .testimonial, .roster-card, .services, .facility-mosaic figure, .facility-address, .numbers-grid > div, .why-free-inner, .final-cta-inner, .footer-top');
  targets.forEach(el => el.setAttribute('data-reveal',''));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));

  // Hero photo swap on scroll (subtle parallax-ish)
  const heroPhotos = document.querySelectorAll('.hero-photo img');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroPhotos.forEach((img, i) => {
      img.style.transform = `scale(1.05) translateY(${y * 0.04 * (i+1)}px)`;
    });
  }, { passive: true });
})();
