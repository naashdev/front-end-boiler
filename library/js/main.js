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
  Example.init();

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
    Example.resize();

  },

  onScroll: function() {

    // Scroll events go here...

  },

};

/* --------------------------------
 | Example
 * ------------------------------*/

Example = {

  init: function() {

    this.setEl();
    this.bindEvents();

  },

  setEl: function() {

    $el = {};

  },

  bindEvents: function() {

    alert('Boilerplate initialized!!');

  },

  resize: function() {

  },

  scroll: function() {

  }

};
