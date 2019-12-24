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

  if (window.matchMedia("(min-width: 992px)").matches) {
    $(".container").removeClass("container-my");
  }

  $(window).resize(function() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      $(".container").removeClass("container-my");
    } else {
      $(".container").addClass("container-my");
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

  $(".top-menu li").click(function() {
    $(".item-active").removeClass("item-active");
    $(this).addClass("item-active");
  });

  $(".indicator").click(function(event) {
    event.preventDefault();
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".slide-active").removeClass("slide-active");
    $($(this).attr("href")).addClass("slide-active");
  })

});