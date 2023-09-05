import { authVisual } from './auth-user';

// alert("test")

// document.addEventListener('DOMContentLoaded', function () {
//   const toggleButton = document.getElementById('toggle-menu');
//   const mobileMenu = document.getElementById('mobile-menu');
//   const closeMenuButton = document.getElementById('close-menu');
//   const body = document.body;

//   toggleButton.addEventListener('click', function () {
//     mobileMenu.style.right = '0px';
//     toggleButton.style.display = 'none';
//     closeMenuButton.style.display = 'block';
//     body.style.overflow = 'hidden';
//   });

//   closeMenuButton.addEventListener('click', function () {
//     mobileMenu.style.right = '-100%';
//     toggleButton.style.display = 'block';
//     closeMenuButton.style.display = 'none';
//     body.style.overflow = 'auto';
//   });
// });

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = ''; // Restoring the default value
    } else {
      body.style.overflow = 'hidden'; // Blocking scroll
    }
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = ''; // Restoring the default value
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMenu();
  });

  // Close the mobile menu when a link inside it is clicked
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();

authVisual();
