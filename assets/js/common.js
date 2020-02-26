"use strict";

$(document).ready(function() {

  setInterval(function() {
    if ($(".slide-active").next(".slide").length > 0) {
      $(".slide-active").removeClass("slide-active").next(".slide").addClass("slide-active");
      $(".active").removeClass("active").next(".indicator").addClass("active");
    } else {
      $(".slide-active").removeClass("slide-active");
      $("#bg1").addClass("slide-active");
      $(".active").removeClass("active");
      $(".indicator").first().addClass("active");
    }
    
  }, 5000);

  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".top-menu").appendTo(".top-line .col-md-9");
  } else {
    $(".top-menu").appendTo(".top-line");
  }

  $(window).resize(function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".top-menu").appendTo(".top-line .col-md-9").css("display", "block");
    } else {
      $(".top-menu").appendTo(".top-line").css("display", "none");
    }
  });  

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".top-line").addClass("fixed");
    } else {
      $(".top-line").removeClass("fixed");
    }
  });

  $(".hamburger-wrapper").click(function() {
    $(".top-menu").slideToggle(300);
  });

  $(".top-menu li").click(function(event) {
    event.preventDefault();
    let elem = $($(this).children("a").attr("href"));

    $(".item-active").removeClass("item-active");
    $(this).addClass("item-active");
    $("html, body").animate({scrollTop: elem.offset().top}, "slow");
  });

  $(".logo-wrapper").click(function() {
    $("html, body").animate({scrollTop: 0}, "slow");
  })
  

  $(".indicator").click(function(event) {
    event.preventDefault();
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".slide-active").removeClass("slide-active");
    $($(this).attr("href")).addClass("slide-active");
  })

  $(".options li").click(function(event) {
    event.preventDefault();
    $(".item-active").removeClass("item-active");
    $(this).addClass("item-active");
    $(".features-item-active").removeClass("features-item-active");
    $($(this).children("a").attr("href")).addClass("features-item-active");
  })
});