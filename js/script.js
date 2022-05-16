
/* Function for changing head color */
const scrollHeader = () => {
    const header = document.getElementById('page-header');
    const header_logo = document.querySelector('.profile-photo');

    if (this.scrollY >= 80) {
      header.classList.add('scroll-header');
      header_logo.classList.add('show');
    }
    else {
      header.classList.remove('scroll-header');
      header_logo.classList.remove('show');
    }
  }
  window.addEventListener('scroll', scrollHeader);
  
/* Function for adding active link */
const navItems = document.querySelector('.navigation-list');

const setActive = e => {
  const active = navItems.querySelector('.navigation-list li a.active');
  if(active){
    active.classList.remove('active')
  }

  e.target.classList.add('active')
}

navItems.addEventListener("click", setActive);

/* Add active to the nav-item after scrolling  */
const sections = document.querySelectorAll('section');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navigation-list a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.navigation-list a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// Toggle menu on small screens

function toggleMenu() {
  let menu = document.querySelector('.menu-container');
  menu.classList.toggle('visible');
}

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMenu);

// Hide mobile menu after a menu item has been clicked

function hideMenu() {
  let menu = document.querySelector('.menu-container');
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  }
}

menuList = document.querySelector('.menu');
menuList.addEventListener('click', hideMenu);
