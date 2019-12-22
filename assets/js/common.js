"use strict";

$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
      $(".top-line").addClass("fixed");
    } else {
      $(".top-line").removeClass("fixed");
    }
  });
})