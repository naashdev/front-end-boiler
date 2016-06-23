/* --------------------------------
 | Document Ready JS
 * ------------------------------*/

$(function() {

    // Environment
    $BODY = $('body');
    $HTML = $('html');
    $WINDOW = $(window);
    VPW = null;
    ISMOBILE = false;
    NOTMOBILE = false;

    // Other Settings
    EASING = {
        easing: 'easeInOut'
    };

    // Modules
    App.init();
    MainNav.init();

});

/* --------------------------------
 | App
 * ------------------------------*/

App = {

    init: function() {

        this.setEnv();
        this.bindEvents();

    },

    setEnv: function() {

        VPW = $WINDOW.width();
        ISMOBILE = VPW < 768;
        NOTMOBILE = VPW > 767;

    },

    bindEvents: function() {

        // Resize listener
        var resizeTimer;

        $WINDOW.resize(function() {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {

                App.onResize();

            }, 250);

        });

        // Scroll listener
        $WINDOW.scroll(function() {

        });


    },

    onResize: function() {

        // Set environment vars
        App.setEnv();

        // Resize events go here...

    },

    onScroll: function() {

        // Scroll events go here...

    },

};

/* --------------------------------
 | Main Nav
 * ------------------------------*/

MainNav = {

    init: function() {

        var $el = {};

        this.setEl();
        this.bindEvents();

    },

    setEl: function() {

        $el = {
            nav: $('.header .js__main-nav'),
            navLi: $('.header .main-navigation > ul > li'),
            subnavs: $('.header .js__submenu'),
            openNav: $('.header .js__menu-ctrl, .header .main-navigation .js__submenu-ctrl')
        };

    },

    bindEvents: function() {

        $el.openNav.on('click', this.toggleNav);

    },

    resize: function() {

        // Resize events go here...

    },

    scroll: function() {

        // Scroll events go here...

    },

    toggleNav: function(e){


        if (typeof e !== 'undefined') e.preventDefault();

        if ($(this).hasClass('js__menu-ctrl')) {

            if ($BODY.hasClass('nav-open')) {
                // Close subnavs
                $el.subnavs.slideUp();
                $el.navLi.removeClass('is-open');
            }

            // Open main nav
            $el.nav.slideToggle(400);
            $BODY.toggleClass('nav-open');


        } else {

            var parent = $(this).closest('li'),
                subnav = parent.find('.submenu');

            // Close all sub navs
            $el.navLi.not(parent).removeClass('is-open');
            $el.subnavs.not(subnav).slideUp(400);

            // Open sub nav
            parent.toggleClass('is-open');
            subnav.slideToggle(400);

        }

    },

};
