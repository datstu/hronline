(function($) {
    'use strict';
    $(function() {
        if(document.body.offsetWidth > 991){
           var e1 =  document.querySelector('#form-elements').previousElementSibling.setAttribute("href", "");
           var e2 =  document.querySelector('#charts').previousElementSibling.setAttribute("href", "");
           var e3 =  document.querySelector('#tables').previousElementSibling.setAttribute("href", "");
           var e4 =  document.querySelector('#icons').previousElementSibling.setAttribute("href", "");
           var e5 =  document.querySelector('#auth').previousElementSibling.setAttribute("href", "");
           
        }
    });
})(jQuery);