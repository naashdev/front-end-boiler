/* --------------------------------
 | Document Ready JS
 * ------------------------------*/

$(function(){

  // Environment
  $BODY = $('body');
  $HTML = $('html');
  $WINDOW = $(window);
  VPW = null;
  ISMOBILE = false;
  NOTMOBILE = false;

  // Settings
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

App = (function(){

  var _self = {

    init: function(){

      _self.setVPVars();

      $WINDOW.resize(function(){
        _self.setVPVars();
      });

    },

    setVPVars: function(){
      VPW = $WINDOW.width();
      ISMOBILE = VPW < 768;
      NOTMOBILE = VPW > 767;
    }

  }

  return _self;

})();

/* --------------------------------
 | Example
 * ------------------------------*/

Example = (function() {

  var _self = {

    init: function(){

      alert('Boilerplate Loaded')

      var $el = {};

      _self.setEl();
      _self.bindEvents();

    },

    setEl: function(){

      $el = {
      };

    },

    bindEvents: function(){



    },

    clickFunction: function(e){

      e.preventDefault();

    },

  };

  return _self;

})();
