let mainNav = document.getElementById('non-sticky');
let movingNav = document.getElementById('sticky');
window.addEventListener('scroll', (event)=>{
    if(window.scrollY >= (mainNav.offsetTop + mainNav.offsetHeight + 5)){
        movingNav.classList.add('active');
    }
    else if(window.scrollY <= mainNav.offsetTop){
        movingNav.classList.remove('active');
    }
});
window.addEventListener('load', (event)=>{
    if(window.scrollY >= (mainNav.offsetTop + mainNav.offsetHeight + 5)){
        movingNav.classList.add('active');
    }
    else if(window.scrollY <= mainNav.offsetTop){
        movingNav.classList.remove('active');
    }
});