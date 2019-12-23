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

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".top-line").addClass("fixed");
    } else {
      $(".top-line").removeClass("fixed");
    }
  });

  $(".indicator").click(function(event) {
    event.preventDefault();
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".slide-active").removeClass("slide-active");
    $($(this).attr("href")).addClass("slide-active");
  })

});