// Required
// .....

// Init
var init = function(){

    // Cache elements
    setEl();

    // Bind events
    bindEvents();

};

// Elements
var $el = {};

var setEl = function(){

    $el = {
        // name: $(selector)
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
