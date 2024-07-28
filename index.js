// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


/*============ taggle icon navbar ===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*============ Scroll section active link ===========*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth ) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');

            });

        };
    });
    /*============ Scroll section active link ===========*/
    let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

    /*============ remove taggle icon and  navbar when click navbar link(scroll) ===========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    /*============ Scroll reveal ===========*/
    ScrollReveal({ 
       //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .protfolio-box, .contact form', 
{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,  .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,  .about-content', { origin: 'right' });

    /*============ typed js ===========*/
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
        typedSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
