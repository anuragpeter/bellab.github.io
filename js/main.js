jQuery(document).ready(function(){

	"use strict";

	$('.slider').ripples({
	  dropRadius: 20,
	  perturbance: 0.20
	});


	
	});

/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
    });
});



