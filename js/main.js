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

// Search
searchBtn.addEventListener('click', function(e){
  e.preventDefault();
  const item = document.querySelector('.search__item');
  item.classList.toggle('active');
});

// Tabs
const tab = function() {
  let tabNav = document.querySelectorAll('.tabBtn');
  let tabContent = document.querySelectorAll('.tabContent');
  let currentTab;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav);
  });

  // Handler for tab-btn
  function selectTabNav(e) {
    e.preventDefault();
    tabNav.forEach(item => {
      item.classList.remove('active');      
    });
    this.classList.add('active');

    currentTab = this.getAttribute('data-tab-name');
    selectTabContent(currentTab);
  };

  // Handler for tab-content
  function selectTabContent(el) {
    tabContent.forEach(item => {
      item.classList.contains(el) ? item.classList.add('active') : item.classList.remove('active');
    });
  }
};

tab();

// Partners counter in footer
const partnersItems = document.querySelectorAll('.partners__item');
if(partnersItems.length >= 5) { 

  for (let i = 0; i < 3; i++) {
    partnersItems[i].classList.add('partners__item--big')
  }
}

//Filter posts
const filterPost = function () {
  const filterBtn = document.querySelectorAll('.filterBtn');
  const filterForm = document.querySelectorAll('.filterForm');

  filterBtn.forEach(item => { 
    item.addEventListener('click', filterHandler);
  })

  filterForm.forEach(item => {
    item.addEventListener('input', postCountHandler);
    item.addEventListener('reset', function(){
      this.previousElementSibling.querySelector('.filter-count').classList.remove('show');
    })
  })

  function filterHandler(e) {
    e.preventDefault();    
    this.nextElementSibling.classList.toggle('show');
  }

  function postCountHandler() {
    this.previousElementSibling.querySelector('.filter-count').classList.add('show');    
  }
};

filterPost();


// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {    
   
    450: {
      slidesPerView: 2,
      spaceBetween: 20,      
    },

    769: {
      slidesPerView: 4,
      spaceBetween: 20,      
    },
  }
});


// Sticky Header
window.onscroll = function() {stickHeader()};
const header = document.querySelector(".header__wrapper");
const main = document.querySelector(".main");
let sticky = header.offsetTop;

function stickHeader() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      main.classList.add('bg-scroll');
  } else {
      header.classList.remove("sticky");
      main.classList.remove('bg-scroll');
  }
}


