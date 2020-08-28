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

// Функция открытия и закрытия окна меню

(function () {
  var buttonMenu = document.querySelector('.page-header__btn');
  var navMenu = document.querySelector('.aside__nav');
  var bodyElement = document.querySelector('body');
  var subMenu = document.querySelector('.submenu-sofa');
  var btnPrev = document.querySelector('.submenu-sofa__btn-title');
  var linkSubmenu = document.querySelector('.site-list__link--sofa');
  var itemMenu = document.querySelector('.site-list__item--sofa');

  buttonMenu.addEventListener('click', function () {
    if (navMenu.classList.contains('aside__nav--closed')) {
      navMenu.classList.remove('aside__nav--closed');
      navMenu.classList.add('aside__nav--opened');
      bodyElement.style.overflow = 'hidden';
      buttonMenu.classList.remove('page-header__btn--closed');
    } else {
      navMenu.classList.add('aside__nav--closed');
      navMenu.classList.remove('aside__nav--opened');
      bodyElement.style.overflow = 'auto';
      buttonMenu.classList.add('page-header__btn--closed');

      if (subMenu.classList.contains('submenu-sofa--active')) {
        subMenu.classList.remove('submenu-sofa--active');
      }
    }
  });

  linkSubmenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    subMenu.classList.add('submenu-sofa--active');
  });

  btnPrev.addEventListener('click', function () {
    subMenu.classList.remove('submenu-sofa--active');
  });

  var breakpoint = window.matchMedia('(min-width:768px)');

  var activeSubmenu = function () {
    subMenu.classList.add('submenu-sofa--active');
  };

  var noActiveSubmenu = function () {
    subMenu.classList.remove('submenu-sofa--active');
  };

  itemMenu.addEventListener('mouseenter', activeSubmenu);
  itemMenu.addEventListener('mouseleave', noActiveSubmenu);

  var breakpointChecker = function () {
    if (breakpoint.matches === false) {
      itemMenu.removeEventListener('mouseenter', activeSubmenu);
      itemMenu.removeEventListener('mouseleave', noActiveSubmenu);
      return;
    }
  };

  breakpoint.addListener(breakpointChecker);

})();

// Фонция реализации выпадающего списка

(function () {
  var itemsTitle = document.querySelectorAll('.page-footer__subtitle');

  itemsTitle.forEach(function (item) {
    item.classList.remove('page-footer__subtitle--active');
    item.addEventListener('click', function () {
      item.classList.toggle('page-footer__subtitle--active');
    });
  });
})();


(function () {
  var gallerySlider = document.querySelector('.cards__list-container');

  var breakpoint = window.matchMedia('(min-width:768px)');
  var mySwiper;
  var breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      enableSwiper();
    }
  };

  var enableSwiper = function () {
    if (gallerySlider) {
      mySwiper = new window.Swiper(gallerySlider, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 0,
        pagination: {
          clickable: true,
        },
      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();
