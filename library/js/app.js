$(function(){exampleModule.init()}),exampleModule=function(){function e(){alert("Boilerplate")}var n={};return n={init:e}}();
/* --------------------------------------------------------------------------
 * DOCUMENT READY JS
 * ------------------------------------------------------------------------*/

$(function(){

    exampleModule.init();
    //alert('other');

});

/* --------------------------------------------------------------------------
 * EXAMPLE MODULE
 * ------------------------------------------------------------------------*/

exampleModule = (function(){

    var _self = {};

    function init(){
        alert('Boilerplate');
    }

    _self = {
        init: init
    };

    return _self;

})();
