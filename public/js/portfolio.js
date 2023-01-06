let highlight = document.getElementById('highlighter');
let menuOptions = document.querySelectorAll('#portfolio-menu .portfolio__menu-item');







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
});

window.addEventListener('resize', ()=>{
    menuOptions.forEach((item) => {
        if(item.classList.contains('active')){
            highlight.style.left = item.offsetLeft + 'px';
            highlight.style.width = item.offsetWidth + 'px';
            highlight.style.height = item.offsetHeight + 'px';
        }
    });
});

