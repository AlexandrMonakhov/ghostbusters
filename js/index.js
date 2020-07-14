const mMenuButton = document.querySelector('.m-menu-button'),
  mMenu = document.querySelector('.m-menu');

mMenuButton.addEventListener('click', () => {
  mMenuButton.classList.toggle('m-menu-button_active');
  mMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});