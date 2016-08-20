// Required
var CUSTOMSELECT = require('../plugins/jquery.customSelect.min.js');
var PLACEHOLDER = require('../plugins/jquery.placeholder.min.js');

// Init
var _init = function(){

    // Cache elements
    _setEl();

    // Style select boxes
    $el.select.customSelect();

    // Add placeholder for IE9
    $el.field.placeholder();

};

// Elements
var $el = {};

var _setEl = function(){

    $el = {
        select: $('.select > select'),
        field: $('input, text-area')
    };

}

// Private functions
var _bindEvents = function(){

};

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
