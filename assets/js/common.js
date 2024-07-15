const header = document.querySelector('.header-container');
const socialLinks = document.querySelector('.social-links');
const openBtn = document.querySelector('.hamburger-menu-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('header .overlay');
const menu = document.querySelector('.menu');
const toggleLanguage = document.querySelector('.language p');
const languages = document.querySelector('.languages');
const languagesItem = document.querySelectorAll('.languages p');
const navItems = document.querySelectorAll('.nav-item a');
const menuLinks = document.querySelectorAll('.menu ul li a');

toggleLanguage.addEventListener("click", function () {
    languages.classList.toggle('active-languages')
})

document.querySelectorAll('.languages p').forEach(function (link) {
    link.addEventListener('click', function () {
        let text = link.textContent;
        link.closest('.language').querySelector('p').firstChild.textContent = text;
        languages.classList.remove('active-languages');
    });
});

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 100) {
        header.classList.add('active-header')
    }
    else {
        header.classList.remove('active-header')
    }
})


overlay.addEventListener("click", function () {
    menu.classList.remove('active-menu')
    overlay.style.display = "none";
})



function handleNavClick(event) {
    event.preventDefault();

    navItems.forEach(nav => nav.parentElement.classList.remove('active-item'));
    menuLinks.forEach(nav => nav.parentElement.classList.remove('active-item'));

    this.parentElement.classList.add('active-item');

    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

    if (menu.contains(this)) {
        menu.classList.remove('active-menu');
        overlay.style.display = 'none';
    }
}

navItems.forEach(item => item.addEventListener('click', handleNavClick));
menuLinks.forEach(item => item.addEventListener('click', handleNavClick));

openBtn.addEventListener('click', function () {
    menu.classList.add('active-menu');
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    menu.classList.remove('active-menu');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', function () {
    menu.classList.remove('active-menu');
    overlay.style.display = 'none';
});

