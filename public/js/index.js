let mainNav = document.getElementById('non-sticky');
let movingNav = document.getElementById('sticky');
let aboutSection = document.getElementById('about');
let portfolioSection = document.getElementById('portfolio');
let contactSection = document.getElementById('contact');
let stickyMenu = document.querySelectorAll('#sticky .nav__menu .nav__menu-item');
let nonStickyMenu = document.querySelectorAll('#non-sticky .nav__menu .nav__menu-item');

window.addEventListener('scroll', (event)=>{
    if(window.scrollY >= (mainNav.offsetTop + mainNav.offsetHeight)){
        movingNav.classList.add('active');
    }
    else if(window.scrollY <= mainNav.offsetTop){
        movingNav.classList.remove('active');
    }
    if(window.scrollY < (aboutSection.offsetTop - 1) && window.scrollY < (portfolioSection.offsetTop - 1) && window.scrollY < (contactSection.offsetTop - 1)){
        stickyMenu.forEach((stickyitem) => {
            if(stickyitem.classList.contains('--active')){
                stickyitem.classList.remove('--active');
                stickyMenu.forEach((home)=>{
                    if(home.id === 'home-sticky'){
                        home.classList.add('--active');
                    }
                });
            }
        });
        nonStickyMenu.forEach((nonstickyitem) => {
            if(nonstickyitem.classList.contains('--active')){
                nonstickyitem.classList.remove('--active');
                nonStickyMenu.forEach((home)=>{
                    if(home.id === 'home-static'){
                        home.classList.add('--active');
                    }
                });
            }
        });
    }
    if(window.scrollY >= (aboutSection.offsetTop - 1) && window.scrollY < (portfolioSection.offsetTop - 1) && window.scrollY < (contactSection.offsetTop - 1)){
        stickyMenu.forEach((stickyitem) => {
            if(stickyitem.classList.contains('--active')){
                stickyitem.classList.remove('--active');
                stickyMenu.forEach((about)=>{
                    if(about.id === 'about-sticky'){
                        about.classList.add('--active');
                    }
                });
            }
        });
        nonStickyMenu.forEach((nonstickyitem) => {
            if(nonstickyitem.classList.contains('--active')){
                nonstickyitem.classList.remove('--active');
                nonStickyMenu.forEach((about)=>{
                    if(about.id === 'about-static'){
                        about.classList.add('--active');
                    }
                });
            }
        });
    }
    if(window.scrollY > aboutSection.offsetTop && window.scrollY >= (portfolioSection.offsetTop - 1) && window.scrollY < (contactSection.offsetTop - 1)){
        stickyMenu.forEach((stickyitem) => {
            if(stickyitem.classList.contains('--active')){
                stickyitem.classList.remove('--active');
                stickyMenu.forEach((portfolio)=>{
                    if(portfolio.id === 'portfolio-sticky'){
                        portfolio.classList.add('--active');
                    }
                });
            }
        });
        nonStickyMenu.forEach((nonstickyitem) => {
            if(nonstickyitem.classList.contains('--active')){
                nonstickyitem.classList.remove('--active');
                nonStickyMenu.forEach((portfolio)=>{
                    if(portfolio.id === 'portfolio-static'){
                        portfolio.classList.add('--active');
                    }
                });
            }
        });
    }
    if(window.scrollY > aboutSection.offsetTop && window.scrollY > portfolioSection.offsetTop && window.scrollY >= (contactSection.offsetTop - 5)){
        stickyMenu.forEach((stickyitem) => {
            if(stickyitem.classList.contains('--active')){
                stickyitem.classList.remove('--active');
                stickyMenu.forEach((contact)=>{
                    if(contact.id === 'contact-sticky'){
                        contact.classList.add('--active');
                    }
                });
            }
        });
        nonStickyMenu.forEach((nonstickyitem) => {
            if(nonstickyitem.classList.contains('--active')){
                nonstickyitem.classList.remove('--active');
                nonStickyMenu.forEach((contact)=>{
                    if(contact.id === 'contact-static'){
                        contact.classList.add('--active');
                    }
                });
            }
        });
    }
});
window.addEventListener('load', (event)=>{
    if(window.scrollY >= (mainNav.offsetTop + mainNav.offsetHeight)){
        movingNav.classList.add('active');
    }
    else if(window.scrollY <= mainNav.offsetTop){
        movingNav.classList.remove('active');
    }
});