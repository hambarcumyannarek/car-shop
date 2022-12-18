
                //            Shoping Cards
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');

//                        delete icons

const delete1 = document.querySelector('#delete1');
const delete2 = document.querySelector('#delete2');
const delete3 = document.querySelector('#delete3');
const delete4 = document.querySelector('#delete4');
const delete5 = document.querySelector('#delete5');
const delete6 = document.querySelector('#delete6');
                //             Icons


const teslaXIcon = document.querySelector('#TeslaXIcon');
const tesla3Icon = document.querySelector('#Tesla3Icon');
const audiIcon = document.querySelector('#audiIcon');
const porsheIcon = document.querySelector('#porsheIcon');
const porshe2Icon = document.querySelector('#porshe2Icon');
const tesla6Icon = document.querySelector('#tesla6Icon');


                //              Shoping Cards Parameters

const card1Img = document.querySelector('#card1Img');
const card1Name = document.querySelector('#card1Name');
const card1Price = document.querySelector('#card1Price');
const card1Description = document.querySelector('#card1Description');
const card2Img = document.querySelector('#card2Img');
const card2Name = document.querySelector('#card2Name');
const card2Price = document.querySelector('#card2Price');
const card2Description = document.querySelector('#card2Discription');
const card3Img = document.querySelector('#card3Img');
const card3Name = document.querySelector('#card3Name');
const card3Price = document.querySelector('#card3Price');
const card3Description = document.querySelector('#card3Description');
const card4Img = document.querySelector('#card4Img');
const card4Name = document.querySelector('#card4Name');
const card4Price = document.querySelector('#card4Price');
const card4Description = document.querySelector('#card4Description');
const card5Img = document.querySelector('#card5Img');
const card5Name = document.querySelector('#card5Name');
const card5Price = document.querySelector('#card5Price');
const card5Description = document.querySelector('#card5Description');
const card6Img = document.querySelector('#card6Img');
const card6Name = document.querySelector('#card6Name');
const card6Price = document.querySelector('#card6Price');
const card6Description = document.querySelector('#card6Description');



const carsInfo = [
    {
        carName: 'Tesla',
        carModel: 'Model X',
        carImg: 'img/featured1.png',
        carGin: '$165,900', // ??? petq e lini numTeslaX
    },


    {
        carName: 'Tesla',
        carModel: 'Model 3',
        carImg: 'img/featured2.png',
        carGin: '$135,900' // ??? petq e lini numTeslaX
    },


    {
        carName: 'Audi',
        carModel: 'E-Tron',
        carImg: 'img/featured3.png',
        carGin: '$175,900' // ??? petq e lini numTeslaX
    },


    {
        carName: 'Porsche',
        carModel: 'Boxster 987',
        carImg: 'img/featured4.png',
        carGin: '$124,900' // ??? petq e lini numTeslaX
    },


    {
        carName: 'Porsche',
        carModel: 'Panamera',
        carImg: 'img/featured5.png',
        carGin: '$135,900' // ??? petq e lini numTeslaX
    },


    {
        carName: 'Tesla',
        carModel: 'Seria 6',
        carImg: 'img/a..jpg',
        carGin: '$135,900' // ??? petq e lini numTeslaX
    },
]


const cardArray = [card1,card2,card3,card4,card5,card6];

