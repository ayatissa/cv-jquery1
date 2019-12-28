/* global $ , alert , console */

$(function(){
 'use strict'

 // header height
  var myHeader = $('.Header')
  myHeader.height($(window).height());
 $(window).resize(function(){
    myHeader.height($(window).height());
 })

 // links add active class 
 $('.links li ').click(function(){
     $(this).addClass('active').siblings().removeClass('active');
 })

 //slideshow
 $(function() {
  
    var slideCount =  $(".slider ul li").length;
    var slideWidth =  $(".slider ul li").width();
    var slideHeight =  $(".slider ul li").height();
    var slideUlWidth =  slideCount * slideWidth;
    
    $(".slider").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));
    
    function moveLeft() {
      $(".slider ul").stop().animate({
        left: + slideWidth
      },700, function() {
        $(".slider ul li:last-child").prependTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    function moveRight() {
      $(".slider ul").stop().animate({
        left: - slideWidth
      },700, function() {
        $(".slider ul li:first-child").appendTo($(".slider ul"));
        $(".slider ul").css("left","");
      });
    }
    
    
    $(".next").on("click",function(){
      moveRight();
    });
    
    $(".prev").on("click",function(){
      moveLeft();
    });
    
    
  });
// smooth scroll to div 
$('.links li a').click(function(){
 $('html,body').animate({
     scrollTop:$('#'+ $(this).data('value')).offset().top
 },1000);
});

//our auto slider code

(function autoSlider(){
  
    $('.slider-1 .active').each(function(){
       if (!$(this).is(':last-child')) {
        $(this).delay(2000).fadeOut(1000,function(){
            $(this).removeClass('active').next().addClass('active').fadeIn(2000);
            autoSlider();
        });
       }else{
        $(this).delay(2000).fadeOut(1000,function(){
            $(this).removeClass('active');
            $('.slider-1 div').eq(0).addClass('active').fadeIn(2000);
            autoSlider();
       });
    }
});

}());

// filter img
$('.our-project ul .button').click(function(){
    var value=$(this).data('filter');
    if (value == 'All' )
    {
        $('.filter').show("1000");
    }else{
        $('.filter').not("." + value).hide("2000");
        $('.filter').filter("." + value).show("2000");
    };

    $('.link li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    
    });
});


});