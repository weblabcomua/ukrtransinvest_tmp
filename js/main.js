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
   $("h3").click(function(){
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
    });
   
});