teslaXIcon.addEventListener('click', () => {
    for (let i = 0; i < cardArray.length; i++) {
      const val = cardArray[i];
        if (val.style.display === 'flex') {
            if(i === 0) {
               if (card1Description.innerHTML === carsInfo[0].carModel) {      
                  break;
               } else {
                  continue;
               }
            } else if(i === 1) {
               if (card2Description.innerHTML === carsInfo[0].carModel) {
                  break;
               } else {
                  continue;
               }
            } else if(card3Description.innerHTML === carsInfo[0].carModel) {
               if (card3Description.innerHTML === carsInfo[0].carModel) {
                  break;
               } else {
                  continue;
               }
            } else if(i === 3) {
               if (card4Description.innerHTML === carsInfo[0].carModel) {
                  break;
               } else {
                  continue;
               }
            }  else if(i === 4) {
               if (card5Description.innerHTML === carsInfo[0].carModel) {
                  break;
               } else {
                  continue;
               }
            }  else if(i === 5) {
               if (card6Description.innerHTML === carsInfo[0].carModel) {
                  break;
               } else {
                  continue;
               }
            }
        }
       else if(val.style.display !== 'flex') {
            if (i === 0) {
               countNum++;
               card1Img.src = carsInfo[0].carImg;
               card1Name.innerHTML = carsInfo[0].carName;
               card1Description.innerHTML = carsInfo[0].carModel;
               card1Price.innerHTML = carsInfo[0].carGin;
            } else if (i === 1){
               countNum++;
               card2Img.src = carsInfo[0].carImg;
               card2Name.innerHTML = carsInfo[0].carName;
               card2Description.innerHTML = carsInfo[0].carModel;
               card2Price.innerHTML = carsInfo[0].carGin;
            } else if(i === 2) {
               countNum++;
               card3Img.src = carsInfo[0].carImg;
               card3Name.innerHTML = carsInfo[0].carName;
               card3Description.innerHTML = carsInfo[0].carModel;
               card3Price.innerHTML = carsInfo[0].carGin;
            } else if (i === 3) {
               countNum++;
               card4Img.src = carsInfo[0].carImg;
               card4Name.innerHTML = carsInfo[0].carName;
               card4Description.innerHTML = carsInfo[0].carModel;
               card4Price.innerHTML = carsInfo[0].carGin;
            } else if (i === 4) {
               countNum++;
               card5Img.src = carsInfo[0].carImg;
               card5Name.innerHTML = carsInfo[0].carName;
               card5Description.innerHTML = carsInfo[0].carModel;
               card5Price.innerHTML = carsInfo[0].carGin;
            } else if(i === 5) {
               countNum++;
               card6Img.src = carsInfo[0].carImg;
               card6Name.innerHTML = carsInfo[0].carName;
               card6Description.innerHTML = carsInfo[0].carModel;
               card6Price.innerHTML = carsInfo[0].carGin;
            }
            val.style.display = 'flex';
    
            break;
            // console.log(val + " " + i);
        }
    }
})

