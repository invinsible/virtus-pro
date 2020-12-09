const menuBtn = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const searchBtn = document.querySelector('.searchBtn');

menuBtn.addEventListener('click', function(e){
  e.preventDefault();
  const header = document.querySelector('.header');
  this.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  header.classList.toggle('menu-bg');
});

searchBtn.addEventListener('click', function(e){
  e.preventDefault();
  const item = document.querySelector('.search__item');
  item.classList.toggle('active');
});