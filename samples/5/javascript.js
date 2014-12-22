$(function() {
	var num = $(window).scrollTop() - $('#header').offset().top;
	$('#header').css("background-position", "0px " + (num*0.5) + "px"); 
	$(window).scroll(function() {
		var num = $(window).scrollTop() - $('#header').offset().top;
		$('#header').css("background-position", "0px " + (num*0.5) + "px"); 
	});
});