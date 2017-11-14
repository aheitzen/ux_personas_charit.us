$(document).ready(function (){
	$("#aboutMe").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#about-me").offset().top
        }, 1000);
  	});
  	$("#myStats").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#my-stats").offset().top
        }, 1000);
  	});
    $("#futureGoals").click(function (){
      $('html, body').animate({
          scrollTop: $("#future-goals").offset().top
        }, 1000);
    });
   //  $("#charityLink").click(function (){
   //    $('html, body').animate({
   //        scrollTop: $("#charitySection").offset().top
   //      }, 1000);
   //  });

});