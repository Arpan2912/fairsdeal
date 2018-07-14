

// jQuery(document).ready(function ($) {
(function ($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  $(document).scroll(function () {
    console.log('service',$("#services").offset());
    console.log('about',$("#about").offset());
    console.log('home',$("#home").offset());
    console.log('home',$(window).scrollTop());
    var scrollPosition = $(window).scrollTop();
    var servicePosition = $("#services").offset().top;
    var aboutPostion = $("#about").offset().top;
    var contactPosition = $("#contact").offset().top;

    if(servicePosition - scrollPosition <= 400){
      $("#services").addClass('visible animated fadeIn');
      $(".card").addClass('bounceIn');
      
    }

    if(aboutPostion - scrollPosition <= 400){
      $("#about").addClass('visible animated fadeIn swing');
      // $(".about-1").addClass('wobble');jackInTheBox bounceInLeft
      // $(".about-1").addClass('jackInTheBox');
      $(".about-1").addClass('bounceInLeft');
      $(".about-2").addClass('bounceInRight');
    }

    if(contactPosition - scrollPosition <= 400){
      $("#contact").addClass('visible animated fadeIn');
      // $(".card").addClass('bounceIn');
    }

  });
  // console.log("------------------------------------");
  // $('#services').addClass("hidden").viewportChecker({
  //   classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
  //   offset: 100
  // });

  // viewportChecker({
  //   classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
  //   offset: 100
  // });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

