// 1. Hide and Show block

let buttonShow = document.querySelector('.button_show');
let buttonHide = document.querySelector('.button_hide');

let productBlock = document.querySelector('.product');

buttonShow.addEventListener('click', function() {
    productBlock.classList.remove('product_hide');
});

buttonHide.addEventListener('click', function() {
    productBlock.classList.add('product_hide');
});

// 2. Image slider

let buttonPrev = document.querySelector('.button_prev');
let buttonNext = document.querySelector('.button_next');

let slider = document.querySelectorAll('.about-slider__img');
let i = 0;

let imgName = document.querySelector('.about-slider__name');

buttonPrev.addEventListener('click', function() {
    slider[i].classList.remove('showed');
    i = i - 1;

    if (i < 0){
        i = slider.length - 1;
    }
    imgName.innerHTML = slider[i].alt;
    slider[i].classList.add('showed');
});

buttonNext.addEventListener('click', function() {
    slider[i].classList.remove('showed');
    i++;

    if (i >= slider.length){
        i = 0;
    };
    imgName.innerHTML = slider[i].alt;
    slider[i].classList.add('showed');
});

// 3. Content show

let body = document.body;
let time = setTimeout(function(){
    document.body.classList.remove('body_hide')
    document.body.classList.add('body_show');
}, 1);

body.addEventListener("load", time);

// 4. Anchor and Scroll

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(event) {
//         event.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });

// function smoothScroll(event) {
//   event.preventDefault();
//   const anchor = event.currentTarget.getAttribute("href")==="#" ? "body" : event.currentTarget.getAttribute("href");
//   document.querySelector(anchor).scrollIntoView({
//     behavior: "smooth",
//     block: "start"
//   });
// }

// Not tested

// function scrollTo(element) {
//     window.scroll({
//       behavior: 'smooth',
//       left: 0,
//       top: element.offsetTop
//     });
//   }
  
//   document.querySelector(".back2Top").addEventListener('click', () => {
//     scrollTo(document.querySelector(".body-top"));
//   });

  let element = document.querySelector('.body-top');
  let gotop = document.querySelector('.back2Top');
  gotop.addEventListener('click', ()=>{
    element.scrollIntoView({behavior: "smooth"});
  })

