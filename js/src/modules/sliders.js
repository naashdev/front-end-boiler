// Required
var SLICKSLIDER = require('../plugins/slick.min.js');
var UTILS = require('./utils');

// Init
var _init = function(){

    // Cache elements
    _setEl();

    // Bind events
    _bindEvents();

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



    var bgPromise = new Promise( function(resolve, reject){
        UTILS.loadBackgroundImg( $('.banner li'), false, resolve );
    } );

    var sliderPromise = new Promise( function(resolve, reject){
        $el.default.on('init', resolve );
        // Default slider
        $el.default.slick(settings);

    } );

    Promise
        .all([sliderPromise, bgPromise])
        .then( function(){
            $('.banner').addClass('is-loaded');
        } )
        .catch( function(){
            console.log('an error happened');
        } );


    // Carousel slider
    $el.carousel.slick(carouselSettings);

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
