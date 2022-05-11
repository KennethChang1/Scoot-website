const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-links-active');
    if(nav.classList.contains('nav-links-active')){
        hamburger.setAttribute('src', 'assets/icons/close.svg');
    } else {
        hamburger.setAttribute('src', 'assets/icons/hamburger.svg');
    }
})