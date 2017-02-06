// Required
var UTILS = require('./utils');

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
        menu: $('.header .js-mobile-menu'),
        menuLi: $('.header .main-navigation > ul > li'),
        subnavs: $('.header .main-navigation .submenu'),
        openNav: $('.header .js-menu-toggle, .header .main-navigation .js-submenu-toggle')
    };

}

// Private functions
var _bindEvents = function(){

    //Toggle nav
    $el.openNav.on('click', _toggle);

};

var _toggle = function(e){

    if (typeof e !== 'undefined') e.preventDefault();

    if ($(this).hasClass('js-menu-toggle')) {

        if ($BODY.hasClass('nav-open')) {
            // Close subnavs
            $el.subnavs.slideUp();
            $el.menuLi.removeClass('is-open');
        }

        // Open main nav
        $el.menu.slideToggle(400);
        $BODY.toggleClass('nav-open');


    } else {

        var parent = $(this).closest('li'),
            subnav = parent.find('.submenu');

        // Close all sub navs
        $el.menuLi.not(parent).removeClass('is-open');
        $el.subnavs.not(subnav).slideUp(400);

        // Open sub nav
        parent.toggleClass('is-open');
        subnav.slideToggle(400);

    }

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
