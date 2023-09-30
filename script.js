const menuToggler = document.querySelector('.menu_icon');
const body = document.querySelector('body');

menuToggler.addEventListener('click', ()=> {
    body.classList.toggle('open');
});

const navElements = document.querySelectorAll('.nav_link').forEach(el => {
    el.addEventListener('click', ()=>{
        body.classList.remove('open');
       
    });
});