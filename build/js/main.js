import { initFooterMenu } from "./modules/init-footer-menu.js";
import { showSearchField } from "./modules/init-search-tabs.js";
import { initHeader } from "./modules/init-header.js";
showSearchField();
initFooterMenu();
initHeader();

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
