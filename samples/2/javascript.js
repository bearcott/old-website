
$(function() {
	/*navbar sticking */
	$("#header").hide();
	var image = new Image();
	var top, white;
	
	
	image.src = "Penguins.jpg";
	image.onload = function() {
		$("#headerhold").remove();
		$("#header").fadeIn();
		
		top = $(".navmenu").offset().top;
		white = $('.beginWhite').offset().top;
	};
	
	$('#header').css("height", $(window).height() + "px");
	$('.headerimage').css("width", $(window).width() + "px");
	$('.headerimage').css("height", $("#header").height() + "px");
	
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y >= top) {
			$(".navmenu").addClass("fixed");
		} else {
			$(".navmenu").removeClass("fixed");
		}
		if (y >= white) {
			$(".navbar").slideDown();
			$(".navmenu").addClass("white");
			$(".icon").slideDown();
		} else {
			$(".navbar").slideUp();
			$(".navmenu").removeClass("white");
			$(".icon").slideUp();
		}
		$('.headerimage').css("background-position", "0px " + y * 0.5 + "px");
		$('.full').css("background-position", "50% " + ((y - $('.full').offset().top)/2 - 500) + "px");
	});
	  
	  
	/*scroll to top */
	var hitme = $('.scroll');
	hitme.click(function() {
	$('html, body').animate({
	  scrollTop: $($(this).attr("href")).offset().top
	}, 1200);
	});
	
	
});