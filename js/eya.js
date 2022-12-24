const eye = document.querySelector('#eya');
let vse = eye.querySelector('.vse');
let eyaCont = eye.querySelector('.container');
let closeEye = eyaCont.querySelector('.close');
let bgImg = eyaCont.querySelector('.img-center img');
let smImg = eyaCont.querySelectorAll('.img-small img');
let box = eyaCont.querySelectorAll('.arag .box');
let title = eyaCont.querySelector('.eyeTitle');
let gin = eyaCont.querySelector('.gin');
let card = document.querySelectorAll('#addCont .card');

let smImgCont = eyaCont.querySelector('.img-small');
card.forEach((val) => {
    let eyeBtn = val.querySelector('.eye');
    eyeBtn.addEventListener('click', () => {
        addd(val);
        puchur();   
    });

    function addd(event) {
        const bigImg = event.querySelector('.eyaHelp .bg');
        const smallImg = event.querySelectorAll('.eyaHelp .smImg img');
        let carN = val.querySelector('.carN');
        let carP = val.querySelector('.carP');
        let ginBox = val.querySelector('.gin');
        let smImgContI = eyaCont.querySelectorAll('.img-small img');
        eye.classList.toggle('active');
        document.body.style.overflowY = 'hidden';
        bgImg.src = bigImg.src;
        gin.innerText = `$ ${ginBox.innerText}`;
        title.innerText = `${carN.innerText}  ${carP.innerText}`;
        smImgContI.forEach(val => val.style.display = 'none');
        for (let i = 0; i < smallImg.length; i++) {
            let img = document.createElement('img');
            if(i === 0) {
                img.setAttribute('class', 'active');
            }
            img.setAttribute('src', smallImg[i].src);
            smImgCont.appendChild(img);
        }

    }
})


function removeEye() {
    eye.classList.remove('active');
    document.body.style.overflowY = 'auto';
}

closeEye.addEventListener('click', () => {
    removeEye();
})

vse.addEventListener('click', () => {
    removeEye();
})


function puchur() {
    let smImg1 = eyaCont.querySelectorAll('.img-small img');
    smImg1.forEach((val) => {
        val.addEventListener('click', function () {
            bgImg.src = val.src;
            myRemove(smImg1);
            val.classList.add('active');
        })
    })
    }

function myRemove(event1) {
    event1.forEach((val) => {
        val.classList.remove("active");
    })
}

box.forEach((val) => {
    val.addEventListener('click', () => {
        myRemove(box);
        val.classList.add('active');
    })
})