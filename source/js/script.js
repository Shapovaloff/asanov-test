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
  var overflow = document.querySelector('.aside__overflow');

  var openMenu = function () {
    navMenu.classList.remove('aside__nav--closed');
    navMenu.classList.add('aside__nav--opened');
    bodyElement.style.overflow = 'hidden';
    buttonMenu.classList.remove('page-header__btn--closed');
    overflow.classList.add('aside__overflow--active');
  };

  var removeMenu = function () {
    navMenu.classList.add('aside__nav--closed');
    navMenu.classList.remove('aside__nav--opened');
    bodyElement.style.overflow = 'auto';
    buttonMenu.classList.add('page-header__btn--closed');
    overflow.classList.remove('aside__overflow--active');

    if (subMenu.classList.contains('submenu-sofa--active')) {
      subMenu.classList.remove('submenu-sofa--active');
    }
  };

  buttonMenu.addEventListener('click', function () {
    if (navMenu.classList.contains('aside__nav--closed')) {
      openMenu();
    } else {
      removeMenu();
    }
  });

  overflow.addEventListener('click', function () {
    removeMenu();
  });

  linkSubmenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    subMenu.classList.add('submenu-sofa--active');
  });

  btnPrev.addEventListener('click', function () {
    subMenu.classList.remove('submenu-sofa--active');
  });

  var breakpoint = window.matchMedia('(min-width: 1024px)');

  var activeSubmenu = function () {
    subMenu.classList.add('submenu-sofa--active');
  };

  var noActiveSubmenu = function () {
    subMenu.classList.remove('submenu-sofa--active');
  };

  var breakpointChecker = function () {
    if (breakpoint.matches === false) {
      itemMenu.removeEventListener('mouseenter', activeSubmenu);
      itemMenu.removeEventListener('mouseleave', noActiveSubmenu);
    } else if (breakpoint.matches === true) {
      itemMenu.addEventListener('mouseenter', activeSubmenu);
      itemMenu.addEventListener('mouseleave', noActiveSubmenu);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

// Фонция реализации выпадающего списка

(function () {
  var itemsTitle = document.querySelectorAll('.page-footer__subtitle');

  itemsTitle.forEach(function (item) {
    item.addEventListener('click', function () {
      activeItem(item);
    });
  });

  var activeItem = function (element) {
    element.classList.toggle('page-footer__subtitle--active');
    var content = element.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };
})();


(function () {
  var gallerySlider = document.querySelector('.cards__list-container');

  var mySwiper = new Swiper(gallerySlider, {
    direction: 'horizontal',
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 0,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.cards__button--next',
      prevEl: '.cards__button--prev',
    },
  });
})();

// Кнопка допаказа меню

// (function () {
//   var menuItem = document.querySelectorAll('.site-menu__item');
//   var menuItemBtn = document.querySelector('.site-menu__more-btn');

//   menuItemBtn.addEventListener('click', function () {

//   });

//   var showItems = function () {

//   }

//   itemsTitle.forEach(function (item) {
//     item.addEventListener('click', function () {
//       activeItem(item);
//     });
//   });

//   var activeItem = function (element) {
//     element.classList.toggle('page-footer__subtitle--active');
//     var content = element.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//     }
//   };
// })();

(function () {
  var menuItem = document.querySelectorAll('.site-menu__item');
  var menuItemBtn = document.querySelector('.site-menu__more-btn');

  var ITEM = 6;

  menuItem.forEach(function (item) {
    item.style.display = 'none';
  });

  var showItem = ITEM;

  Array.from(menuItem).slice(0, showItem).forEach(function (item) {
    item.style.display = 'block';
  });

  menuItemBtn.addEventListener('click', function () {
    var prevMenuItem = showItem;
    showItem = showItem + ITEM;

    Array.from(menuItem).slice(prevMenuItem, showItem).forEach(function (item) {
      item.style.display = 'block';
      item.classList.add('site-menu__item--active');
    });

    if (showItem >= menuItem.length) {
      menuItemBtn.remove();
    }
  });
})();

// Футер

(function () {
  var cardItemInner = document.querySelectorAll('.cards__item');
  var pageFooter = document.querySelector('.page-footer');

  var pageFooterShow = function () {
    pageFooter.style.zIndex = '0';
  };

  var pageFooterHidden = function () {
    pageFooter.style.zIndex = '1';
  };

  cardItemInner.forEach(function (item) {
    item.addEventListener('mouseenter', pageFooterShow);
    item.addEventListener('mouseleave', pageFooterHidden);
  });
})();
