$(document).ready(function() {
    //header animation junk
    var header = $('header');
    var table = $('.table');
    var about = $('#about');
    header.css('opacity',0);
    header.h = header.outerHeight();
    header.img = new Image();
    header.img.src = header.css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    about.h = about.outerHeight();
    resize();
    header.tt = parseInt($(header).find('.title').css('top'));
    header.find('.title').hide();
    header.find('.contact').hide();
    table.find('.coffee').hide();
    $('.graphic').addClass('inactive');
    header.img.onload = function() {
        header.animate({'opacity':1},'swing');
        header.find('.line').css('bottom','-=200px').animate({'bottom':'+=200px'},1500,'swing',function() { $(this).addClass('moveable');});
        header.find('.down').css('bottom','-=200px').animate({'bottom':'+=200px'},1500,'swing',function() { $(this).addClass('moveable');});
        header.find('.title').delay(600).css({'top':header.tt - 50 + 'px','opacity':0,'display':'block'}).animate({'top':header.tt,'opacity':1},'swing');
        header.find('.contact').delay(900).css({'bottom':'30%','opacity':0,'display':'block'}).animate({'bottom':'25%','opacity':1},'swing');
        table.find('.coffee').delay(1200).css({'left':'-20%','display':'block'}).animate({'left':'15%'},2500,'swing');
    	words = ['make things','hack','bake','jog','math',"... like",'design.'];
    	flipword(header.find('.fillin .word'),words);
        $(header).css('background-position-y',0);
    }
    function flipword(thing, words) {
    	var i = 0;
        var g = setInterval(function() {
    		var w = words[i];
    		$(thing).animate({'bottom':'-=20px','opacity':0},'swing',function() {
    			$(this).html(w).css({'bottom':'20px'}).animate({'bottom':'0px','opacity':1},'swing');
    		});
    		if (i >= words.length - 1) clearInterval(g);
    		i++;
    	},2000)
    }
    function resize() {
        var win = $(window).height();
        var he = (header.h < win) ? header.h : win;
        header.height(he - 30);
        header.find('.title').css('top',he/2 + 'px');
        header.tt = he/2;
    }
    $(window).resize(function() {
        resize();
    });
    $(window).scroll(function() {
        var w = $(window).scrollTop();
        var wh = $(window).height();
        var h = header.offset().top;
        about.t = $(about).offset().top;
        var cont = $('#contact');
        cont.h = $(cont).offset().top;
        cont.s = $(cont).height();
        if (w <= header.height())  {
            header.css('background-position-y',(w-h)/1.4 + 'px');
            header.find('.title').css('top', header.tt + (w-h)/2 + 'px').css('opacity', 1-(w-h)*1.5/header.height());
        }
        if ((w + wh) >= (about.t) && (w) <= (about.h + about.t)) about.find('.background').css('background-position-x', (w-h)/4 + 'px');
        (w >= (about.t - 50) && w <= (about.h + about.t)) ? $('#about .info').addClass('active') : $('#about .info').removeClass('active');
        (w >= (about.t) && w <= (about.h + about.t - 100)) ? $('#about .graphic').addClass('active').removeClass('inactive') : $('#about .graphic').removeClass('active').addClass('inactive');
        ((wh + w - (cont.s)*1.6) >= cont.h) ? $('#contact .title').addClass('active') : $('#contact .title').removeClass('active');
    });
    function scrollTo(elem, offset) {
      var c,d;
      if (offset == undefined) offset = 0;
      c = $(window).scrollTop();
      d = $(elem).offset().top;
      $("html, body").stop().animate({scrollTop : d + offset}, (Math.abs(c-d)*0.8),'swing');
    }
    $('a.down, a.scrollTo').click(function() {
      scrollTo($(this).attr('href'));
      return false;
    })
    $('.plate').click(function() {
      var w = $(this).parent().parent();
      if (!w.hasClass('active')) {
        $('.folder').removeClass('active');
        w.find('.content').fadeOut(200, function() {
          w.addClass('active').find('.content').fadeIn();
          scrollTo(w, -100);
        });
      }else{
        $('.folder').removeClass('active');
      }
    });
    /* Random Spawning triangles? Nah.. not yet.
    setInterval(function() {
        triangles(header);
    },Math.random()/2*1000 + 700);
    function triangles(thing) {
        n = Math.floor(Math.random()*150);
        s = Math.floor(Math.random()*100) + 20;
        d = $('<div/>',{'class': 'triangle'}).css({'left', n + '%','border-width':s,'border-bottom-width':s*(3^(1/2))/2,'border-top-width':0});
        d.appendTo(thing).animate({'top' : '-50%', 'left' : '-=70%'},30000,function() {
            $(this).remove();
        });
    }
    */
})
