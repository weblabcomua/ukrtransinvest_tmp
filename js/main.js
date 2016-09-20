$(document).ready(function(){
   
   var heightHeader = $("#myCarousel img").height();
   //console.log(heightHeader);
   $("header").css("height", heightHeader);
   
   
   /*var buttonLeft = $(".btn-default:first").offset();
   var buttonWidth = $(".btn-default:first").outerWidth();
   var bodyWidth = $("body").width();
   var marginMenu = Math.round(bodyWidth-(buttonLeft.left+buttonWidth));
   $(".menu-list").css("margin-right",marginMenu+"px");*/
   
});