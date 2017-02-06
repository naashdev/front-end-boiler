// A collection of utility functions
// ---------------------------------------------

// Match heights of items in a row
var _matchHeights = function(elements){
    var elements = elements.selector ? elements : $(elements),
        length = elements.length;
        max = 0;
    if (length) {
        while(length--) {
            var element = $(elements[length]).attr('style', '');
            if (element.outerHeight() > max) max = element.outerHeight();
            if (!length) {
                length = elements.length; break;
            }
        }
        while(length--) {
            var element = $(elements[length]);
            element.css({'height': max + 'px'});
        }
    }
}

// Scroll to a element with id
var _scrollToHash = function(el, offset) {
    if (location.pathname.replace(/^\//,'') == el.pathname.replace(/^\//,'') && location.hostname == el.hostname) {
      var target = $(el.hash);
      target = target.length ? target : $('[name=' + el.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 1000);
        return false;
      }
    }
}

// Redirect browser with value of select box
var _selectRedirect = function(){
    var url = $(this).find(":selected").val();
    if (url) window.location = url; // Only fire if option value exists
};

// Detect which CSS transition event
var _whichTransitionEvent = function(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

// Debounce
var _debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
        var last = new Date().getTime() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function() {
        context = this;
        args = arguments;
        timestamp = new Date().getTime();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};

// Throttle
var _throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

// Create cookie
var _createCookie = function(name,value,days) {
     if (days) {
         var date = new Date();
         date.setTime(date.getTime()+(days*24*60*60*1000));
         var expires = "; expires="+date.toGMTString();
     }
     else var expires = "";
     document.cookie = name+"="+value+expires+"; path=/";
}

// Read cookie
var _readCookie = function(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for(var i=0;i < ca.length;i++) {
         var c = ca[i];
         while (c.charAt(0)==' ') c = c.substring(1,c.length);
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
     }
     return null;
}

// Delete cookie
var _deleteCookie = function(name) {
     _createCookie(name,"",-1);
}

// Background Image load
var _loadBackgroundImg = function(bgImg, container, callback) {

    if (bgImg.length) {

        $.each( bgImg, function(i){

            var newImg = new Image();

            var img = $(this),
                src = img.data('background-image').match(/url\((['"])?(.*?)\1\)/)[2];

            newImg.onload = function(){
                img.css({'background-image': img.data('background-image')});
                img.addClass('is-loaded');
                // If is the last image in the loop
                if (i + 1 === bgImg.length){
                    // If container is supplied
                    if (typeof container !== 'undefined' && container.length) container.addClass('is-loaded');
                    // If callback is supplied
                    if (typeof callback === 'function'){
                         callback();
                    };
                }
            };

            newImg.src = src;

        });

    }

}

module.exports = {
    matchHeights: _matchHeights,
    scrollToHash: _scrollToHash,
    selectRedirect: _selectRedirect,
    whichTransitionEvent: _whichTransitionEvent,
    debounce: _debounce,
    throttle: _throttle,
    createCookie: _createCookie,
    readCookie: _readCookie,
    deleteCookie: _deleteCookie,
    loadBackgroundImg: _loadBackgroundImg
}
