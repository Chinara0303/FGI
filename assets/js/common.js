const header = document.querySelector('.header-container');
const socialLinks = document.querySelector('.social-links');
const openBtn = document.querySelector('.hamburger-menu-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const menuItem = document.querySelector('.menu ul li');
const toggleLanguage = document.querySelector('.language a');
const languages = document.querySelector('.languages');
const languagesItem = document.querySelectorAll('.languages a');

toggleLanguage.addEventListener("click", function () {
    languages.classList.toggle('active-languages')
})

document.querySelectorAll('.languages a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let text = link.textContent;
        link.closest('.language').querySelector('a').firstChild.textContent = text;
        languages.classList.remove('active-languages')
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
openBtn.addEventListener("click", function () {
    menu.classList.add('active-menu');
    overlay.style.display = "block";
})

closeBtn.addEventListener("click", function () {
    menu.classList.remove('active-menu')
    overlay.style.display = "none";
})
overlay.addEventListener("click", function () {
    menu.classList.remove('active-menu')
    overlay.style.display = "none";
})
menuItem.addEventListener("click", function () {
    menu.classList.remove('active-menu')
    overlay.style.display = "none";
})

// window.addEventListener('scroll', function () {
//     if (this.window.scrollY >= 500) {
//         socialLinks.classList.add('fixed-social')
//     }
//     else {
//         socialLinks.classList.remove('fixed-social')
//     }
// })


