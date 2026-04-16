// =============================================
// SCROLL FADE-IN ANIMATION
// Watches each .fade-in element — the moment
// it enters the screen, adds .visible class
// which triggers the CSS animation
// =============================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 }); // triggers when 15% of the element is visible

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// =============================================
// ACTIVE NAV LINK ON SCROLL
// Highlights the correct nav link as you
// scroll through each section
// =============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


// =============================================
// SMOOTH NAVBAR BACKGROUND ON SCROLL
// Nav starts transparent-ish, gets a stronger
// background once you scroll past the hero
// =============================================

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.boxShadow = '0 2px 20px rgba(44, 26, 15, 0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});