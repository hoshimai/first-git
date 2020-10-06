$(document).ready(function(){
  //header
      $(".humb").click(function () {
      $(this).next().slideToggle();
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

