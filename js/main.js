const menuBtn = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(e){
  e.preventDefault();
  const header = document.querySelector('.header');
  this.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  header.classList.toggle('menu-bg');
});