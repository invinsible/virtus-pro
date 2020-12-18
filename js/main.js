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
  const filterBtn = document.querySelector('.filterBtn');
  const filterBtnText = filterBtn.querySelector('.filterBtnText');   
  const filterCount = filterBtn.querySelector('.filterCount'); 
  const icon = filterBtn.querySelector('.filterPostIcon');

  const filterForm = document.querySelector('.filterForm');
  const checkbox = filterForm.querySelectorAll('.filter-post__input');

  var checkCounter = 0;
  var blabla = false;
  
  // Default text in button
  filterBtnText.textContent = filterBtn.dataset.defaultText;  
  
  filterBtn.addEventListener('click', showFilterForm); 
  
  checkbox.forEach(item => {
    item.addEventListener('input', checkboxHandler);
  });

  function checkboxHandler() {

    if (this.checked == true) {
      checkCounter += 1;    
      
    } else {       
      checkCounter -= 1;
    }

    const firstCheck = filterForm.querySelector('.filter-post__input:checked');    

    // Set button text if we have only one checked element
    if ( checkCounter >= 1 ) {
      let parent = firstCheck.closest('.filter-post__option');
      filterBtnText.textContent = parent.querySelector('label').textContent;     

      if (parent.querySelector('img')) {
        icon.src = parent.querySelector('img').getAttribute('src');
        icon.classList.add('show')           
      } else {
        icon.classList.remove('show')
      } 

      // checkbox.forEach(item => {
      //   if(item.checked) {
      //     let parent = item.closest('.filter-post__option');
      //     filterBtnText.textContent = parent.querySelector('label').textContent;

      //     if (parent.querySelector('img')) {
      //       icon.src = parent.querySelector('img').getAttribute('src');
      //       icon.classList.add('show')           
      //     } else {
      //       icon.classList.remove('show')
      //     }  
      //   }
      // });
    }
    
    // Set default text when no checked elements
    if (checkCounter < 1) {
      filterBtnText.textContent = filterBtn.dataset.defaultText;
      icon.classList.remove('show');
    }

    // Render counter 
    if ( checkCounter > 1) {
      filterCount.classList.add('show');        
      filterCount.textContent = "+ " + (checkCounter - 1);
    } else {      
      filterCount.classList.remove('show');
    }
  };

  filterForm.addEventListener('reset', function(){    
    checkCounter = 0;
    this.previousElementSibling.querySelector('.filterCount').classList.remove('show');
    icon.classList.remove('show');
    filterBtnText.textContent = filterBtn.dataset.defaultText;
  });
  

  function showFilterForm(e) {
    e.preventDefault();    
    filterForm.classList.toggle('show');
  }

  function postCountHandler() {
    //this.previousElementSibling.querySelector('.filterCount').classList.add('show');    
  }
};

filterPost();




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