

// MY SCRIPT

let menu = document.querySelector('.menu');
const responsivMenu = document.querySelector('.responsiv-menu');
menu.addEventListener('click', function () {
  let body = document.querySelector('body');

  body.style.overflow = 'hidden';
  responsivMenu.classList.toggle('active');
})

let xach = document.querySelector('.xach');

xach.addEventListener('click', function () {
  let body = document.querySelector('body');

  body.style.overflow = 'auto';
  responsivMenu.classList.remove('active');
})


let links = document.querySelectorAll('.link');

links.forEach((val) => {
  val.addEventListener('click', () => {
    let responsivMenu = document.querySelector('.responsiv-menu');

    document.body.style.overflow = 'auto';
    responsivMenu.classList.remove('active');
  })
})





// SWIMPER !!



$(document).ready(function () {
  $('.link').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.box').show('1000');
    }
    else {
      $('.box').not('.' + value).hide('1000');
      $('.box').filter('.' + value).show('1000');
    }
  })

  $('.link').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })

})






let swiperPopular = new Swiper(".popular-swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    20: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  /* 640: {
     slidesPerView: 33,
   },
   768: {
     slidesPerView: 4,
     spaceBetween: 40,
   },*/
});
