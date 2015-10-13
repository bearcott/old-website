function isDefined(thing) {
    if (typeof thing !== 'undefined')
        return true;
    else
        false;
}

//custom jQuery extension to animate using newer/less laggy CSS3 technologies.
$.fn.extend({
    slideIn : function(arguments,duration) {
        /*
            expects arguments to be:
            {
                from: [x,y,z] #or direction (left,right,top,bottom)
                fade: true,
                delay: 1000
            }
            duration is in miliseconds.
        */

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
        var was = 'translate3d(' + from[0] + 'px,' + from[1] + 'px,'+ from[2] + 'px)';
        //from
        $t.css({
            'transform' : was,
            '-webkit-transform' : was,
            '-moz-transform' : was,
            'opacity' : fade
        });
        //to
        $t.animate({
            'opacity' : 1,
            randomProperty : 1
        },{
            step : function(now,fx) {
                var is = 'translate3d('
                  + (from[0]*(1-now)).toFixed(5) + 'px,'
                  + (from[1]*(1-now)).toFixed(5) + 'px,'
                  + (from[2]*(1-now)).toFixed(5) + 'px)';
                $t.css({
                    'transform' : is,
                    '-webkit-transform' : is,
                    '-moz-transform' : is
                });
            },
            duration : duration
        },'swing');
    }
});

$(document).ready(function() {
    //globals
    var $w = $(window);
    $w.t = $w.scrollTop();
    $w.h = $w.height();
    var header = $('header');
    var table = $('.table');
    var about = $('#about');
    header.h = header.outerHeight();
    header.t = header.offset().top;
    header.w = header.outerWidth();
    about.h = about.outerHeight();
    about.t = header.offset().top;

    header.img = new Image();
    header.css('opacity',0);
    header.img.src = header.find('.background').css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

    //helper functions
    function flipword(thing, words) {
        var i = 0;
        var g = setInterval(function() {
            var w = words[i];
            $(thing).animate({'bottom':'-=20px','opacity':0},'swing',function() {
                $(this).html(w).css({'bottom':'20px'}).animate({'bottom':'0px','opacity':1},'swing');
            });
            if (i >= words.length - 1) i = 0;
            i++;
        },2000)
    }
    /*
    function scrollTo(elem, offset, swing) {
        var c,d;
        if (offset == undefined) offset = 0;
        if (swing == undefined) swing = false
        c = $w.scrollTop();
        d = $(elem).offset().top;
        if (swing)
            $("html, body")
              .animate({scrollTop : c + 150},1600,'swing')
              .animate({scrollTop : d + offset}, (Math.abs(c-d)*0.8),'swing');
        else
            $("html, body")
              .animate({scrollTop : d + offset}, (Math.abs(c-d)*0.8),'swing');

    }
    */

    function resize() {
        var he = (header.h < $w.h) ? header.h : $w.h;
        header.height(he - 30);
        header.tt = he/2;
    };
    resize();
    $(window).resize(function() {
        $w.h = $(window).height();
        resize();
    });

    /*
    //when scrolling
    $w.scroll(function() {
        $w.t = $w.scrollTop();
        $w.h = $w.height();
        header.t = header.offset().top;
        about.t = header.offset().top;
        //parallax
        if ($w.t <= header.h)  {
            var background = 'translate3d(0,' + (($w.t)/2) + 'px,0)',
                title = 'translate3d(0,' + (($w.t)/4) + 'px,0)';
            header.find('.background').css({
                'transform' : background,
                '-webkit-transform' : background,
                '-moz-transform' : background
            });
            header.find('.title').css({
                'transform' : title,
                '-webkit-transform' : title,
                '-moz-transform' : title
            }).css('opacity',(1-$w.t/header.h*2));
        }
    });
    */

    //BEGIN STYLE ANIMATIONS
    //on header img ready
    header.img.onload = function() {
        header.animate({'opacity':1},500,'swing');
        // header.find('.line, .down').slideIn({from:[0,200,0],fade:true});
        header.find('.title').find('h1').slideIn({from:[0,-50,0],delay:1000,fade:true});
        header.find('.contact').slideIn({from:[0,-50,0],delay:1400,fade:true});
        table.find('.coffee').slideIn({from:'left',delay:1200},2500);

        fword = header.find('.title .word').html();
        words = ['I make stuff.','I love jogging.',"I'm a cooking fanatic.","I'm a hackathon hacker.",fword];
    	  setTimeout(function() { //delay
            flipword(header.find('.fillin .word'),words);
        },1000);

        $(header).css('background-position-y',0);
    }
    $('.contact').click(function() {
        
    });

    /*
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
    var trianglez = setInterval(function() {
        triangles(header);
    },Math.random()/2*1000 + 700);
    function triangles(thing) {
        var l,s,d,h,w;
        l = Math.random();
        s = Math.floor(Math.random()*50) + 20;
        h = Math.random()*header.h/1.5;
        w = Math.random()*header.w/1.5;
        d = $('<div/>',{'class': 'triangle'}).css({
            'border-width' : s,
            'border-bottom-width' : s*Math.pow(3,0.5),
            'border-bottom-color' : 'rgba(255,255,255,.' + 1 + l + ")"
        });
        console.log(0.5 + l/2);
        d.appendTo(thing).animate({
            opacity: 0
        },{
            step: function(now,fx) {
                if (Math.round(l))
                    var transform  = "translate3d(-" + ((1-now)*header.w + w).toFixed(2) + "px,-" + ((1-now)*header.h).toFixed(2) + "px,0)";
                else
                    var transform  = "translate3d(-" + ((1-now)*header.w).toFixed(2) + "px,-" + ((1-now)*header.h + h).toFixed(2) + "px,0)";
                transform += " rotate(-45deg)";
                d.css({
                    'transform' : transform,
                    'webkit-transform' : transform,
                    'moz-transform' : transform
                });
            },
            duration: 5000,
            complete: function() {
                $(this).remove();
            }
        },5000);
    }
    */
})
