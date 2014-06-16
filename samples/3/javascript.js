$.fn.hello = function() {
		$(this).each(function() {
			var $this = $(this);
			var total = $this.find('ul').children().length;
			var current = 1;
			$this.find('ul').css("top","0%");
			setInterval(function() {
				if (current === total) {
					$this.find('ul').animate({top : "0%"}, 1200);
					current = 1;
				}else{
					$this.find('ul').animate({top : "-=100%"},1200);
					current++;
				}
			}, 3000);
		});
	};
$(function() {
	$('.show').hello();
	
	
});