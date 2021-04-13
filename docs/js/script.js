"use strict";
const pageHeader = document.querySelector(".header");
const main = document.querySelector("main");
const mobileMenu = document.querySelector(".header__mob-menu");
const headerToggle = document.querySelector(".header__button");

headerToggle.addEventListener("click", function () {
  headerToggle.classList.toggle("header__button--active");
  mobileMenu.classList.toggle("header__mob-menu--show");
  headerToggle.classList.toggle("header__button--mobile");
});

const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    hide: true,
  },
});

const sliderPop = document.querySelector(".swiper-container1");

let mySwiper1 = new Swiper(sliderPop, {
  slidesPerView: 4,
  slidesPegGroup: 1,
  spaceBetween: 29,
  loop: true,
  updateOnWindowResize: true,

  lazy: {
    loadPrevNext: true,
  },

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1290: {
      slidesPerView: 4,
      spaceBetween: 29,
    },
  },
});
let triggers = document.querySelectorAll(".footer__list h3");

triggers.forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.nextElementSibling;
    item.classList.toggle("trigger--active");
    if (parent.classList.contains("js-submenu--active")) {
      parent.classList.remove("js-submenu--active");
      parent.classList.remove("hide");
    } else {
      document
        .querySelectorAll(".js-submenu")
        .forEach((child) => child.classList.remove("js-submenu--active"));
      parent.classList.add("js-submenu--active");
      parent.classList.add("show");
    }
  })
);

const searchControls = document.querySelectorAll(".search__item");
const searchTabs = document.querySelectorAll(".search__form");
const showSearchField = function () {
  let dataNumer = "";
  searchControls.forEach((el) => {
    el.onclick = function (e) {
      e.preventDefault();
      selectConltol();
      dataNumer = e.target.getAttribute("data-control");
      this.classList.add("search__item--active");
      showtab(dataNumer);
    };
  });
  function selectConltol() {
    searchControls.forEach((el) => {
      el.classList.remove("search__item--active");
    });
  }
  function showtab(number) {
    searchTabs.forEach((el) => {
      el.classList.remove("search__form--active");
      let tabDataNumber = el.getAttribute("data-tab");
      if (tabDataNumber === number) {
        el.classList.add("search__form--active");
      }
    });
  }
};
showSearchField();
