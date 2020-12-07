$(document).ready(function() {
  
  // -------------- Apagar quando função PHP que restringe o tamanho do nome do produto estiver funcionando
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
  // -------------- 
})


// Create swiper instance
{
  // Note: to work, each slider must have a unique ID defined with 'swiper-container' and as part of its navigation arrows
  $('.swiper-container').each(function() {
    let id = $(this).attr('id')

    if($(this).hasClass('small-swiper')) {
      new Swiper(`.swiper-container#${id}`, {
        centeredSlides: false,
        loop: false,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 25,
        simulateTouch: false,
        navigation: {
          nextEl: `#${id}-swiper-next`,
          prevEl: `#${id}-swiper-prev`
        },
        breakpoints: {
          350: {slidesPerView: 2, slidesPerGroup: 2},
          1045: {slidesPerView: 3},
          1335: {slidesPerView: 4},
          1625: {slidesPerView: 5},
          1915: {slidesPerView: 6},
          2205: {slidesPerView: 7},
          2495: {slidesPerView: 8}
        }
      }); 
    } else {
      new Swiper(`.swiper-container#${id}`, {
        centeredSlides: false,
        loop: false,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 25,
        simulateTouch: false,
        navigation: {
          nextEl: `#${id}-swiper-next`,
          prevEl: `#${id}-swiper-prev`
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
    }
  })
}


// Create hover effect on products
{
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
}


// Create hover effect on module button
{
  $('.module-link').on('mouseover', function() {
    $(this).addClass('hover')
  })
  
  $('.module-link').on('focusin', function() {
    $(this).addClass('hover')
  })
  
  $('.module-link').on('focusout', function() {
    $(this).removeClass('hover')
  })
  
  $('.module-link').on('mouseout', function() {
    $(this).removeClass('hover')
  })
}