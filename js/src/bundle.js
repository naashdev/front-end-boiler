// Modules & Plugins
// ---------------------------------------------

// jQuery
var $ = require('jquery');

// Plugins
var VIEWPORT = require('./plugins/viewportSize.js');

// Polyfills
var Promise = require('promise-polyfill');

// Modules
var NAV = require('./modules/navigation');
var FORMS = require('./modules/forms');
var SLIDERS = require('./modules/sliders');
var UTILS = require('./modules/utils');

// Config
// ---------------------------------------------
var _config = {
    docReady: function(){
        // Document ready JS goes here...

        // Environment vars
        $BODY = $('body');
        $HTML = $('html');
        $WINDOW = $(window);
        $DOCUMENT = $(document);
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

    beforeDocReady: function(){
        // JS to fire before document ready goes here...

        // Add Promise support
        if (!window.Promise) {
          window.Promise = Promise;
        }

    },

    onResize: function(){
        // Resize events go here...
        // NOTE: this function is throttled
        _setEnv();
        NAV.resize();
    },

    onScroll: function(){
        // Scroll events go here...
        // NOTE: this function is throttled
        SLIDERS.scroll();
    },

}

// Core Functions
// ---------------------------------------------
// Set environment vars
var _setEnv = function() {
    VPW = viewportSize.getWidth();
    VPH = viewportSize.getHeight();
    BREAKMOBILE = 767;
    ISMOBILE = VPW <= BREAKMOBILE;
    NOTMOBILE = VPW > BREAKMOBILE;
};

// Bind global events
var _bindEvents = function(){
    // Resize listener
    $WINDOW.resize( UTILS.throttle( _config.onResize, 150 )  );

    // Scroll listener
    $WINDOW.scroll( UTILS.throttle( _config.onScroll, 150 ) );
};

// Init App
// ---------------------------------------------
_config.beforeDocReady();

$(function(){
    _config.docReady();
});
