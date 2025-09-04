// Typing animation
const typed = new Typed('#typing-animation', {
  strings: ["AWS", "Snowflake", "Python", "ETL Pipelines", "Data Analytics"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});
