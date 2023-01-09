let isHome = false;
let isBio = false;
let isPort = false;
let isBlog = false;
let isCont = false;

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}


/*----------------------- navbar sticking to the top -----------------*/


function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top + 110) {

        $( "#navbar2" ).slideDown( 225 );

    }
    if (window_top < top) {
        $( "#navbar2" ).hide();
    }
}




$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});




/*----------------------- screen width changer -------------------------*/


let lastState = false;
function checkForViewportChange () {
    var state = window.matchMedia("(max-width: 768px)").matches;
    if (state != lastState) {
        if (state) {
            //do your stuff here
            $("#nav").hide();
            $("#nav2").hide();
        } else {
            $("#nav").show();
            $("#nav2").show();
        }
        lastState = state
    }}

window.setInterval (checkForViewportChange, 150);



/*---------------------- button arrow rotate -------------*/

$(function() {
    $('.continuebutton').mouseenter(function() {
        $('.arrow').animate(
            { deg: 93 },
            {
                duration: 250,
                step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            }
        );
    });

    $('.continuebutton').mouseleave(function() {
        $('.arrow').animate(
            { deg: 0 },
            {
                duration: 250,
                step: function(now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            }
        );
    });
});








/*------------------------------- scrolling and hover buttons -------------------------------*/

$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#filler').position().top) {
        $('.bio').css({ color: '#F1F2F2'});
        $('.home').css({ color: '#EF3B39'});
        //$('.blog').css({ color: '#F1F2F2'});
        $('.portfolio').css({ color: '#F1F2F2'});
        $('.contact').css({ color: '#F1F2F2'});
        isHome = true;
        isBio = false;
        isPort = false;
        //isBlog = false;
        isCont = false;
    }

    $('.home').mouseenter(function() {
        $('.home').css({ color: '#EF3B39'});
    });

    $('.home').mouseleave(function() {
        if(isHome === false){
            $('.home').css({ color: '#F1F2F2'});
        }
    });
})

$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#bio').position().top) {
        $('.bio').css({ color: '#EF3B39'});
        $('.home').css({ color: '#F1F2F2'});
        //$('.blog').css({ color: '#F1F2F2'});
        $('.portfolio').css({ color: '#F1F2F2'});
        $('.contact').css({ color: '#F1F2F2'});
        isHome = false;
        isBio = true;
        isPort = false;
        //isBlog = false;
        isCont = false;
    }

    $('.bio').mouseenter(function() {
        $('.bio').css({ color: '#EF3B39'});
    });

    $('.bio').mouseleave(function() {
        if(isBio === false){
            $('.bio').css({ color: '#F1F2F2'});
        }
    });
})

$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#portfolio').position().top) {
        $('.bio').css({ color: '#F1F2F2'});
        $('.home').css({ color: '#F1F2F2'});
        //$('.blog').css({ color: '#F1F2F2'});
        $('.portfolio').css({ color: '#EF3B39'});
        $('.contact').css({ color: '#F1F2F2'});
        isHome = false;
        isBio = false;
        isPort = true;
        //isBlog = false;
        isCont = false;
    }

    $('.portfolio').mouseenter(function() {
        $('.portfolio').css({ color: '#EF3B39'});
    });

    $('.portfolio').mouseleave(function() {
        if(isPort===false){
            $('.portfolio').css({ color: '#F1F2F2'});
        }
    });
})

/*$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#blog').position().top) {
        $('.bio').css({ color: '#F1F2F2'});
        $('.home').css({ color: '#F1F2F2'});
        $('.blog').css({ color: '#EF3B39'});
        $('.portfolio').css({ color: '#F1F2F2'});
        $('.contact').css({ color: '#F1F2F2'});
        isHome = false;
        isBio = false;
        isPort = false;
        isBlog = true;
        isCont = false;
    }

    $('.blog').mouseenter(function() {
        $('.blog').css({ color: '#EF3B39'});
    });

    $('.blog').mouseleave(function() {
        if(isBlog === false){
            $('.blog').css({ color: '#F1F2F2'});
        }
    });
})*/

$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#contact').position().top) {
        $('.bio').css({ color: '#F1F2F2'});
        $('.home').css({ color: '#F1F2F2'});
        //$('.blog').css({ color: '#F1F2F2'});
        $('.portfolio').css({ color: '#F1F2F2'});
        $('.contact').css({ color: '#EF3B39'});
        isHome = false;
        isBio = false;
        isPort = false;
        //isBlog = false;
        isCont = true;
    }
    $('.contact').mouseenter(function() {
        $('.contact').css({ color: '#EF3B39'});
    });

    $('.contact').mouseleave(function() {
        if(isCont === false){
            $('.contact').css({ color: '#F1F2F2'});
        }
    });
});


/*----------------------------------------- test function -----------------------------------------------------------*/

