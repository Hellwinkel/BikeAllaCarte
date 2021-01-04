let filterController = 0
let overflowController = 0
let scrollTop = 0

$(document).ready(function () {
  // Fix VH in mobile devices
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(window).resize(function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

$(window).scroll(function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})


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
      $(".item-container").removeClass("blur");
    }
  }

  $(".swiper-slide")
    .on("focusin", function () {
      focusProduct($(this));
    })
    .on("focusout", function () {
      focusProduct();
    })
    .on("mouseover", function () {
      focusProduct($(this));
    })
    .on("mouseout", function () {
      focusProduct();
    });

  $(".grid-module .item-container")
    .on("focusin", function () {
      focusProduct($(this));
    })
    .on("focusout", function () {
      focusProduct();
    })
    .on("mouseover", function () {
      focusProduct($(this));
    })
    .on("mouseout", function () {
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
  $('.lgpd-container').addClass('low-index')
}

function closeSearchBox() {
  $('.form-inline').removeClass('show')
  toggleFilter(false)
  toggleOverflow(false)
  $('.mobile-search-button').addClass('show')
  $('.lgpd-container').removeClass('low-index')
}

$(".navbar-nav .dropdown").on("show.bs.dropdown", function () {
  toggleFilter(true)
  toggleOverflow(true)
  $(this).find(".dropdown-menu a").attr("tabindex", 0);
});

$(".navbar-nav .dropdown").on("hidden.bs.dropdown", function () {
  toggleFilter(false)
  toggleOverflow(false)
  $(this).find(".dropdown-menu a").attr("tabindex", -1);
});

$(".dropdown-menu").on("click.bs.dropdown", function (e) {
  e.stopPropagation();
  // e.preventDefault();
});

$(".navbar-collapse").on('show.bs.collapse', function () {
  toggleOverflow(true)
})

$(".navbar-collapse").on('hidden.bs.collapse', function () {
  toggleOverflow(false)
})

$('.mobile-search-button.show').on('click', openSearchBox)
$('button.close-search').on('click', closeSearchBox)
$('.filter').on('click', function () {
  closeSearchBox()
})

const tippyContent = document.getElementById('tippy-content')

if (window.matchMedia('screen and (min-width: 1200px)').matches) {
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
    },
    trigger: "mouseenter focusin",
    hideOnClick: false
  })
}

function toggleFilter(show) {
  if (show) {
    $('.filter').addClass('show')
    filterController++
  } else {
    if (filterController === 1) {
      filterController--
      $('.filter').removeClass('show')
    }

    if (filterController > 1) {
      filterController--
    }
  }
}

function toggleOverflow(add) {
  if (add) {
    $('body').addClass('hidden-overflow')
    overflowController++
  } else {
    if (overflowController === 1) {
      overflowController--
      $('body').removeClass('hidden-overflow')
    }

    if (overflowController > 1) {
      overflowController--
    }
  }
}

function toggleMobileMenu() {
  let currentScroll = $(window).scrollTop()
  const nav = $('.navbar-custom')

  if ((currentScroll - scrollTop) > 0) {
    if ($(window).scrollTop() > 80) {
      nav.addClass('hidden-navbar')
    }
  } else {
    nav.removeClass('hidden-navbar')
  }

  scrollTop = currentScroll
}

$(window).scroll(toggleMobileMenu)

function toggleDropdown (e) {
  if (window.matchMedia('screen and (min-width: 1200px)').matches) {
    const dropdown = $(e.target).closest('.dropdown')
    const menu = $('.dropdown-menu', dropdown)

    setTimeout (function() {
      const shouldOpen = e.type !== 'click' && dropdown.is(':hover')

      if(shouldOpen) {
        menu.addClass('show');
        dropdown.addClass('show');
        $('[data-toggle="dropdown"]', dropdown).attr('aria-expanded', true);
        toggleFilter(true)
        dropdown.find("a").attr("tabindex", 0);
      } else {
        menu.removeClass('show');
        dropdown.removeClass('show');
        $('[data-toggle="dropdown"]', dropdown).attr('aria-expanded', false);
        toggleFilter(false)
        dropdown.find("a").attr("tabindex", -1);
      }
    }, e.type === 'mouseleave' ? 0 : 0)
  }
}

let timer

$('body').on('mouseenter', '.dropdown', function(e) {
  timer = setTimeout(function() {
    if (e.target.getAttribute('aria-expanded') !== 'true') {
      toggleDropdown(e)
    }
  }, 0)
})

$('body').on('mouseleave', '.dropdown', function(e) {
  clearTimeout(timer)
  toggleDropdown(e)
})

$('.nav-item').on('click', function(e) {
  if(e.screenX !== 0 && window.matchMedia('screen and (min-width: 1200px)').matches) {
    e.stopPropagation()
  } else {
    toggleDropdown(e)
  }
})

$(".lgpd-collapse").on('show.bs.collapse', function () {
  $('.lgpd-container').addClass('show')
  toggleFilter(true)
  toggleOverflow(true)
  
})

$(".lgpd-collapse").on('hide.bs.collapse', function () {
  $('.lgpd-container').removeClass('show')
  toggleFilter(false)
  toggleOverflow(false)
})

$('.filter').on('click', function() {
  if($('.lgpd-container').hasClass('show')) {
    $('.lgpd-collapse').collapse('toggle')
    $('.lgpd-container').removeClass('show')
    toggleFilter(false)
    toggleOverflow(false)
  }
})

function destroyLGPD() {
  $('.lgpd-container').addClass('destroy')
  toggleFilter(false)
  toggleOverflow(false)
}