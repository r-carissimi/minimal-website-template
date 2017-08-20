$(document).ready(function(){
  $(".hamburger").click(function(){
    $('.hamburger').toggleClass("is-active");
    $('.menu').slideToggle();
  });
});
