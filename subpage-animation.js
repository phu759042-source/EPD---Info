const reveals = document.querySelectorAll('.section, .card, .feature');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('reveal', 'active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
