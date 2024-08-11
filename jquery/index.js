$(document).ready(function(){
    $("h1").css("color","white");
    $("h1").addClass('try');
    $('h1').text("Style");
    $("button").click(function()
{  
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
   
})
    
})
