// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// jQuery/helper plugins 

//plugin bootstrap minus and plus

$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }

});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) || 
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

// Rotator
/*if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Rotate = {

        init : function (el,options) {

             var base = this;
             base.rotatelist = el;
             base.options = $.extend({}, $.fn.rotator.options, options);

             base.item = new  Array;

             for (var i = 0, length = base.rotatelist.length; i < length; i++)
             {
                
               base.item[i] = new Array;
               base.item[i].rotateId =  $(base.rotatelist[i]).attr('id');
               base.item[i].terms    =  $("#"+base.item[i].rotateId+" ul li");
               base.item[i].animate  =  base.valid_anim($("#"+base.item[i].rotateId).attr('data-rotate-animate').split(','));
               base.item[i].arena    =  $("#"+base.item[i].rotateId+" .rotate-arena");
               base.item[i].interval =  base.valid_interval($("#"+base.item[i].rotateId).attr('data-rotate-interval'));

               $("#"+base.item[i].rotateId+" ul").hide();
               
               base.rotatePlay(i);

             }
        },
        rotatePlay : function (i) {

            var base = this;

            setTimeout(function() {

                  var item = base.item[i];

                  var ct = item.arena.data("term") || 0;

                  item.arena.data("term", ct === item.terms.length - 1 ? 0 : ct + 1).html(item.terms.eq([ct]).html());


                    base.anim(item.arena,item.animate[0]);

                    setTimeout(function() {

                        base.anim(item.arena,item.animate[1]);

                         base.rotatePlay(i);

                    },  item.interval);

            }, 1000);

        },
        valid_anim: function(x) {

            var base = this;
            if (x) {
                return x;
            } else {
                return $("#"+base.options.interval).attr('data-rotate-animate').split(',');
            }

        },
        valid_interval: function(x) {

            var base = this;
            if ( isNaN(x) ) {
                return base.options.interval;

            } else {
                return x;
            }

        },
        anim: function(arena,x) {
                var base = this;              
                arena.removeClass().addClass('rotate-arena ' + x + ' '+base.options.animateClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        }

    };

    $.fn.rotator = function (options) {
            var rotator = Object.create(Rotate);
            rotator.init(this,options);
            $.data(this, "rotator", Rotate);
    };

    $.fn.rotator.options = {
        animateClass : "animated",
        interval     : "5000",
        animate      : "fadeInUp,fadeOutDown"
    };

} (jQuery, window, document));*/