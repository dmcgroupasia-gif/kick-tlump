// script.js

// Smooth scroll handled via CSS (scroll-behavior)

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 800);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Background changer for Home section
const homeSection = document.querySelector('.home');
const backgrounds = [
  'url("assets/background1.jpg")',
  'url("assets/background2.jpg")',
  'url("assets/background3.jpg")',
  'url("assets/background4.jpg")'
];
let bgIndex = 0;
setInterval(() => {
  bgIndex = (bgIndex + 1) % backgrounds.length;
  homeSection.style.backgroundImage = backgrounds[bgIndex];
}, 5000);
