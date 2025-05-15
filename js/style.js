$(document).ready(function () {
  $('#navburst').click(function () {
    $('.menu-header').toggleClass('active');
  });
  $('#search-icon').click(function () {
    $('#input-search').toggleClass('active');
  });
  $(".menu-header .menu-item").click(function (e) {
    e.stopPropagation();
    $(".menu-header .menu-item .sub-menu").not($(this).find(".sub-menu")).slideUp();

    $(this).find(".sub-menu").slideToggle();
  });



  $('.slider-cer').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

});

function animateCounter($el, target) {
  $({ countNum: 0 }).animate(
    { countNum: target },
    {
      duration: 2000,
      easing: 'swing',
      step: function () {
        $el.text(Math.ceil(this.countNum));
      },
      complete: function () {
        $el.text(target);
      }
    }
  );
}

$(document).ready(function () {
  let hasAnimated = false;

  $(window).on('scroll', function () {
    const sectionTop = $('.wd-stats-section').offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (!hasAnimated && scrollTop + windowHeight > sectionTop + 100) {
      $('.wd-stats-number').each(function () {
        const $this = $(this);
        const target = parseInt($this.attr('data-target'));
        animateCounter($this, target);
      });
      hasAnimated = true;
    }
  });
});

