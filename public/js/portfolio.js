let highlight = document.getElementById('highlighter');
let menuOptions = document.querySelectorAll('#portfolio-menu .portfolio__menu-item');
let workOptions = document.querySelectorAll('#portfolio-work-menu .work');

window.addEventListener('resize', ()=>{
    menuOptions.forEach((item) => {
        if(item.classList.contains('active')){
            highlight.style.left = item.offsetLeft + 'px';
            highlight.style.width = item.offsetWidth + 'px';
            highlight.style.height = item.offsetHeight + 'px';
        }
    });
});

menuOptions.forEach((option) => {
    if(option.classList.contains('active')){
        highlight.style.left = option.offsetLeft + 'px';
        highlight.style.width = option.offsetWidth + 'px';
        highlight.style.height = option.offsetHeight + 'px';
    }

    option.addEventListener('mouseenter', (event)=>{
        highlight.style.left = option.offsetLeft + 'px';
        highlight.style.width = option.offsetWidth + 'px';
        highlight.style.height = option.offsetHeight + 'px';
    });

    option.addEventListener('mouseleave', (event)=>{   
        menuOptions.forEach((item) => {
            if(item.classList.contains('active')){
                highlight.style.left = item.offsetLeft + 'px';
                highlight.style.width = item.offsetWidth + 'px';
                highlight.style.height = item.offsetHeight + 'px';
            }
        });
    });

    option.addEventListener('click',(event)=>{
        
    });
});

workOptions.forEach((work)=>{
    work.addEventListener('mouseenter', (event)=>{
        work.querySelector('.work__overlay').classList.add('hovered');
        work.querySelector('.work__title').classList.add('visible');
        work.querySelector('.work__desc').classList.add('visible');
        work.querySelector('.work__button').classList.add('visible');
    });
    work.addEventListener('mouseleave', (event)=>{
        work.querySelector('.work__overlay').classList.remove('hovered');
        work.querySelector('.work__title').classList.remove('visible');
        work.querySelector('.work__desc').classList.remove('visible');
        work.querySelector('.work__button').classList.remove('visible');
    });
});

