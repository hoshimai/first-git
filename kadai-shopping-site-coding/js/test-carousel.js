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

