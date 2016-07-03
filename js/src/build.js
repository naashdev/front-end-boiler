/* --------------------------------
 | Modules
 * ------------------------------*/

var NAV = require('./modules/navigation');
var FORMS = require('./modules/forms');

/* --------------------------------
 | Config
 * ------------------------------*/

var docReady = function(){

    // Document ready JS goes here...

    // Environment
    $BODY = $('body');
    $HTML = $('html');
    $WINDOW = $(window);
    setEnv();

    // Other settings
    EASING = {
        easing: 'easeInOut'
    };

    // Modules
    NAV.init();
    FORMS.init();

};

var setEnv = function() {
    VPW = $WINDOW.width();
    ISMOBILE = VPW < 768;
    NOTMOBILE = VPW > 767;
};

var bindEvents = function(){

    // Resize listener
    var resizeTimer;

    $WINDOW.resize(function() {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {

            onResize();

        }, 250);

    });

    // Scroll listener
    $WINDOW.scroll(function() {

    });

}

var onResize = function(){
    // Resize events go here...
    setEnv();
    NAV.resize();
};

var onScroll = function(){
    // Scroll events go here...
};

$(function(){
    docReady();
    bindEvents();
});
