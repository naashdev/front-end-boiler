/* --------------------------------
 | Utilities
 * ------------------------------*/

// Required
// .....

// Match heights of items in a row
var _matchHeights = function(elements){
    var elements = elements.selector ? elements : $(elements),
        length = elements.length;
        max = 0;
    if (length) {
        while(length--) {
            var element = $(elements[length]).attr('style', '');
            if (element.outerHeight() > max) max = element.outerHeight();
            if (!length) {
                length = elements.length; break;
            }
        }
        while(length--) {
            var element = $(elements[length]);
            element.css({'height': max + 'px'});
        }
    }
}

module.exports = {
    matchHeights: _matchHeights
}
