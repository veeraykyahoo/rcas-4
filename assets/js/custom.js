$(document).ready(function () {
  // testinomial start js
  $("#testiStar_1").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_2").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_3").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_4").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_5").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_6").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_7").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_8").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  $("#testiStar_9").jsRapStar({
    colorFront: "#ffc107",
    colorBack: "rgba(255, 193, 7, 0.4)",
  });
  // home slider
  $(".home_slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 1,
    autoplayHoverPause: false,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
  });

  // fixed header js

  /* sticky header css start */
  $window = $(window);
  $window.scroll(function () {
    $scroll_position = $window.scrollTop();
    if ($scroll_position > 120) {
      // if body is scrolled down by 300 pixels
      $("#dp_header").addClass("sticky-header");
    } else {
      // $('body').css('padding-top', '0');
      $("#dp_header").removeClass("sticky-header");
    }
  });

  // mobile menu js

  $(".btn_toggler").click(function () {
    $(".mobile_menu").addClass("show-mobile-menu");
  });

  $(".btn_close_menu").click(function () {
    $(".mobile_menu").removeClass("show-mobile-menu");
  });
});
