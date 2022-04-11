
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

/* close button js for small screen */
const closeBtn = document.querySelector('.close-btn');
const changeIcon = e =>{
  console.log(closeBtn.innerText);
  if(closeBtn.innerText === ("🞬"))
    closeBtn.innerText === ("☰");
  else
    closeBtn.innerText === ("🞬");
}

closeBtn.addEventListener('click', changeIcon);
