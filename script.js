const interests = [
  'Web Development',
  'React.js & JavaScript',
  'Python & Backend Technologies',
  'AI & Data Science',
  'Machine Learning & NLP',
  'Building Digital Solutions'
];
const interestEl = document.getElementById('typed-role');
let interestIndex = 0, charIndex = 0, deleting = false;

function typeInterest() {
  if (!interestEl) return;
  const phrase = interests[interestIndex];
  interestEl.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(typeInterest, 75);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeInterest, 1300);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeInterest, 32);
  } else {
    deleting = false;
    interestIndex = (interestIndex + 1) % interests.length;
    setTimeout(typeInterest, 250);
  }
}
typeInterest();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal animations are progressively enabled after JavaScript loads.
const revealItems = document.querySelectorAll(
  '.hero-copy, .hero-art, .section-heading, .about-main, .stat, .skill-card, .timeline-item, .project-card, .education-card, .contact-panel'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
} else {
  revealItems.forEach(el => el.classList.add('visible'));
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
