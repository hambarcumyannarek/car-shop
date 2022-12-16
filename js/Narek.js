const cartBtn = document.querySelector('.cartBtn');
const shopping = document.querySelector('.shopping');

cartBtn.addEventListener('click', function() {
    shopping.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})

function closeShoping() {
    shopping.classList.remove('active');
    document.body.style.overflowY = 'auto';
}

const shopHeaderClose = document.querySelector('.shop-header .close');
const vse = document.querySelector('.shopping .vse');

vse.addEventListener('click', closeShoping);
shopHeaderClose.addEventListener('click', closeShoping);




const likeBtn = document.querySelector('.likeBtn');
const likeBlank = document.querySelector('.likeBlank');

likeBtn.addEventListener('click', function() {
    likeBlank.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})

function closeShoping2() {
    likeBlank.classList.remove('active');
    document.body.style.overflowY = 'auto';
}

const LshopHeaderClose = document.querySelector('.likeBlank-header .close');
const Lvse = document.querySelector('.likeBlank .vse');

Lvse.addEventListener('click', closeShoping2);
LshopHeaderClose.addEventListener('click', closeShoping2);


