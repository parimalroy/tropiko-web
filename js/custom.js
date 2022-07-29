$(document).ready(function () {
  $(".fade").slick({
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: "linear",
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  });

  $(".autoplay").slick({
    loop: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
    prevArrow:
      '<span class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next"><i class="fa-solid fa-chevron-right"></i></span>',
  });

  $("#nav").onePageNav({
    currentClass: "active",
  });
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 20) {
    $(".menu-full").addClass("sticky");
  } else {
    $(".menu-full").removeClass("sticky");
  }
});
