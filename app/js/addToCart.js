const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const addToCartBtn = document.querySelector('.add-to-cartBtn');
const productCounter = document.querySelector('.counter');
const emptyCart = document.querySelector('.empty-cart');
const checkOutBox = document.querySelector('.cart-checkout');
const cartCounter = document.querySelector('.cart-counter');

//elements is checkout box
const price_el = document.querySelector('.price');
const amount_el = document.querySelector('.amount');
const totalPrice_el = document.querySelector('.total-price');
const deleteBtn = document.querySelector('.delete-btn');



// let cartIsFull = true;
let number = 0;
let productAmount = 0 ;

document.body.addEventListener('click',(e)=>{
   console.log('hi')
});

function cartIsFull(){
    emptyCart.classList.add('not-active');
    checkOutBox.style.display = 'flex';
    cartCounter.style.display = 'flex';
    cartCounter.innerText = 1;
};

function cartIsEmpty(){
    number = 0;
    productAmount = 0;
    emptyCart.classList.remove('not-active');
    checkOutBox.style.display = 'none';
    cartCounter.style.display = 'none';
    cartCounter.innerText = '';    
}


increaseBtn.addEventListener('click',()=>{
    number++;
    productCounter.innerText = number;
});

decreaseBtn.addEventListener('click',()=>{
    if(number === 0) return;
    number--;
    productCounter.innerText = number;
});

addToCartBtn.addEventListener('click',()=>{
    if(number === 0) return;
    cartIsFull();
    let Price = Number(document.getElementById('price').innerText);

    productAmount+=number;
   
    
     price_el.innerText = `$${Price}.00`;
     amount_el.innerText = `x ${productAmount}`;
     totalPrice_el.innerText = `${Price * productAmount}.00`;


     
    deleteBtn.addEventListener('click',()=>{
        cartIsEmpty();
    });

    number = 0;
    productCounter.innerText = number;
});
