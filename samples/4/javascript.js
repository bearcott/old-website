$(function() {
	var slide, left, right, maxwidth, current;
	slide = $('.container');
	left = $('#left');
	right = $('#right');
	maxwidth = $('.window').length * 100;
	function resize() {
		slide.css({"width" : maxwidth + "%", "height" : $(window).height()});
		$('.window').css({"height" : $(window).height()*.9, 
			"width" : $(window).width()*.9, 
			"padding" : $(window).height()*.05 + "px " + $(window).width()*.05 + "px"});
	}
	resize();
	$(window).resize(function() {
		resize();
	});
	
	left.hide();
	right.click(function() {
		move("right");
	});
	left.click(function() {
		move("left");
	});
	
	current = 0;
	function move(to) {
		window.console.log((maxwidth - 100) + "%");
		if (to == "right") {
			if ((current + 1)*100 == maxwidth) {
				current = 0;
				slide.stop().animate({"right" : "0%"}, 2000);
				left.hide();
			}else{
				current += 1;
				slide.stop().animate({"right" : current*100 + "%"}, 1500);
				if (current !== 0) {
					left.show();
				}
			}
		}else if (to == "left") {
			if (current == 0) {
				return
			}else{
				current -= 1;
				slide.stop().animate({"right" : current*100 + "%"}, 1500);
				if (current == 0) {
					left.hide();
				}
			}
		}
	}
	
	
	
	
	
	var video = $('#video1');
	play = $('.play');
	play.click(function() {
		$('.curtain').fadeIn(function() {video.fadeIn();})
	});
	$('.curtain').click(function() {
		$(this).fadeOut();
	});
	
	var bubble = $('.fourth .bubble');
	bubble.hide();
	
	setInterval(function() {
		newbubble = bubble.clone();
		var size = Math.floor(Math.random()*70);
		newbubble.css({"width" : size, 
			"height" : size, 
			"top" : Math.floor(Math.random()*$(window).height()),
			"left" : Math.floor(Math.random()*$(window).width())
		});
		newbubble.appendTo($('.fourth'));
		newbubble.fadeIn().animate({"top" : "-=1000px"},5000, function() { $(this).fadeOut(); $(this).remove()});
	},1000);
})