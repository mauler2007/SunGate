
$(function () {

  $('.slider-big').slick({
   
    asNavFor: '.slider-mini',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"> <img src="images/slide-left.svg" alt=""></button> ',
    nextArrow: '<button class="slick-arrow slick-next"> <img src="images/slide-right.svg" alt=""></button> ',    
  });

  $('.slider-mini').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 961,   
        settings: {
          slidesToShow: 5,
        }
      },
      
    ]

  });



  
 


  $('.header__menu-btn').on('click', function(){
    $('.header__inner ul').slideToggle();
  });
  

  
 
  


});

