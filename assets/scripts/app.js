let swiper = new Swiper('.swiper-container', {
  centeredSlides: false,
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 25,
  simulateTouch: false,
  navigation: {
    nextEl: '.swiper-custom-button-next',
    prevEl: '.swiper-custom-button-prev'
  },
  breakpoints: {
    750: {slidesPerView: 2},
    1045: {slidesPerView: 3},
    1335: {slidesPerView: 4},
    1625: {slidesPerView: 5},
    1915: {slidesPerView: 6},
    2205: {slidesPerView: 7},
    2495: {slidesPerView: 8}
  }
});