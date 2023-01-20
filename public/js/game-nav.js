let dropdownButton = document.getElementById('projects-button');
let dropdown = document.getElementById('projects-dropdown');
let dropdownHeight = dropdown.offsetHeight;
dropdown.style.height = 0 + 'px';
dropdown.style.visibility = 'visible';

window.addEventListener('click', (event)=>{
    if(event.target === dropdownButton){
        if(dropdown.classList.contains('active')){
          dropdown.classList.remove('active');
          dropdown.style.height = 0 + 'px';
        }
        else{
          dropdown.classList.add('active');
          dropdown.style.height = dropdownHeight + 'px';
        }
    }
    else{
        if(dropdown.classList.contains('active')){
            dropdown.classList.remove('active');
            dropdown.style.height = 0 + 'px';
          }
    }
});
window.addEventListener('scroll', (event)=>{
    if(dropdown.classList.contains('active')){
        dropdown.classList.remove('active');
        dropdown.style.height = 0 + 'px';
      }
});
window.addEventListener('resize', (event)=>{
    if(dropdown.classList.contains('active')){
        dropdown.classList.remove('active');
        dropdown.style.height = 0 + 'px';
      }
});