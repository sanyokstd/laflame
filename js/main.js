"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // первый екран
  var swiper = new Swiper('.swiper-container-main', {
    loop: true,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // поиск

  var headerSearch = document.getElementById('headerSearch');
  var searchForm = document.getElementById('searchForm');
  headerSearch.addEventListener('click', function () {
    this.classList.add('active');
    searchForm.querySelector('input').focus();
  });
  document.addEventListener('click', function (e) {
    if (!headerSearch.contains(e.target)) {
      headerSearch.classList.remove('active');
    }
  }); // бургер меню

  var burger = document.getElementById('burger');
  var mainNav = document.getElementById('main-nav');
  var backfon = document.getElementById('back-fon');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mainNav.classList.toggle('active');
    backfon.classList.toggle('active');
  });
  backfon.addEventListener('click', function () {
    burger.classList.remove('active');
    mainNav.classList.remove('active');
    backfon.classList.remove('active');
  });
  var arrNext = document.querySelectorAll('.arr-next');
  var arrBack = document.querySelectorAll('.arr-back');
  arrNext.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      btn.closest('li').classList.add('active');
      mainNav.classList.toggle('open-level2');
    });
  });
  arrBack.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      btn.closest('li').classList.add('back');
      setTimeout(function () {
        btn.closest('li').classList.remove('active');
        btn.closest('li').classList.remove('back');
        mainNav.classList.remove('open-level2');
      }, 300);
    });
  }); // каталог товар

  var swiperLeft = new Swiper(".swiper-container-left", {
    spaceBetween: 20,
    slidesPerView: 2,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      992: {
        direction: 'vertical',
        allowTouchMove: false
      }
    }
  });
  var swiperRight = new Swiper(".swiper-container-right", {
    spaceBetween: 10,
    slidesPerView: 1,
    allowTouchMove: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: swiperLeft
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      992: {
        allowTouchMove: false,
        effect: "fade"
      }
    }
  });

  if (document.querySelectorAll(".select").length) {
    var els = document.querySelectorAll(".select");
    els.forEach(function (select) {
      NiceSelect.bind(select);
    });
  } // табы товара


  var tovar_tabs_nav = document.querySelectorAll('.tovar__tabs__nav');
  var tovar_tabs_item = document.querySelectorAll('.tovar__tabs__item');
  var tovar_tabs = document.querySelector('.tovar__tabs');
  tovar_tabs_nav.forEach(function (el) {
    return el.addEventListener('click', function () {
      if (!el.closest('.tovar__tabs__item').classList.contains('active')) {
        tovar_tabs_item.forEach(function (el, index) {
          el.classList.remove('active');
        });
        el.closest('.tovar__tabs__item').classList.add('active');
        var containerH = el.closest('.tovar__tabs__item').querySelector('.tovar__tabs__container').offsetHeight + 50;
        tovar_tabs.style.marginBottom = containerH + "px";
      } else {
        el.closest('.tovar__tabs__item').classList.remove('active');
        tovar_tabs.style.marginBottom = "100px";
      }
    });
  }); // фильтр

  if (document.querySelectorAll('.filter__title')) {
    var filter__title = document.querySelectorAll('.filter__title');
    filter__title.forEach(function (el) {
      return el.addEventListener('click', function () {
        el.closest('.filter__row').classList.toggle('active');
      });
    });
  } // добавить в избраное


  if (document.querySelectorAll('.add-wich')) {
    var addWich = document.querySelectorAll('.add-wich');
    addWich.forEach(function (el) {
      return el.addEventListener('click', function () {
        el.classList.toggle('active');
      });
    });
  } // фильтр товаров


  if (document.getElementById('filter')) {
    var filter = document.getElementById('filter');
    var catalog__top = document.querySelector('.catalog__top');
    var catalog__wrap = document.querySelector('.catalog__wrap');

    var filterRefresh = function filterRefresh() {
      if (window.innerWidth < 768) {
        catalog__top.append(filter);
      } else {
        catalog__wrap.prepend(filter);
      }
    };

    filterRefresh();
    window.addEventListener('resize', function () {
      filterRefresh();
    });
    var filterToggle = document.getElementById('filter-toggle');
    filterToggle.addEventListener('click', function () {
      filterToggle.classList.toggle('active');
      filter.classList.toggle('active');
    });
  }

  Inputmask().mask(document.querySelectorAll("input"));

  if (document.getElementById('order_info')) {
    var order_info = document.getElementById('order_info');
    var order_info_wrap = document.getElementById('order_info_wrap');
    order_info.addEventListener('click', function () {
      order_info_wrap.classList.toggle('active');
    });
  }

  if (document.querySelectorAll('.order__pay-choose__block').length) {
    var choosePay = document.querySelectorAll('.order__pay-choose__block');
    choosePay.forEach(function (el) {
      return el.addEventListener('click', function () {
        if (!el.classList.contains('disabled')) {
          choosePay.forEach(function (el) {
            el.classList.remove('active');
          });
          el.classList.add('active');
        }
      });
    });
  }

  if (document.querySelector('.auth')) {
    var btnLogin = document.getElementById('btn-login');
    var btnReg = document.getElementById('btn-reg');
    var btnFogot = document.getElementById('btn-fogot');
    var loginWrap = document.getElementById('login-wrap');
    var regWrap = document.getElementById('reg-wrap');
    var fogotWrap = document.getElementById('fogot-wrap');
    var auth__item = document.querySelectorAll('.auth__item');
    btnLogin.addEventListener('click', function () {
      btnReg.classList.remove('active');
      btnLogin.classList.add('active');
      auth__item.forEach(function (el) {
        el.classList.remove('active');
      });
      loginWrap.classList.add('active');
    });
    btnReg.addEventListener('click', function () {
      btnLogin.classList.remove('active');
      btnReg.classList.add('active');
      auth__item.forEach(function (el) {
        el.classList.remove('active');
      });
      regWrap.classList.add('active');
    });
    btnFogot.addEventListener('click', function () {
      auth__item.forEach(function (el) {
        el.classList.remove('active');
      });
      fogotWrap.classList.add('active');
    });
  }

  if (document.querySelector('.app.black')) {
    var app = document.querySelector('.app');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        app.classList.remove('active');
      } else {
        app.classList.add('active');
      }
    });
  }

  var swiperPolit = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // политика вопросы табы

  if (document.querySelector('.polit-question')) {
    var tabs__t = document.querySelectorAll('.tabs__t');
    tabs__t.forEach(function (el) {
      return el.addEventListener('click', function () {
        if (!el.closest('.tabs__item').classList.contains('active')) {
          tabs__t.forEach(function (el2) {
            el2.closest('.tabs__item').classList.remove('active');
          });
          el.closest('.tabs__item').classList.add('active');
        }
      });
    });
  }

  if (document.querySelector('.new-menu')) {
    var newMenuParents = document.querySelectorAll('.new-menu .parent');
    newMenuParents.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        e.preventDefault();
        newMenuParents.forEach(function (el2) {
          el2.classList.remove('active');
        });
        el.classList.add('active');
      });
    });
    document.addEventListener('click', function (e) {
      if (!document.querySelector('.new-menu .parent').contains(e.target)) {
        newMenuParents.forEach(function (el2) {
          el2.classList.remove('active');
        });
      }
    });
  }
});
//# sourceMappingURL=main.js.map
