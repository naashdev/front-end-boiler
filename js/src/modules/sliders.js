// Required
var SLICKSLIDER = require('../plugins/slick.min.js');

// Init
var _init = function(){

    // Cache elements
    _setEl();

    // Bind events
    _bindEvents();

};

// Elements
var $el = {};

var _setEl = function(){

    $el = {
        // name: $(selector)
        default: $('.js-boiler-slider > .slider'),
        defaultCtrls: $('.js-boiler-slider > .slider-controls'),
        carousel: $('.js-boiler-carousel > .slider'),
        carouselCtrls: $('.js-boiler-carousel > .slider-controls'),
    };

}

// Private functions
var _bindEvents = function(){

    // Define settings
    var settings = _makeSettings($el.defaultCtrls);
    var carouselSettings = _makeSettings($el.carouselCtrls, {
        slidesToShow: 3,
        responsive: [{
            breakpoint: BREAKMOBILE,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    // Default slider
    $el.default.slick(settings);

    // Carousel slider
    $el.carousel.slick(carouselSettings);

};

var _makeSettings = function($controls, extra_settings){
    var _settings = {
        draggable: false,
        dots: true,
        dotsClass: 'pager',
        customPaging: function(slider, i) {
            return $('<button type="button" data-role="none" role="button" tabindex="0" />');
        },
        appendDots: $controls,
        prevArrow: $controls.find('.prev'),
        nextArrow: $controls.find('.next'),
        appendArrows: $controls
    }

    // Add extra settings
    for(var i in extra_settings) {
        _settings[i] = extra_settings[i];
    }

    return _settings;
}

// On Resize
var _resize = function(){
    // Resize events go here...
};

// On Scroll
var _scroll = function(){
    // Scroll events go here...
};

module.exports = {
    init: _init,
    resize: _resize,
    scroll: _scroll,
};
