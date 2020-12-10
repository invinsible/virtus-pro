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