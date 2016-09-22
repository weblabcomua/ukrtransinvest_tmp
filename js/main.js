$(document).ready(function(){
   
   var heightHeader = $("#myCarousel img").height();
   //console.log(heightHeader);
   $("header").css("height", heightHeader);
    
    //home products
   $("h3").hover(function(){
       $(".products li").removeClass("active");
       $(this).parent().addClass("active");
       var id = $(this).attr("id");
       //console.log(id);
       $(".product").removeClass("active");
       $(".product."+id).addClass("active");
   });
   
   //menu scroll
    var heightTopMenu = $(".menu").offset();
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled >= heightTopMenu.top){
            $(".menu").addClass("menu-fixed");
        }else{
            $(".menu").removeClass("menu-fixed");
        }
    };
//animate

    $('.row, .container, .container-fluid').addClass("wow bounceInLeft").attr("data-wow-duration","1s");
    var a = 1;
    var timerId = setInterval(function() {
        if(a>2){
            a = 1;
            return;
        }
        $("header").addClass("wow bounceInLeft").css("background-image","url(img/bg-"+a+".jpg)");
        a++;
     }, 2000);

      
});