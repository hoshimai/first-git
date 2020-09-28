$(document).ready(function(){
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
  
  //header_navi
    $(".navi_btn").click(function(){
      $(this).next().slideToggle();
        }
        );
  
  //side bar 
    $(".page-link .sub_bar_title").click(function () {
      $(this).toggleClass("openlink_pgl");
      $(".page-link .sub_bar_title").next().slideToggle();
    });
  
    $(".categories .sub_bar_title").click(function () {
      $(this).toggleClass("openlink_ctg");
      $(".categories .sub_bar_title").next().slideToggle();
    });
});

$(window).load(function(){
  //products
  $('.flex-products-2 img').click(function(){
    var img_src = $(this).attr("src");
    $('.flex-products-1 img').attr("src", img_src);
  });
});

