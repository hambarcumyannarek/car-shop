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


const btn1 = document.querySelector('.btn1');

// const carsInfo = [
//     {
//         carName: 'Tesla',
//         carModel: 'Model X',
//         carImg: 'img/featured1.png',
//         carGin: '$165,900', // ??? petq e lini numTeslaX
//     },


//     {
//         carName: 'Tesla',
//         carModel: 'Model 3',
//         carImg: 'img/featured2.png',
//         carGin: '$135,900' // ??? petq e lini numTeslaX
//     },


//     {
//         carName: 'Audi',
//         carModel: 'E-Tron',
//         carImg: 'img/featured3.png',
//         carGin: '$175,900' // ??? petq e lini numTeslaX
//     },


//     {
//         carName: 'Porsche',
//         carModel: 'Boxster 987',
//         carImg: 'img/featured4.png',
//         carGin: '$124,900' // ??? petq e lini numTeslaX
//     },


//     {
//         carName: 'Porsche',
//         carModel: 'Panamera',
//         carImg: 'img/featured5.png',
//         carGin: '$135,900' // ??? petq e lini numTeslaX
//     },


//     {
//         carName: 'Tesla',
//         carModel: 'Seria 6',
//         carImg: 'img/a..jpg',
//         carGin: '$135,900' // ??? petq e lini numTeslaX
//     },
// ]

const carsInfo = [
    [
        'Tesla',
        'Model X',
        'img/featured1.png',
        '$165,900', // ??? petq e lini numTeslaX
    ],


    [
        'Tesla',
        'Model 3',
        'img/featured2.png',
        '$135,900' // ??? petq e lini numTeslaX
    ],


    [
        'Audi',
        'E-Tron',
        'img/featured3.png',
        '$175,900' // ??? petq e lini numTeslaX
    ],


    [
         'Porsche',
         'Boxster 987',
         'img/featured4.png',
         '$124,900' // ??? petq e lini numTeslaX
    ],


    [
         'Porsche',
         'Panamera',
         'img/featured5.png',
         '$135,900' // ??? petq e lini numTeslaX
    ],


    [
         'Tesla',
         'Seria 6',
         'img/a..jpg',
         '$135,900' // ??? petq e lini numTeslaX
    ],
]


const shopMain = document.querySelector('.shop-main');
const addCont = document.querySelectorAll('#addCont .card');
let x = document.querySelector('.x')

addCont.forEach((val) => {
    let addBtn = val.querySelector('.addBtn');
    // addBtn.addEventListener('click', function created() {
    //     let card = document.createElement('div');
    //     card.setAttribute('class', 'card');
    //     shopMain.appendChild(card);

    // })

})



alert(aaaaa)

