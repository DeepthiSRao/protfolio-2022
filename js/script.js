/* Function for change navnar color on scroll */
const scrollHeader = () => {
    const header = document.getElementById('page-header');
    //const header_logo = document.querySelector('.profile-photo');

    if (this.scrollY >= 80) {
      header.classList.add('scroll-header');
      //header_logo.classList.add('show');
    }
    else {
      header.classList.remove('scroll-header');
      //header_logo.classList.remove('show');
    }
  }
  window.addEventListener('scroll', scrollHeader);
  
/* Function for adding active link to navbar*/
const navItems = document.querySelector('.navigation-list');

const setActive = e => {
  const active = navItems.querySelector('.navigation-list li a.active');
  if(active){
    active.classList.remove('active')
  }

  e.target.classList.add('active')
}

navItems.addEventListener("click", setActive);

/* Set active to the nav-item after scrolling  */
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

/* Sending message */
const submitBtn = document.querySelector('.btn-submit');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userMessage = document.getElementById('message').value;

  let templateParams = {
    from_name: userName,
    from_email: userEmail,
    message: userMessage
  }
  if (userName.value !== "" && 
      userEmail.value !== "" && 
      userMessage.value !== "") {
      sendMail({
        from_name: userName,
        from_email: userEmail,
        message: userMessage
      });
  }
});

const sendMail = (templateParams) => {
  console.log('Trying to send an email', templateParams);
  
  emailjs.send('service_gmucw3h', 'template_skvkxzg', templateParams, "BZZ0KT-jVBk-N6PU-")
         .then(function(response) {
            console.log('Message successfully sent!');
            window.location.reload(false);
          }, function(error) {
              console.log('FAILED to send message');
          });
}

/* Display hamberger menu on small screens */
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.main-navigation');
let menuList = document.querySelector('.navigation-list');

const toggleMenu = () => {
  menuList.classList.toggle('show');
}
hamburger.addEventListener('click', toggleMenu);

// Hide navbar after a menu item has been clicked
const hideMenu = () => {
  if (menuList.classList.contains('show')) {
    menuList.classList.remove('show');
  }
}

menuList.addEventListener('click', hideMenu);
