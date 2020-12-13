'use strict';
var pageHeader = document.querySelector('.header');
var main = document.querySelector('main');
var mobileMenu = document.querySelector('.header__mob-menu');
var headerToggle = document.querySelector('.header__button');

// pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__button--active');
  mobileMenu.classList.toggle('header__mob-menu--show');
  headerToggle.classList.toggle('header__button--mobile');
  // pageHeader.classList.toggle('header--show-menu');
  // main.classList.toggle('main--show-menu');

  // if (pageHeader.classList.contains('page-header--closed')) {
  //   headerToggle.classList.add('header__button--active');
  // } else {
  //   headerToggle.classList.remove('header__button--active');
  //   // pageHeader.classList.add('page-header--closed');
  //   // pageHeader.classList.remove('page-header--opened');
  // }
});


const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
  spaceBetween: 10,
  	loop: true,
	lazy: {
		loadPrevNext: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    hide: true
  },
})

const sliderPop = document.querySelector('.swiper-container1');

let mySwiper1 = new Swiper(sliderPop, {
  slidesPerView: 4,
  slidesPegGroup:1,
  spaceBetween: 30,
  loop: true,
  updateOnWindowResize:true,

	lazy: {
		loadPrevNext: true,
	},

	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1290: {
      slidesPerView: 4,
      spaceBetween: 30
    },

  }
 })
