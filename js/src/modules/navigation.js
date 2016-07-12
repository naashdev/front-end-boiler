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
        nav: $('.header .js__main-nav'),
        navLi: $('.header .main-navigation > ul > li'),
        subnavs: $('.header .js__submenu'),
        openNav: $('.header .js__menu-ctrl, .header .main-navigation .js__submenu-ctrl')
    };

}

// Private functions
var bindEvents = function(){

    //Toggle nav
    $el.openNav.on('click', toggle);

};

var toggle = function(e){

    if (typeof e !== 'undefined') e.preventDefault();

    if ($(this).hasClass('js__menu-ctrl')) {

        if ($BODY.hasClass('nav-open')) {
            // Close subnavs
            $el.subnavs.slideUp();
            $el.navLi.removeClass('is__open');
        }

        // Open main nav
        $el.nav.slideToggle(400);
        $BODY.toggleClass('nav-open');


    } else {

        var parent = $(this).closest('li'),
            subnav = parent.find('.submenu');

        // Close all sub navs
        $el.navLi.not(parent).removeClass('is__open');
        $el.subnavs.not(subnav).slideUp(400);

        // Open sub nav
        parent.toggleClass('is__open');
        subnav.slideToggle(400);

    }

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
