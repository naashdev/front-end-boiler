/* --------------------------------
 | Utilities
 * ------------------------------*/

// Required
// .....

/*var setCookie = function(name, val, days){
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = name + "=" + val + expires + ";";
};

var getCookie = function(name){

    var cookie = name + "=";
    var array = document.cookie.split(';');

    $.each(array, function(i){
        var c = array[i];
         while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(cookie) == 0) return c.substring(cookie.length, c.length);
    });

    return '';

};

module.exports = {
    setCookie: setCookie,
    getCookie: getCookie,
}*/
