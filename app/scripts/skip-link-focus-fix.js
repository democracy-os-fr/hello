'use strict';
( function() {
  var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
  var isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1;
  var isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

  if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
    window.addEventListener( 'hashchange', function() {
      var id = location.hash.substring( 1 );
      var element;

      if ( !( /^[A-z0-9_-]+$/.test( id ) ) ) {
        return;
      }

      element = document.getElementById( id );

      if ( element ) {
        if ( !( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
          element.tabIndex = -1;
        }
        element.focus();
      }
    }, false );
  }
})();
