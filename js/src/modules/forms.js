// Required
var CUSTOMSELECT = require('../plugins/jquery.customSelect.min.js');

// Init
var init = function(){

    // Cache elements
    setEl();

    // Style select boxes
    $el.select.customSelect();

};

// Elements
var $el = {};

var setEl = function(){

    $el = {
        select: $('.select > select'),
    };

}

// Private functions
var bindEvents = function(){

};

// On Resize
var resize = function(){
    // Resize events go here...
};

// On Scroll
var scroll = function(){
    // Scroll events go here...
};

module.exports = {
    init: init,
    resize: resize,
    scroll: scroll,
};
