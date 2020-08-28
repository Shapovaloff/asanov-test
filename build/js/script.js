'use strict';

(function () {
  var orderBtn = document.querySelectorAll('.order__btn');
  var orderBtnBlock = document.querySelectorAll('.order__block-btn');

  var hiddenButton = function (index) {
    orderBtn.forEach(function (item, i) {
      if (i === index) {
        item.style.display = 'none';
      }
    });
  };

  var showButton = function (index) {
    orderBtnBlock.forEach(function (item, i) {
      if (i === index) {
        item.style.display = 'flex';
      }
    });
  };

  orderBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
      hiddenButton(index);
      showButton(index);
    });
  });
})();

// (function () {
//   var cardsWrapper = document.querySelector('.card__wrapper');

//   var breakpoint = window.matchMedia('(min-width:1280px)');
//   var mySwiper;
//   var breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (mySwiper) {
//         mySwiper.destroy(true, true);
//       }
//       return;
//     } else if (breakpoint.matches === false) {
//       enableSwiper();
//     }
//   };


//   var enableSwiper = function () {
//     if (cardsWrapper) {
//       mySwiper = new window.Swiper(cardsWrapper, {
//         freeMode: true,
//         nextEl: '.cards__button--next',
//         prevEl: '.cards__button--prev',
//         slidesPerView: 3,
//         spaceBetween: 0,
//         // grabCursor: true,
//       });
//     }
//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();
