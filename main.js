$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $('header').removeClass('fade');
      $('header').removeClass('fixed-nav');
    }
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < 80) {
      $('header').addClass('fade');
    }
    if ($(window).scrollTop() > 80) {
      $('header').removeClass('fade');
      $('header').addClass('fixed-nav');
    }
  });
});