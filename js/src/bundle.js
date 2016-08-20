/* --------------------------------
 | Modules & Plugins
 * ------------------------------*/
global.$ = require('jquery');
var VIEWPORT = require('./plugins/viewportSize.js');
var NAV = require('./modules/navigation');
var FORMS = require('./modules/forms');
var SLIDERS = require('./modules/sliders');

/* --------------------------------
 | Config
 * ------------------------------*/
var _config = {
    docReady: function(){
        // Document ready JS goes here...
        // Environment vars
        $BODY = $('body');
        $HTML = $('html');
        $WINDOW = $(window);
        _setEnv();

        // Other global settings
        EASING = {
            easing: 'easeInOut'
        };

        // Global Events
        _bindEvents();

        // Modules
        NAV.init();
        FORMS.init();
        SLIDERS.init();

    },

    onResize: function(){
        // Resize events go here...
        _setEnv();
        NAV.resize();
    },

    onScroll: function(){
        // Scroll events go here...
    },

}

/* --------------------------------
 | Core Functions
 * ------------------------------*/
var _setEnv = function() {
    VPW = viewportSize.getWidth();
    VPH = viewportSize.getHeight();
    BREAKMOBILE = 767;
    ISMOBILE = VPW <= BREAKMOBILE;
    NOTMOBILE = VPW > BREAKMOBILE;
};

var _bindEvents = function(){
    // Resize listener
    $WINDOW.resize(function() {
        _config.onResize();
    });

    // Scroll listener
    $WINDOW.scroll( function() {
        _config.onScroll();
    } );
};

// Document ready
$(function(){
    _config.docReady();
});
