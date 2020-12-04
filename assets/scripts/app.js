$(document).ready(function() {
  $('.swiper-slide .item-title').each(function() {
    $(this).text(limitProductName($(this).text().trim()))
  })

  function limitProductName(productName) {
    if(productName.length > 58) {
      return productName.substring(0, 55) + '...'
    } else {
      return productName
    }
  }
})


let swiper = new Swiper('.swiper-container', {
  centeredSlides: false,
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 20,
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

function focusProduct(element) {
  if(element) {
    element.siblings().addClass('blur')
  } else {
    $('.swiper-slide').removeClass('blur')
  }
}

$('.swiper-slide').on('focusin', function() {
  focusProduct($(this))
})

$('.swiper-slide').on('focusout', function() {
  focusProduct()
})

$('.swiper-slide').on('mouseover', function() {
  focusProduct($(this))
})

$('.swiper-slide').on('mouseout', function() {
  focusProduct()
})


