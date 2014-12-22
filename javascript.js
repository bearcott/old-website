function isDefined(thing) {
    if (typeof thing !== 'undefined')
        return true;
    else
        false;
}

//allowing sliding transition, will set opacity to 1 regardless
$.fn.extend({
    slideIn : function(arguments,duration) {
        //variables
        var $t = $(this),
            from = [0,0,0],
            fade = 1;
        //setting and checking parameters
        duration = (isDefined(duration)) ?  duration : 1000;

        if (isDefined(arguments)) {
            if (isDefined(arguments['fade'])) fade = 0;
            if (isDefined(arguments['delay'])) $t.delay(arguments['delay']);

            if (typeof arguments['from'] == 'string')
                fromDirection(arguments['from']);
            else
                from = [arguments['from'][0],arguments['from'][1],arguments['from'][2]];
        }
        /*
            expects arguments to be:
            {
                from: [x,y,z] #or direction (left,right,top,bottom)
                fade: true/false,
                delay: 1000
            }
        */
        function fromDirection(direction) {
            var w = $t.width(),
                h = $t.height(),
                d = 0;
            switch(direction) {
                case 'left':
                    d = $t.offset().left;
                    from = [-(d+w),0,0];
                    break;
                case 'right': //the rest I don't need so they don't work :)
                    d = $t.offset().left;
                    from = [0,0,0];
                    break;
                case 'top':
                    d = $t.offset().top;
                    from = [0,0,0];
                    break;
                case 'bottom':
                    d = $t.offset().top;
                    from = [0,0,0];
                    break;
            }
        }
        //from
        $t.css({
            'transform' : 'translate3d(' + from[0] + 'px,' + from[1] + 'px,'+ from[2] + 'px)',
            'opacity' : fade
        });
        //to
        $t.animate({
            'opacity' : 1,
            randomProperty : 1
        },{
            step : function(now,fx) {
                $t.css('transform', 'translate3d(' + (from[0]*(1-now)).toFixed(5) + 'px,' + (from[1]*(1-now)).toFixed(5) + 'px,'+ (from[2]*(1-now)).toFixed(5) + 'px)');
            },
            duration : duration
        },'swing');
    }
});

$(document).ready(function() {
    //globals
    var $w = $(window);
    var header = $('header');
    var table = $('.table');
    var about = $('#about');
    header.h = header.outerHeight();
    header.tt = parseInt($(header).find('.title').css('top'));
    header.img = new Image();
    header.css('opacity',0);
    header.img.src = header.css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    about.h = about.outerHeight();
    $w.top = $w.scrollTop();

    resize();

    //when scrolling
    setInterval(function() {
        //variables that get updated every few seconds
        $w.t = $w.scrollTop();
        $w.h = $w.height();
        // var h = header.offset().top;
        // about.t = $(about).offset().top;
        // var cont = $('#contact');
        // cont.h = $(cont).offset().top;
        // cont.s = $(cont).height();
        //w is window.scrollTop();
        // if (w <= header.height())  {
        //     header.css('background-position-y',(w-h)/1.4 + 'px');
        //     header.find('.title').css('top', header.tt + (w-h)/2 + 'px').css('opacity', 1-(w-h)*1.5/header.height());
        // }
        // if ((w + wh) >= (about.t) && (w) <= (about.h + about.t)) about.find('.background').css('background-position-x', (w-h)/4 + 'px');
        // (w >= (about.t - 50) && w <= (about.h + about.t)) ? $('#about .info').addClass('active') : $('#about .info').removeClass('active');
        // (w >= (about.t) && w <= (about.h + about.t - 100)) ? $('#about .graphic').addClass('active').removeClass('inactive') : $('#about .graphic').removeClass('active').addClass('inactive');
        // ((wh + w - (cont.s)*1.6) >= cont.h) ? $('#contact .title').addClass('active') : $('#contact .title').removeClass('active');
    },10);

    //helper functions
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
        var win = $w.height();
        var he = (header.h < win) ? header.h : win;
        header.height(he - 30);
        header.find('.title').css('top',he/2 + 'px');
        header.tt = he/2;
    }

    //hide all elements
    // header.find('.title, .contact').hide();
    // table.find('.coffee').hide();
    $('.graphic').addClass('inactive');

    //once everything is loaded
    header.img.onload = function() {
        header.animate({'opacity':1},500,'swing');
        header.find('.line, .down').slideIn({from:[0,200,0],fade:true});
        header.find('.title').slideIn({from:[0,-50,0],delay:600,fade:true});
        header.find('.contact').slideIn({from:[0,-50,0],delay:900,fade:true});
        table.find('.coffee').slideIn({from:'left',delay:1200},2500);
    	
        words = ['I make things.','I reddit.','I bake.','I bike.',"... annd",'did I mention I also design?'];
    	flipword(header.find('.fillin .word'),words);

        $(header).css('background-position-y',0);
    }

    $w.resize(function() {
        resize();
    });



    //misc function to scroll
    function scrollTo(elem, offset) {
      var c,d;
      if (offset == undefined) offset = 0;
      c = $w.scrollTop();
      d = $(elem).offset().top;
      $("html, body").stop().animate({scrollTop : d + offset}, (Math.abs(c-d)*0.8),'swing');
    }
    $('a.down, a.scrollTo').click(function() {
      scrollTo($(this).attr('href'));
      return false;
    })

    //plate clicking
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
