const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const header = document.querySelector('.header-container');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-links-active');
    if(nav.classList.contains('nav-links-active')){
        hamburger.setAttribute('src', 'assets/icons/close.svg');
        header.style.cssText = 'filter: brightness(30%);';
    } else {
        hamburger.setAttribute('src', 'assets/icons/hamburger.svg');
        header.style.cssText = 'filter: brightness(100%);';
    }
})