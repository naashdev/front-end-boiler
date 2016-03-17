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