tesla3Icon.addEventListener('click', () => {
   for (let i = 0; i < cardArray.length; i++) {
        const val = cardArray[i];
        if (val.style.display === 'flex') {
         if(i === 0) {
            if (card1Description.innerHTML === carsInfo[1].carModel) {      
               break;
            } else{
               continue;
            }
         } else if(i === 1) {
            if (card2Description.innerHTML === carsInfo[1].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 2) {
            if (card3Description.innerHTML === carsInfo[1].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 3) {
            if (card4Description.innerHTML === carsInfo[1].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 4) {
            if (card5Description.innerHTML === carsInfo[1].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 5) {
            if (card6Description.innerHTML === carsInfo[1].carModel) {
               break;
            } else {
               continue;
            }
         }
     }
        else if(val.style.display !== 'flex') {
            if (i === 0) {
               countNum++;
               card1Img.src = carsInfo[1].carImg;
               carsInfo[1].carImg;
               card1Name.innerHTML = carsInfo[1].carName;
               card1Description.innerHTML = carsInfo[1].carModel;
               card1Price.innerHTML = carsInfo[1].carGin;
            } else if (i === 1){
               countNum++;
               card2Img.src = carsInfo[1].carImg;
               card2Name.innerHTML = carsInfo[1].carName;
               card2Description.innerHTML = carsInfo[1].carModel;
               card2Price.innerHTML = carsInfo[1].carGin;
            } else if(i === 2) {
               countNum++;
               card3Img.src = carsInfo[1].carImg;
               card3Name.innerHTML = carsInfo[1].carName;
               card3Description.innerHTML = carsInfo[1].carModel;
               card3Price.innerHTML = carsInfo[1].carGin;
            } else if (i === 3) {
               countNum++;
               card4Img.src = carsInfo[1].carImg;
               card4Name.innerHTML = carsInfo[1].carName;
               card4Description.innerHTML = carsInfo[1].carModel;
               card4Price.innerHTML = carsInfo[1].carGin;
            } else if (i === 4) {
               countNum++;
               card5Img.src = carsInfo[1].carImg;
               card5Name.innerHTML = carsInfo[1].carName;
               card5Description.innerHTML = carsInfo[1].carModel;
               card5Price.innerHTML = carsInfo[1].carGin;
            } else if(i === 5) {
               countNum++;
               card6Img.src = carsInfo[1].carImg;
               card6Name.innerHTML = carsInfo[1].carName;
               card6Description.innerHTML = carsInfo[1].carModel;
               card6Price.innerHTML = carsInfo[1].carGin;
            }
            val.style.display = 'flex';
    
            break;
            // console.log(val + " " + i);
        }
    }
})

audiIcon.addEventListener('click', () => {
    for (let i = 0; i < cardArray.length; i++) {
        const val = cardArray[i];
        if (val.style.display === 'flex') {
         if(i === 0) {
            if (card1Description.innerHTML === carsInfo[2].carModel) {      
               break;
            } else{
               continue;
            }
         } else if(i === 1) {
            if (card2Description.innerHTML === carsInfo[2].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 2) {
            if (card3Description.innerHTML === carsInfo[2].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 3) {
            if (card4Description.innerHTML === carsInfo[2].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 4) {
            if (card5Description.innerHTML === carsInfo[2].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 5) {
            if (card6Description.innerHTML === carsInfo[2].carModel) {
               break;
            } else {
               continue;
            }
         }
     }
        else if(val.style.display !== 'flex') {
            if (i === 0) {
               countNum++;
               card1Img.src = carsInfo[2].carImg;
               card1Name.innerHTML = carsInfo[2].carName;
               card1Description.innerHTML = carsInfo[2].carModel;
               card1Price.innerHTML = carsInfo[2].carGin;
            } else if (i === 1){
               countNum++;
               card2Img.src = carsInfo[2].carImg;
               card2Name.innerHTML = carsInfo[2].carName;
               card2Description.innerHTML = carsInfo[2].carModel;
               card2Price.innerHTML = carsInfo[2].carGin;
            } else if(i === 2) {
               countNum++;
               card3Img.src = carsInfo[2].carImg;
               card3Name.innerHTML = carsInfo[2].carName;
               card3Description.innerHTML = carsInfo[2].carModel;
               card3Price.innerHTML = carsInfo[2].carGin;
            } else if (i === 3) {
               countNum++;
               card4Img.src = carsInfo[2].carImg;
               card4Name.innerHTML = carsInfo[2].carName;
               card4Description.innerHTML = carsInfo[2].carModel;
               card4Price.innerHTML = carsInfo[2].carGin;
            } else if (i === 4) {
               countNum++;
               card5Img.src = carsInfo[2].carImg;
               card5Name.innerHTML = carsInfo[2].carName;
               card5Description.innerHTML = carsInfo[2].carModel;
               card5Price.innerHTML = carsInfo[2].carGin;
            } else if(i === 5) {
               countNum++;
               card6Img.src = carsInfo[2].carImg;
               card6Name.innerHTML = carsInfo[2].carName;
               card6Description.innerHTML = carsInfo[2].carModel;
               card6Price.innerHTML = carsInfo[2].carGin;
            }
            val.style.display = 'flex';
    
            break;
            // console.log(val + " " + i);
        }
    }
})

porsheIcon.addEventListener('click', () => {
    for (let i = 0; i < cardArray.length; i++) {
        const val = cardArray[i];
        if (val.style.display === 'flex') {
         if(i === 0) {
            if (card1Description.innerHTML === carsInfo[3].carModel) {      
               break;
            } else{
               continue;
            }
         } else if(i === 1) {
            if (card2Description.innerHTML === carsInfo[3].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 2) {
            if (card3Description.innerHTML === carsInfo[3].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 3) {
            if (card4Description.innerHTML === carsInfo[3].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 4) {
            if (card5Description.innerHTML === carsInfo[3].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 5) {
            if (card6Description.innerHTML === carsInfo[3].carModel) {
               break;
            } else {
               continue;
            }
         }
     }
        else if(val.style.display !== 'flex') {
            if (i === 0) {
               countNum++;
               card1Img.src = carsInfo[3].carImg;
               card1Name.innerHTML = carsInfo[3].carName;
               card1Description.innerHTML = carsInfo[3].carModel;
               card1Price.innerHTML = carsInfo[3].carGin;
            } else if (i === 1){
               countNum++;
               card2Img.src = carsInfo[3].carImg;
               card2Name.innerHTML = carsInfo[3].carName;
               card2Description.innerHTML = carsInfo[3].carModel;
               card2Price.innerHTML = carsInfo[3].carGin;
            } else if(i === 2) {
               countNum++;
               card3Img.src = carsInfo[3].carImg;
               card3Name.innerHTML = carsInfo[3].carName;
               card3Description.innerHTML = carsInfo[3].carModel;
               card3Price.innerHTML = carsInfo[3].carGin;
            } else if (i === 3) {
               countNum++;
               card4Img.src = carsInfo[3].carImg;
               card4Name.innerHTML = carsInfo[3].carName;
               card4Description.innerHTML = carsInfo[3].carModel;
               card4Price.innerHTML = carsInfo[3].carGin;
            } else if (i === 4) {
               countNum++;
               card5Img.src = carsInfo[3].carImg;
               card5Name.innerHTML = carsInfo[3].carName;
               card5Description.innerHTML = carsInfo[3].carModel;
               card5Price.innerHTML = carsInfo[3].carGin;
            } else if(i === 5) {
               countNum++;
               card6Img.src = carsInfo[3].carImg;
               card6Name.innerHTML = carsInfo[3].carName;
               card6Description.innerHTML = carsInfo[3].carModel;
               card6Price.innerHTML = carsInfo[3].carGin;
            }
            val.style.display = 'flex';
    
            break;
            // console.log(val + " " + i);
        }
    }
})
porshe2Icon.addEventListener('click', () => {
    for (let i = 0; i < cardArray.length; i++) {
        const val = cardArray[i];
        if (val.style.display === 'flex') {
         if(i === 0) {
            if (card1Description.innerHTML === carsInfo[4].carModel) {      
               break;
            } else{
               continue;
            }
         } else if(i === 1) {
            if (card2Description.innerHTML === carsInfo[4].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 2) {
            if (card3Description.innerHTML === carsInfo[4].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 3) {
            if (card4Description.innerHTML === carsInfo[4].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 4) {
            if (card5Description.innerHTML === carsInfo[4].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 5) {
            if (card6Description.innerHTML === carsInfo[4].carModel) {
               break;
            } else {
               continue;
            }
         }
     }
       else if(val.style.display !== 'flex') {
            if (i === 0) {
               countNum++;
               card1Img.src = carsInfo[4].carImg;
               card1Name.innerHTML = carsInfo[4].carName;
               card1Description.innerHTML = carsInfo[4].carModel;
               card1Price.innerHTML = carsInfo[4].carGin;
            } else if (i === 1){
               countNum++;
               card2Img.src = carsInfo[4].carImg;
               card2Name.innerHTML = carsInfo[4].carName;
               card2Description.innerHTML = carsInfo[4].carModel;
               card2Price.innerHTML = carsInfo[4].carGin;
            } else if(i === 2) {
               countNum++;
               card3Img.src = carsInfo[4].carImg;
               card3Name.innerHTML = carsInfo[4].carName;
               card3Description.innerHTML = carsInfo[4].carModel;
               card3Price.innerHTML = carsInfo[4].carGin;
            } else if (i === 3) {
               countNum++;
               card4Img.src = carsInfo[4].carImg;
               card4Name.innerHTML = carsInfo[4].carName;
               card4Description.innerHTML = carsInfo[4].carModel;
               card4Price.innerHTML = carsInfo[4].carGin;
            } else if (i === 4) {
               countNum++;
               card5Img.src = carsInfo[4].carImg;
               card5Name.innerHTML = carsInfo[4].carName;
               card5Description.innerHTML = carsInfo[4].carModel;
               card5Price.innerHTML = carsInfo[4].carGin;
            } else if(i === 5) {
               countNum++;
               card6Img.src = carsInfo[4].carImg;
               card6Name.innerHTML = carsInfo[4].carName;
               card6Description.innerHTML = carsInfo[4].carModel;
               card6Price.innerHTML = carsInfo[4].carGin;
            }
            val.style.display = 'flex';
    
            break;
            // console.log(val + " " + i);
        }
    }
})
tesla6Icon.addEventListener('click', () => {
    for (let i = 0; i < cardArray.length; i++) {
        const val = cardArray[i];
        if (val.style.display === 'flex') {
         if(i === 0) {
            if (card1Description.innerHTML === carsInfo[5].carModel) {      
               break;
            } else{
               continue;
            }
         } else if(i === 1) {
            if (card2Description.innerHTML === carsInfo[5].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 2) {
            if (card3Description.innerHTML === carsInfo[5].carModel) {
               break;
            } else {
               continue;
            }
         } else if(i === 3) {
            if (card4Description.innerHTML === carsInfo[5].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 4) {
            if (card5Description.innerHTML === carsInfo[5].carModel) {
               break;
            } else {
               continue;
            }
         }  else if(i === 5) {
            if (card6Description.innerHTML === carsInfo[5].carModel) {
               break;
            } else {
               continue;
            }
         }
     }
       else if(val.style.display !== 'flex') {
            if (i === 0) {
               countNum++;
               card1Img.src = carsInfo[5].carImg;
               card1Name.innerHTML = carsInfo[5].carName;
               card1Description.innerHTML = carsInfo[5].carModel;
               card1Price.innerHTML = carsInfo[5].carGin;
            } else if (i === 1){
               countNum++;
               card2Img.src = carsInfo[5].carImg;
               card2Name.innerHTML = carsInfo[5].carName;
               card2Description.innerHTML = carsInfo[5].carModel;
               card2Price.innerHTML = carsInfo[5].carGin;
            } else if(i === 2) {
               countNum++;
               card3Img.src = carsInfo[5].carImg;
               card3Name.innerHTML = carsInfo[5].carName;
               card3Description.innerHTML = carsInfo[5].carModel;
               card3Price.innerHTML = carsInfo[5].carGin;
            } else if (i === 3) {
               countNum++;
               card4Img.src = carsInfo[5].carImg;
               card4Name.innerHTML = carsInfo[5].carName;
               card4Description.innerHTML = carsInfo[5].carModel;
               card4Price.innerHTML = carsInfo[5].carGin;
            } else if (i === 4) {
               countNum++;
               card5Img.src = carsInfo[5].carImg;
               card5Name.innerHTML = carsInfo[5].carName;
               card5Description.innerHTML = carsInfo[5].carModel;
               card5Price.innerHTML = carsInfo[5].carGin;
            } else if(i === 5) {
               countNum++;
               card6Img.src = carsInfo[5].carImg;
               card6Name.innerHTML = carsInfo[5].carName;
               card6Description.innerHTML = carsInfo[5].carModel;
               card6Price.innerHTML = carsInfo[5].carGin;
            }
            val.style.display = 'flex';
    
            break;
            // console.log(val + " " + i);
        }
    }
})



/*----------- cart ----------- */

const cartBtn = document.querySelector('.cartBtn');
const shopping = document.querySelector('.shopping');

cartBtn.addEventListener('click', function() {
    shopping.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})




/*---------- like ----------- */

const likeBtn = document.querySelector('.likeBtn');
const likeBlank = document.querySelector('.likeBlank');

likeBtn.addEventListener('click', function() {
    likeBlank.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})





/*--------------  global-close   -------------- */

const global = document.querySelectorAll('.globalSL');

global.forEach((val) => {
   let vse = val.querySelector('.globalSL .vse');
   let shopHeaderClose = val.querySelector('.globalSL-header .close');

   function close() {
      val.classList.remove('active');
      document.body.style.overflowY = 'auto';
   }

   [vse, shopHeaderClose].forEach((val2) => {
      val2.addEventListener('click', close)
   })
})





/*--------------  count  --------------*/

const contCards = document.querySelectorAll('#addCont .card');
const count = document.querySelector('.cartBtn .count');
let countNum = 0; // count

contCards.forEach((val) => {
   let buyIcon = val.querySelector('.icons .cart');
   buyIcon.addEventListener('click', function() {
         if(countNum < cardArray.length) {
            count.innerText = countNum;
         }
   }) 
})





/*-----------    delete     ---------- */

const mainCards = document.querySelectorAll('.shop-main .card');

mainCards.forEach((val) => {
   let carddelete = val.querySelector('.delete');

   carddelete.addEventListener('click', function() {
      val.style.display = 'none';
   })

   carddelete.addEventListener('click', () => {
      countNum--;
      count.innerText = countNum;
   })
})








