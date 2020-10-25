$(document).ready(function(){
  //header
      
    $(".hum_icon").click(function () {
      var windowWidth = window.innerWidth;

      if (windowWidth > 1024) {
        // $(this).next().slideToggle();
        $(this).next().animate({width: 'toggle' }, 400 )
      } else if (windowWidth > 768) {
        // $(this).next().slideToggle();
        $(this).next().animate({width: 'toggle' }, 400 )
      } else {
        $(this).next().animate({width: 'toggle' }, 400 )
      };
      
    });
    
  
  //main_carousel
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
        );
  
  //news_release
    $(".title").click(function () {
      
      $(this).find("span").toggleClass("border_s");
      $(this).next().slideToggle();
    });
  
});

// $(window).load(function(){
//   //products
//   $('.flex-products-2 img').click(function(){
//     var img_src = $(this).attr("src");
//     $('.flex-products-1 img').attr("src", img_src);
//   });
// });

$(function(){
   $(window).on('load scroll', function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);

      $(".show").each(function() {
         if($(this).offset().top < scrollPos) {
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
         }
      });
   });
})

