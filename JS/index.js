// LOADER //
var loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
})
try {
    AOS.init({
        duration: 1500,
    });
} catch {
    console.log("Connection Error");
}

// SHOW MENU //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// BACKGROUND HEADER //
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

// SCROLL UP //
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// SCROLL-SECTION ACTIVE LINK //
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

// DARK/LIGHT THEME //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme);
    localStorage.setItem('selected-icon', getCurrentIcon);
})

// SCROLL REVEAL //
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal('.section_title, .about_description ,.news_headline, .offer_headline', {
    origin: 'left',
    interval: 150,
    delay: 150
})

sr.reveal('.about_subtitle, .offer_description, .room_subtitle, .service_subtitle, .news_subtitle, .news_description, .offer_subtitle, .subscribe_description', {
    origin: 'right',
    interval: 200,
    delay: 200
})

sr.reveal('.about_img, .room_wrapper, .footer_title, .footer_rights', {
    origin: 'bottom',
    distance: '100px',
    delay: 200,
    interval: 300
})

sr.reveal('.experience_content, .service_content, .footer_data', {
    origin: 'top',
    interval: 600,
    delay: 250
})