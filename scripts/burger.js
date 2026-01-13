const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerImg = burgerBtn.querySelector('.burger-img');

let burgerOpen = false;

burgerBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  burgerOpen = !burgerOpen;

  burgerMenu.classList.toggle('hidden');

  burgerImg.src = burgerOpen
    ? 'img/burger-close-icon.svg'
    : 'img/burger-menu-icon.svg';
});

document.addEventListener('click', () => {
  if (burgerOpen) {
    burgerOpen = false;
    burgerMenu.classList.add('hidden');
    burgerImg.src = 'img/burger-menu-icon.svg';
  }
});

const menuLinks = burgerMenu.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerOpen = false;
    burgerMenu.classList.add('hidden');
    burgerImg.src = 'img/burger-menu-icon.svg';
  });
});
