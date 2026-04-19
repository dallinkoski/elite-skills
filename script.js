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

  // Testimonial scroll — drag-to-scroll + dot progress indicator
  const scroller = document.querySelector('.testimonial-scroll');
  const dots = document.querySelectorAll('.scroll-dots .dot');
  if (scroller) {
    let isDown = false, startX = 0, startScroll = 0;
    scroller.addEventListener('pointerdown', (e) => {
      isDown = true;
      startX = e.clientX;
      startScroll = scroller.scrollLeft;
      scroller.setPointerCapture(e.pointerId);
    });
    scroller.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      scroller.scrollLeft = startScroll - (e.clientX - startX);
    });
    scroller.addEventListener('pointerup', () => { isDown = false; });
    scroller.addEventListener('pointercancel', () => { isDown = false; });

    // Update active dot based on scroll progress
    const updateDots = () => {
      if (!dots.length) return;
      const max = scroller.scrollWidth - scroller.clientWidth;
      const pct = max > 0 ? scroller.scrollLeft / max : 0;
      const activeIdx = Math.min(dots.length - 1, Math.floor(pct * dots.length));
      dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
    };
    scroller.addEventListener('scroll', updateDots, { passive: true });
    updateDots();
  }
})();
