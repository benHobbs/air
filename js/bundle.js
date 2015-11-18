// collapse navbar on option (fix bootstrap bs)
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

// Send message to debug console, scroll to bottom
function camera_debug_log( msg ) {
  $( '#debug_console' ).append( "$ " + msg + "<br>");
  $( '#debug_console' ).animate({scrollTop: $( '#debug_console' ).prop( "scrollHeight" )}, 500);
}

function getStatus ( url, elem ) {
  $.ajax({
    url: url,
    success: function( data ) {
      $( elem ).text( data );
      if (data === true) {
        $( elem ).removeClass('status-error');
        $( elem ).addClass('status-ok');
        $( elem ).text("Running");
      } else if (data === false) {
        $( elem ).removeClass('status-ok');
        $( elem ).addClass('status-error');
        $( elem ).text("Down");
      } else {
        $( elem ).text("Unknown");
        $( elem ).removeClass('status-ok');
        $( elem ).addClass('status-error');
      }
    }});
}

function getStatusAll () {
  getStatus( '/status-emf', '#emfstatus' );
}

function serviceCall ( url ) {
  $.ajax({
    url: url,
    success: function( data ) {
      console.log( data );
    }});
}

$(document).ready(function() {
  // Test for bootstrap
  //var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
  //alert(bootstrap3_enabled);

  $( '#navbar_full a' ).click( function( event ) {

    var this_id = $( this ).attr( 'id' ).toString();
    var target_div = "#" + this_id + "div";

    $( '#navbar li' ).removeClass( 'active' );
    $( this ).parent().addClass( 'active' );

    $( '.page' ).addClass( 'hidden' );
    $( target_div ).removeClass( 'hidden' );
  });

  $( '#aux' ).click( function ( event ) {
    getStatusAll();
  });

  // Status Listeners
  $( '#status_refresh' ).click (function( event ) {
    getStatusAll();
  });

  $( '#emfrestart' ).click (function( event ) {
    serviceCall( '/restart-emf' );
  });

  $( '#reboot' ).click (function( event ) {
    var r = confirm("Are you sure you want to reboot this device?");
    if (r) {
      serviceCall('/reboot');
    }
  });

  $( '#shutdown' ).click (function( event ) {
    var r = confirm("Are you sure you want to shut down this device?");
    if (r) {
      serviceCall('/shutdown');
    }
  });

  $( '#up' ).click (function( event ) {
    camera_debug_log("Gimbal: Tilt up ($tilt_deg) degrees");
  });

  $( '#down' ).click (function( event ) {
    camera_debug_log("Gimbal: Tilt down ($tilt_deg) degrees");
  });

  $( '#right' ).click (function( event ) {
    camera_debug_log("Gimbal: Pan right ($pan_deg) degrees");
  });

  $( '#left' ).click (function( event ) {
    camera_debug_log("Gimbal: Pan left ($pan_deg) degrees");
  });

  $( '#zoom-in' ).click (function( event ) {
    camera_debug_log("Camera: Zoom in ($zoom_percent) percent");
  });

  $( '#zoom-out' ).click (function( event ) {
    camera_debug_log("Camera: Zoom out ($zoom_percent) percent");
  });

  var socket = io();
  socket.on('update', function(data){
    var obj = JSON.parse(data);
    $( '#emf_x' ).text( obj['X'] );
    $( '#emf_y' ).text( obj['Y'] );
    $( '#emf_z' ).text( obj['Z'] );
    $( '#emf_xr' ).text( obj['XR'] );
    $( '#emf_yr' ).text( obj['YR'] );
    $( '#emf_zr' ).text( obj['ZR'] );
    $( '#emf_unit' ).text( obj['Unit']);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29sbGFwc2UgbmF2YmFyIG9uIG9wdGlvbiAoZml4IGJvb3RzdHJhcCBicylcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5uYXZiYXItY29sbGFwc2UuaW4nLGZ1bmN0aW9uKGUpIHtcbiAgICBpZiggJChlLnRhcmdldCkuaXMoJ2EnKSApIHtcbiAgICAgICAgJCh0aGlzKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgIH1cbn0pO1xuXG4vLyBTZW5kIG1lc3NhZ2UgdG8gZGVidWcgY29uc29sZSwgc2Nyb2xsIHRvIGJvdHRvbVxuZnVuY3Rpb24gY2FtZXJhX2RlYnVnX2xvZyggbXNnICkge1xuICAkKCAnI2RlYnVnX2NvbnNvbGUnICkuYXBwZW5kKCBcIiQgXCIgKyBtc2cgKyBcIjxicj5cIik7XG4gICQoICcjZGVidWdfY29uc29sZScgKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoICcjZGVidWdfY29uc29sZScgKS5wcm9wKCBcInNjcm9sbEhlaWdodFwiICl9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0dXMgKCB1cmwsIGVsZW0gKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiB1cmwsXG4gICAgc3VjY2VzczogZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICAkKCBlbGVtICkudGV4dCggZGF0YSApO1xuICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHtcbiAgICAgICAgJCggZWxlbSApLnJlbW92ZUNsYXNzKCdzdGF0dXMtZXJyb3InKTtcbiAgICAgICAgJCggZWxlbSApLmFkZENsYXNzKCdzdGF0dXMtb2snKTtcbiAgICAgICAgJCggZWxlbSApLnRleHQoXCJSdW5uaW5nXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBmYWxzZSkge1xuICAgICAgICAkKCBlbGVtICkucmVtb3ZlQ2xhc3MoJ3N0YXR1cy1vaycpO1xuICAgICAgICAkKCBlbGVtICkuYWRkQ2xhc3MoJ3N0YXR1cy1lcnJvcicpO1xuICAgICAgICAkKCBlbGVtICkudGV4dChcIkRvd25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCBlbGVtICkudGV4dChcIlVua25vd25cIik7XG4gICAgICAgICQoIGVsZW0gKS5yZW1vdmVDbGFzcygnc3RhdHVzLW9rJyk7XG4gICAgICAgICQoIGVsZW0gKS5hZGRDbGFzcygnc3RhdHVzLWVycm9yJyk7XG4gICAgICB9XG4gICAgfX0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0dXNBbGwgKCkge1xuICBnZXRTdGF0dXMoICcvc3RhdHVzLWVtZicsICcjZW1mc3RhdHVzJyApO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlQ2FsbCAoIHVybCApIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IHVybCxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiggZGF0YSApIHtcbiAgICAgIGNvbnNvbGUubG9nKCBkYXRhICk7XG4gICAgfX0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gVGVzdCBmb3IgYm9vdHN0cmFwXG4gIC8vdmFyIGJvb3RzdHJhcDNfZW5hYmxlZCA9ICh0eXBlb2YgJCgpLmVtdWxhdGVUcmFuc2l0aW9uRW5kID09ICdmdW5jdGlvbicpO1xuICAvL2FsZXJ0KGJvb3RzdHJhcDNfZW5hYmxlZCk7XG5cbiAgJCggJyNuYXZiYXJfZnVsbCBhJyApLmNsaWNrKCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICB2YXIgdGhpc19pZCA9ICQoIHRoaXMgKS5hdHRyKCAnaWQnICkudG9TdHJpbmcoKTtcbiAgICB2YXIgdGFyZ2V0X2RpdiA9IFwiI1wiICsgdGhpc19pZCArIFwiZGl2XCI7XG5cbiAgICAkKCAnI25hdmJhciBsaScgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcbiAgICAkKCB0aGlzICkucGFyZW50KCkuYWRkQ2xhc3MoICdhY3RpdmUnICk7XG5cbiAgICAkKCAnLnBhZ2UnICkuYWRkQ2xhc3MoICdoaWRkZW4nICk7XG4gICAgJCggdGFyZ2V0X2RpdiApLnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xuICB9KTtcblxuICAkKCAnI2F1eCcgKS5jbGljayggZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICBnZXRTdGF0dXNBbGwoKTtcbiAgfSk7XG5cbiAgLy8gU3RhdHVzIExpc3RlbmVyc1xuICAkKCAnI3N0YXR1c19yZWZyZXNoJyApLmNsaWNrIChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgZ2V0U3RhdHVzQWxsKCk7XG4gIH0pO1xuXG4gICQoICcjZW1mcmVzdGFydCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIHNlcnZpY2VDYWxsKCAnL3Jlc3RhcnQtZW1mJyApO1xuICB9KTtcblxuICAkKCAnI3JlYm9vdCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIHZhciByID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZWJvb3QgdGhpcyBkZXZpY2U/XCIpO1xuICAgIGlmIChyKSB7XG4gICAgICBzZXJ2aWNlQ2FsbCgnL3JlYm9vdCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCggJyNzaHV0ZG93bicgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIHZhciByID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzaHV0IGRvd24gdGhpcyBkZXZpY2U/XCIpO1xuICAgIGlmIChyKSB7XG4gICAgICBzZXJ2aWNlQ2FsbCgnL3NodXRkb3duJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCAnI3VwJyApLmNsaWNrIChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgY2FtZXJhX2RlYnVnX2xvZyhcIkdpbWJhbDogVGlsdCB1cCAoJHRpbHRfZGVnKSBkZWdyZWVzXCIpO1xuICB9KTtcblxuICAkKCAnI2Rvd24nICkuY2xpY2sgKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBjYW1lcmFfZGVidWdfbG9nKFwiR2ltYmFsOiBUaWx0IGRvd24gKCR0aWx0X2RlZykgZGVncmVlc1wiKTtcbiAgfSk7XG5cbiAgJCggJyNyaWdodCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGNhbWVyYV9kZWJ1Z19sb2coXCJHaW1iYWw6IFBhbiByaWdodCAoJHBhbl9kZWcpIGRlZ3JlZXNcIik7XG4gIH0pO1xuXG4gICQoICcjbGVmdCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGNhbWVyYV9kZWJ1Z19sb2coXCJHaW1iYWw6IFBhbiBsZWZ0ICgkcGFuX2RlZykgZGVncmVlc1wiKTtcbiAgfSk7XG5cbiAgJCggJyN6b29tLWluJyApLmNsaWNrIChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgY2FtZXJhX2RlYnVnX2xvZyhcIkNhbWVyYTogWm9vbSBpbiAoJHpvb21fcGVyY2VudCkgcGVyY2VudFwiKTtcbiAgfSk7XG5cbiAgJCggJyN6b29tLW91dCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGNhbWVyYV9kZWJ1Z19sb2coXCJDYW1lcmE6IFpvb20gb3V0ICgkem9vbV9wZXJjZW50KSBwZXJjZW50XCIpO1xuICB9KTtcblxuICB2YXIgc29ja2V0ID0gaW8oKTtcbiAgc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcbiAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAkKCAnI2VtZl94JyApLnRleHQoIG9ialsnWCddICk7XG4gICAgJCggJyNlbWZfeScgKS50ZXh0KCBvYmpbJ1knXSApO1xuICAgICQoICcjZW1mX3onICkudGV4dCggb2JqWydaJ10gKTtcbiAgICAkKCAnI2VtZl94cicgKS50ZXh0KCBvYmpbJ1hSJ10gKTtcbiAgICAkKCAnI2VtZl95cicgKS50ZXh0KCBvYmpbJ1lSJ10gKTtcbiAgICAkKCAnI2VtZl96cicgKS50ZXh0KCBvYmpbJ1pSJ10gKTtcbiAgICAkKCAnI2VtZl91bml0JyApLnRleHQoIG9ialsnVW5pdCddKTtcbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
