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
