const cartIcon = document.querySelector('.cart');
const cartBox = document.querySelector('.cart-box');

cartIcon.addEventListener('click',()=>{
    if(cartBox.classList.contains('not-active')){
        cartBox.classList.remove('not-active');
    }else{
        cartBox.classList.add('not-active');
    }
});