const hamburgerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const layout = document.querySelector('.layout');

hamburgerMenu.addEventListener('click', ()=>{
    console.log("clicked")
    mobileMenu.style.left = 0 + 'px';
    layout.style.display = 'block';
});

closeMenu.addEventListener('click', ()=>{
    mobileMenu.style.left = -258 + 'px';
    layout.style.display = 'none';

});
