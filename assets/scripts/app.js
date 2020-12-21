let filterController = 0
let overflowController = 0
let scrollTop = 0

$(document).ready(function () {

  // Fix VH in mobile devices
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);


  // -------------- Apagar quando função PHP que restringe o tamanho do nome do produto estiver funcionando
  $(".swiper-slide .item-title").each(function () {
    $(this).text(limitProductName($(this).text().trim()));
  });
  function limitProductName(productName) {
    if (productName.length > 58) {
      return productName.substring(0, 55) + "...";
    } else {
      return productName;
    }
  }
  // --------------
});

$(window).resize(function() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

$(window).scroll(function() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

{
  let mainSlider = new Swiper(".swiper-container#main-slider", {
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 500,
    cssMode: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 3600,
    },
  });
}

// Brand swiper
{
  let brand = new Swiper(".brand-container", {
    centeredSlides: true,
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 25,
    simulateTouch: true,
    speed: 600,
    followFinger: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 1800,
    },
    grabCursor: true,
    breakpoints: {
      350: { slidesPerView: 2 },
      750: { slidesPerView: 3 },
      1045: { slidesPerView: 4 },
      1335: { slidesPerView: 5 },
      1625: { slidesPerView: 6 },
      1915: { slidesPerView: 7 },
      2205: { slidesPerView: 8 },
      2495: { slidesPerView: 9 },
    },
  });
}

// Create swiper instance
{
  // Note: to work, each slider must have a unique ID defined with 'swiper-container' and as part of its navigation arrows
  $(".swiper-container").each(function () {
    let id = $(this).attr("id");

    if ($(this).hasClass("small-swiper")) {
      new Swiper(`.swiper-container#${id}`, {
        centeredSlides: false,
        loop: false,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 25,
        simulateTouch: false,
        followFinger: true,
        navigation: {
          nextEl: `#${id}-swiper-next`,
          prevEl: `#${id}-swiper-prev`,
        },
        breakpoints: {
          350: { slidesPerView: 2, slidesPerGroup: 2 },
          1045: { slidesPerView: 3 },
          1335: { slidesPerView: 4 },
          1625: { slidesPerView: 5 },
          1915: { slidesPerView: 6 },
          2205: { slidesPerView: 7 },
          2495: { slidesPerView: 8 },
        },
      });
    } else {
      new Swiper(`.swiper-container#${id}`, {
        centeredSlides: false,
        loop: false,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 25,
        simulateTouch: false,
        followFinger: true,
        navigation: {
          nextEl: `#${id}-swiper-next`,
          prevEl: `#${id}-swiper-prev`,
        },
        breakpoints: {
          750: { slidesPerView: 2 },
          1045: { slidesPerView: 3 },
          1335: { slidesPerView: 4 },
          1625: { slidesPerView: 5 },
          1915: { slidesPerView: 6 },
          2205: { slidesPerView: 7 },
          2495: { slidesPerView: 8 },
        },
      });
    }
  });
}

// Create hover effect on products
{
  function focusProduct(element) {
    if (element) {
      element.siblings().addClass("blur");
    } else {
      $(".swiper-slide").removeClass("blur");
    }
  }

  $(".swiper-slide").on("focusin", function () {
    focusProduct($(this));
  });

  $(".swiper-slide").on("focusout", function () {
    focusProduct();
  });

  $(".swiper-slide").on("mouseover", function () {
    focusProduct($(this));
  });

  $(".swiper-slide").on("mouseout", function () {
    focusProduct();
  });
}

// Create hover effect on module button
{
  $(".module-link").on("mouseover", function () {
    $(this).addClass("hover");
  });

  $(".module-link").on("focusin", function () {
    $(this).addClass("hover");
  });

  $(".module-link").on("focusout", function () {
    $(this).removeClass("hover");
  });

  $(".module-link").on("mouseout", function () {
    $(this).removeClass("hover");
  });
}

function openSearchBox() {
  $('.form-inline').addClass('show')
  toggleFilter(true)
  toggleOverflow(true)
  $('.mobile-search-button').removeClass('show')
}

function closeSearchBox() {
  $('.form-inline').removeClass('show')
  toggleFilter(false)
  toggleOverflow(false)
  $('.mobile-search-button').addClass('show')
}

$(".navbar-nav .dropdown").on("show.bs.dropdown", function () {
  toggleFilter(true)
  $(this).find(".dropdown-menu a").attr("tabindex", 0);
});

$(".navbar-nav .dropdown").on("hidden.bs.dropdown", function () {
  toggleFilter(false)
  $(this).find(".dropdown-menu a").attr("tabindex", -1);
});

$(".dropdown-menu").on("click.bs.dropdown", function (e) {
  e.stopPropagation();
  e.preventDefault();
});

$(".collapse").on('show.bs.collapse', function () {
  toggleOverflow(true)
})

$(".collapse").on('hidden.bs.collapse', function () {
  toggleOverflow(false)
})

$('.mobile-search-button.show').on('click', openSearchBox)
$('button.close-search').on('click', closeSearchBox)
$('.filter').on('click', function() {
    closeSearchBox()
})

const tippyContent = document.getElementById('tippy-content')

if(window.matchMedia('screen and (min-width: 1200px)').matches) {
  tippy('.help-center', {
    allowHTML: true,
    content: tippyContent.innerHTML,
    interactive: true,
    theme: 'tooltip-style',
    arrow: true,
    animation: 'shift-away',
    interactiveBorder: 20,
    onShow() {
      toggleFilter(true)
    },
    onHide() {
      toggleFilter(false)
    }
  })
}

function toggleFilter(show) {
  if(show) {
    $('.filter').addClass('show')
    filterController++
  } else {
    if(filterController === 1) {
      filterController--
      $('.filter').removeClass('show')
    }
    
    if(filterController > 1) {
      filterController--
    }
  }
}

function toggleOverflow(add) {
  if(add) {
    $('body').addClass('hidden-overflow')
    overflowController++
  } else {
    if(overflowController === 1) {
      overflowController--
      $('body').removeClass('hidden-overflow')
    }

    if(overflowController > 1) {
      overflowController--
    }
  }
}

function toggleMobileMenu() {
  let currentScroll = $(window).scrollTop()
  const nav = $('.navbar-custom')

  if((currentScroll - scrollTop) > 0) {
    if($(window).scrollTop() > 80) {
      nav.addClass('hidden-navbar')
    }
  } else {
    nav.removeClass('hidden-navbar')
  }

  scrollTop = currentScroll
}

$(window).scroll(toggleMobileMenu)