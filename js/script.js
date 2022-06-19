$(document).ready(function () {
    $('.small a').click(function (e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('.big iframe').hide();
        $('.big iframe').attr('src', href).show();
    })  
    $('.reviews-slider__slide').hide();
    $('.reviews-slider__slide_active').show();
    $('.reviews-slider__next').click(function(){ 
        var activeImgIndex = $('.reviews-slider__slide_active').index();
        $('.reviews-slider__slide_active').hide().removeClass('reviews-slider__slide_active');
        if(activeImgIndex == $('.reviews-slider__slide:last').index()){
            $('.reviews-slider__slide').eq(0).show().addClass('reviews-slider__slide_active');
        }
        else{
          $('.reviews-slider__slide').eq(activeImgIndex + 1).show().addClass('reviews-slider__slide_active');
        }
      })
      
    $('.reviews-slider__prev').click(function(){ 
        var activeImgIndex = $('.reviews-slider__slide_active').index();
        $('.reviews-slider__slide_active').hide().removeClass('reviews-slider__slide_active');
        if(activeImgIndex == $('.reviews-slider__slide:first').index()){
            $('.reviews-slider__slide').eq($('.reviews-slider__slide').length - 1).show().addClass('reviews-slider__slide_active');
        }
        else{
          $('.reviews-slider__slide').eq(activeImgIndex - 1).show().addClass('reviews-slider__slide_active');
        } 
      })
    
  });