$(function() {

    $('#game1').mouseenter(function(){
        $('#hidder1').show();
        $('#portpic1').hide();
    });


    $('#game1').mouseleave(function(){
        $('#hidder1').hide();
        $('#portpic1').show();
    });


    $('#game2').mouseenter(function(){
        $('#hidder2').show();
        $('#portpic2').hide();
    });

    $('#game2').mouseleave(function(){
        $('#hidder2').hide();
        $('#portpic2').show();
    });

    $('#game3').mouseenter(function(){
        $('#hidder3').show();
        $('#portpic3').hide();
    });

    $('#game3').mouseleave(function(){
        $('#hidder3').hide();
        $('#portpic3').show();
    });

    $('#site1').mouseenter(function(){
        $('#hidder4').show();
        $('#portpic4').hide();
    });


    $('#site1').mouseleave(function(){
        $('#hidder4').hide();
        $('#portpic4').show();
    });


    $('#site2').mouseenter(function(){
        $('#hidder5').show();
        $('#portpic5').hide();
    });

    $('#site2').mouseleave(function(){
        $('#hidder5').hide();
        $('#portpic5').show();
    });

    $('#site3').mouseenter(function(){
        $('#hidder6').show();
        $('#portpic6').hide();
    });

    $('#site3').mouseleave(function(){
        $('#hidder6').hide();
        $('#portpic6').show();
    });

    /*-------------------------------------------------------------------------------------------------------*/

    $('#fs1').mouseenter(function(){
        $('#fs1').attr('src','img/linkedhove.png');
    });


    $('#fs1').mouseleave(function(){
        $('#fs1').attr('src','img/linkednohover.png');
    });


    $('#fs2').mouseenter(function(){
        $('#fs2').attr('src','img/twitterhover.png');
    });

    $('#fs2').mouseleave(function(){
        $('#fs2').attr('src','img/twitternohover.png');
    });

    $('#fs3').mouseenter(function(){
        $('#fs3').attr('src','img/facebookhover.png');
    });

    $('#fs3').mouseleave(function(){
        $('#fs3').attr('src','img/facebooknohover.png');
    });

    $('#fs4').mouseenter(function(){
        $('#fs4').attr('src','img/GitHubhover.png');
    });


    $('#fs4').mouseleave(function(){
        $('#fs4').attr('src','img/GitHubnohover.png');
    });

});

/*------------------------------------------ rotate function -------------------------------------------------------*/

$.fn.rotate=function(options) {
    var $this=$(this), prefixes, opts, wait4css=0;
    prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
    opts=$.extend({
        startDeg: false,
        endDeg: 360,
        duration: 1,
        count: 1,
        easing: 'linear',
        animate: {},
        forceJS: false
    }, options);

    function supports(prop) {
        var can=false, style=document.createElement('div').style;
        $.each(prefixes, function(i, prefix) {
            if (style[prefix.replace(/\-/g, '')+prop]==='') {
                can=true;
            }
        });
        return can;
    }

    function prefixed(prop, value) {
        var css={};
        if (!supports.transform) {
            return css;
        }
        $.each(prefixes, function(i, prefix) {
            css[prefix.toLowerCase()+prop]=value || '';
        });
        return css;
    }

    function generateFilter(deg) {
        var rot, cos, sin, matrix;
        if (supports.transform) {
            return '';
        }
        rot=deg>=0 ? Math.PI*deg/180 : Math.PI*(360+deg)/180;
        cos=Math.cos(rot);
        sin=Math.sin(rot);
        matrix='M11='+cos+',M12='+(-sin)+',M21='+sin+',M22='+cos+',SizingMethod="auto expand"';
        return 'progid:DXImageTransform.Microsoft.Matrix('+matrix+')';
    }

    supports.transform=supports('Transform');
    supports.transition=supports('Transition');

    opts.endDeg*=opts.count;
    opts.duration*=opts.count;

    if (supports.transition && !opts.forceJS) { // CSS-Transition
        if ((/Firefox/).test(navigator.userAgent)) {
            wait4css=(!options||!options.animate)&&(opts.startDeg===false||opts.startDeg>=0)?0:25;
        }
        $this.queue(function(next) {
            if (opts.startDeg!==false) {
                $this.css(prefixed('transform', 'rotate('+opts.startDeg+'deg)'));
            }
            setTimeout(function() {
                $this
                    .css(prefixed('transition', 'all '+opts.duration+'s '+opts.easing))
                    .css(prefixed('transform', 'rotate('+opts.endDeg+'deg)'))
                    .css(opts.animate);
            }, wait4css);

            setTimeout(function() {
                $this.css(prefixed('transition'));
                if (!opts.persist) {
                    $this.css(prefixed('transform'));
                }
                next();
            }, (opts.duration*1000)-wait4css);
        });

    } else { // JavaScript-Animation + filter
        if (opts.startDeg===false) {
            opts.startDeg=$this.data('rotated') || 0;
        }
        opts.animate.perc=100;

        $this.animate(opts.animate, {
            duration: opts.duration*1000,
            easing: $.easing[opts.easing] ? opts.easing : '',
            step: function(perc, fx) {
                var deg;
                if (fx.prop==='perc') {
                    deg=opts.startDeg+(opts.endDeg-opts.startDeg)*perc/100;
                    $this
                        .css(prefixed('transform', 'rotate('+deg+'deg)'))
                        .css('filter', generateFilter(deg));
                }
            },
            complete: function() {
                if (opts.persist) {
                    while (opts.endDeg>=360) {
                        opts.endDeg-=360;
                    }
                } else {
                    opts.endDeg=0;
                    $this.css(prefixed('transform'));
                }
                $this.css('perc', 0).data('rotated', opts.endDeg);
            }
        });
    }

    return $this;
};
