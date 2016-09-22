$(document).ready(function(){
   
   var heightHeader = $("#myCarousel img").height();
   //console.log(heightHeader);
   $("header").css("height", heightHeader);
   
   
   /*var buttonLeft = $(".btn-default:first").offset();
   var buttonWidth = $(".btn-default:first").outerWidth();
   var bodyWidth = $("body").width();
   var marginMenu = Math.round(bodyWidth-(buttonLeft.left+buttonWidth));
   $(".menu-list").css("margin-right",marginMenu+"px");*/
    
    //home products
   /*$("h3").click(function(){
       $(".products li").removeClass("active");
       $(this).parent().addClass("active");
       var id = $(this).attr("id");
       //console.log(id);
       $(".product").removeClass("active");
       $(".product."+id).addClass("active");
   });
   
   $(".product img").hover(function(){
       $(this).siblings(".desc").css("display","block");
   });
    
    $("ul").hover(function(){
        $(".desc").css("display","none");
    });*/
    
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
        if(scrolled >= 50){
            $(".menu").addClass("menu-fixed");

        }else{
            $(".menu").removeClass("menu-fixed");
        }
    };
    
    /*$(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var heightTopMenu = $(".menu").offset();
        
        if(scrollTop >= heightTopMenu.top){
            $(".menu").addClass("menu-fixed");
        }else{
            console.log(11111);
        }
        
        
//        if(scrollTop != 0){
//            $("nav.navbar").addClass("nav-fixed");
//            $(".scroll.top").fadeIn(1000);
//            $(".submenu").slideUp(1000);
//            $(".navbar-header p").fadeIn(1500);
//            return false;
//        } else {
//            $("nav.navbar").removeClass("nav-fixed");
//            $(".scroll.top").fadeOut(1000);
//            $(".submenu").slideDown(1000);
//            $(".navbar-header p").fadeOut(1000);
//            return false;
//        }
    });*/
   
   
});