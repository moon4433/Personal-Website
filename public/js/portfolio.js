let highlight = document.getElementById('highlighter');
let menuOptions = document.querySelectorAll('#portfolio-menu .portfolio__menu-item');
let workOptions = document.querySelectorAll('#portfolio-work-menu .work');
let timeout = 0;

workOptions.forEach((work)=>{
    let workImage = work.querySelector('.work__container .work__img');
    work.style.width = workImage.offsetWidth + 'px';
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
        timeout = 1;
        highlight.style.left = option.offsetLeft + 'px';
        highlight.style.width = option.offsetWidth + 'px';
        highlight.style.height = option.offsetHeight + 'px';
    });

    option.addEventListener('mouseleave', (event)=>{ 
        timeout = 0;
        setTimeout(()=>{
            if(timeout === 0){
                menuOptions.forEach((item) => {
                    if(item.classList.contains('active')){
                        highlight.style.left = item.offsetLeft + 'px';
                        highlight.style.width = item.offsetWidth + 'px';
                        highlight.style.height = item.offsetHeight + 'px';
                    }
                });
            }
        },500);
    });

    option.addEventListener('click',(event)=>{
        let currentShow = 'all';
        menuOptions.forEach((selection)=>{
            if(selection.classList.contains('active')){
                selection.classList.remove('active');
                if(event.target.parentNode.classList.contains('portfolio__menu-item')){
                    event.target.parentNode.classList.add('active');
                    currentShow = event.target.parentNode.id;
                }
            }
        });
        workOptions.forEach((selectedItems)=>{
            let currentImage = selectedItems.querySelector('.work__container .work__img');
            if(currentShow === 'all'){
                console.log('all');
            }
            else if(currentShow !== 'all' && selectedItems.classList.contains(currentShow)){ 
                console.log(currentShow); 
            }
            else if(!selectedItems.classList.contains(currentShow)){
                console.log('Stuff not to show...')
            }
        });
    });
});



