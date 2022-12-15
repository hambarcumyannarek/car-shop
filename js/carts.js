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
