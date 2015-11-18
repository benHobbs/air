function camera_debug_log(msg){$("#debug_console").append("$ "+msg+"<br>"),$("#debug_console").animate({scrollTop:$("#debug_console").prop("scrollHeight")},500)}function getStatus(url,elem){$.ajax({url:url,success:function(data){$(elem).text(data),data===!0?($(elem).removeClass("status-error"),$(elem).addClass("status-ok"),$(elem).text("Running")):data===!1?($(elem).removeClass("status-ok"),$(elem).addClass("status-error"),$(elem).text("Down")):($(elem).text("Unknown"),$(elem).removeClass("status-ok"),$(elem).addClass("status-error"))}})}function getStatusAll(){getStatus("/status-emf","#emfstatus")}function restartService(url){$.ajax({url:url,success:function(data){console.log(data)}})}$(document).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&$(this).collapse("hide")}),$(document).ready(function(){$("#navbar_full a").click(function(event){var this_id=$(this).attr("id").toString(),target_div="#"+this_id+"div";$("#navbar li").removeClass("active"),$(this).parent().addClass("active"),$(".page").addClass("hidden"),$(target_div).removeClass("hidden")}),$("#aux").click(function(event){getStatusAll()}),$("#status_refresh").click(function(event){getStatusAll()}),$("#emfrestart").click(function(event){restartService("/restart-emf")}),$("#up").click(function(event){camera_debug_log("Gimbal: Tilt up ($tilt_deg) degrees")}),$("#down").click(function(event){camera_debug_log("Gimbal: Tilt down ($tilt_deg) degrees")}),$("#right").click(function(event){camera_debug_log("Gimbal: Pan right ($pan_deg) degrees")}),$("#left").click(function(event){camera_debug_log("Gimbal: Pan left ($pan_deg) degrees")}),$("#zoom-in").click(function(event){camera_debug_log("Camera: Zoom in ($zoom_percent) percent")}),$("#zoom-out").click(function(event){camera_debug_log("Camera: Zoom out ($zoom_percent) percent")});var socket=io();socket.on("update",function(data){var obj=JSON.parse(data);$("#emf_x").text(obj.X),$("#emf_y").text(obj.Y),$("#emf_z").text(obj.Z),$("#emf_xr").text(obj.XR),$("#emf_yr").text(obj.YR),$("#emf_zr").text(obj.ZR)})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYW1lcmFfZGVidWdfbG9nIiwibXNnIiwiJCIsImFwcGVuZCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJwcm9wIiwiZ2V0U3RhdHVzIiwidXJsIiwiZWxlbSIsImFqYXgiLCJzdWNjZXNzIiwiZGF0YSIsInRleHQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0U3RhdHVzQWxsIiwicmVzdGFydFNlcnZpY2UiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJ0YXJnZXQiLCJpcyIsInRoaXMiLCJjb2xsYXBzZSIsInJlYWR5IiwiY2xpY2siLCJldmVudCIsInRoaXNfaWQiLCJhdHRyIiwidG9TdHJpbmciLCJ0YXJnZXRfZGl2IiwicGFyZW50Iiwic29ja2V0IiwiaW8iLCJvYmoiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQVFBLFFBQUFBLGtCQUFBQyxLQUNBQyxFQUFBLGtCQUFBQyxPQUFBLEtBQUFGLElBQUEsUUFDQUMsRUFBQSxrQkFBQUUsU0FBQUMsVUFBQUgsRUFBQSxrQkFBQUksS0FBQSxpQkFBQSxLQUdBLFFBQUFDLFdBQUFDLElBQUFDLE1BQ0FQLEVBQUFRLE1BQ0FGLElBQUFBLElBQ0FHLFFBQUEsU0FBQUMsTUFDQVYsRUFBQU8sTUFBQUksS0FBQUQsTUFDQUEsUUFBQSxHQUNBVixFQUFBTyxNQUFBSyxZQUFBLGdCQUNBWixFQUFBTyxNQUFBTSxTQUFBLGFBQ0FiLEVBQUFPLE1BQUFJLEtBQUEsWUFDQUQsUUFBQSxHQUNBVixFQUFBTyxNQUFBSyxZQUFBLGFBQ0FaLEVBQUFPLE1BQUFNLFNBQUEsZ0JBQ0FiLEVBQUFPLE1BQUFJLEtBQUEsVUFFQVgsRUFBQU8sTUFBQUksS0FBQSxXQUNBWCxFQUFBTyxNQUFBSyxZQUFBLGFBQ0FaLEVBQUFPLE1BQUFNLFNBQUEsb0JBS0EsUUFBQUMsZ0JBQ0FULFVBQUEsY0FBQSxjQUdBLFFBQUFVLGdCQUFBVCxLQUNBTixFQUFBUSxNQUNBRixJQUFBQSxJQUNBRyxRQUFBLFNBQUFDLE1BQ0FNLFFBQUFDLElBQUFQLFNBekNBVixFQUFBa0IsVUFBQUMsR0FBQSxRQUFBLHNCQUFBLFNBQUFDLEdBQ0FwQixFQUFBb0IsRUFBQUMsUUFBQUMsR0FBQSxNQUNBdEIsRUFBQXVCLE1BQUFDLFNBQUEsVUEyQ0F4QixFQUFBa0IsVUFBQU8sTUFBQSxXQUtBekIsRUFBQSxrQkFBQTBCLE1BQUEsU0FBQUMsT0FFQSxHQUFBQyxTQUFBNUIsRUFBQXVCLE1BQUFNLEtBQUEsTUFBQUMsV0FDQUMsV0FBQSxJQUFBSCxRQUFBLEtBRUE1QixHQUFBLGNBQUFZLFlBQUEsVUFDQVosRUFBQXVCLE1BQUFTLFNBQUFuQixTQUFBLFVBRUFiLEVBQUEsU0FBQWEsU0FBQSxVQUNBYixFQUFBK0IsWUFBQW5CLFlBQUEsWUFHQVosRUFBQSxRQUFBMEIsTUFBQSxTQUFBQyxPQUNBYixpQkFJQWQsRUFBQSxtQkFBQTBCLE1BQUEsU0FBQUMsT0FDQWIsaUJBR0FkLEVBQUEsZUFBQTBCLE1BQUEsU0FBQUMsT0FDQVosZUFBQSxrQkFHQWYsRUFBQSxPQUFBMEIsTUFBQSxTQUFBQyxPQUNBN0IsaUJBQUEseUNBR0FFLEVBQUEsU0FBQTBCLE1BQUEsU0FBQUMsT0FDQTdCLGlCQUFBLDJDQUdBRSxFQUFBLFVBQUEwQixNQUFBLFNBQUFDLE9BQ0E3QixpQkFBQSwwQ0FHQUUsRUFBQSxTQUFBMEIsTUFBQSxTQUFBQyxPQUNBN0IsaUJBQUEseUNBR0FFLEVBQUEsWUFBQTBCLE1BQUEsU0FBQUMsT0FDQTdCLGlCQUFBLDZDQUdBRSxFQUFBLGFBQUEwQixNQUFBLFNBQUFDLE9BQ0E3QixpQkFBQSw2Q0FHQSxJQUFBbUMsUUFBQUMsSUFDQUQsUUFBQWQsR0FBQSxTQUFBLFNBQUFULE1BQ0EsR0FBQXlCLEtBQUFDLEtBQUFDLE1BQUEzQixLQUNBVixHQUFBLFVBQUFXLEtBQUF3QixJQUFBLEdBQ0FuQyxFQUFBLFVBQUFXLEtBQUF3QixJQUFBLEdBQ0FuQyxFQUFBLFVBQUFXLEtBQUF3QixJQUFBLEdBQ0FuQyxFQUFBLFdBQUFXLEtBQUF3QixJQUFBLElBQ0FuQyxFQUFBLFdBQUFXLEtBQUF3QixJQUFBLElBQ0FuQyxFQUFBLFdBQUFXLEtBQUF3QixJQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbGxhcHNlIG5hdmJhciBvbiBvcHRpb24gKGZpeCBib290c3RyYXAgYnMpXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCcubmF2YmFyLWNvbGxhcHNlLmluJyxmdW5jdGlvbihlKSB7XG4gICAgaWYoICQoZS50YXJnZXQpLmlzKCdhJykgKSB7XG4gICAgICAgICQodGhpcykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICB9XG59KTtcblxuLy8gU2VuZCBtZXNzYWdlIHRvIGRlYnVnIGNvbnNvbGUsIHNjcm9sbCB0byBib3R0b21cbmZ1bmN0aW9uIGNhbWVyYV9kZWJ1Z19sb2coIG1zZyApIHtcbiAgJCggJyNkZWJ1Z19jb25zb2xlJyApLmFwcGVuZCggXCIkIFwiICsgbXNnICsgXCI8YnI+XCIpO1xuICAkKCAnI2RlYnVnX2NvbnNvbGUnICkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKCAnI2RlYnVnX2NvbnNvbGUnICkucHJvcCggXCJzY3JvbGxIZWlnaHRcIiApfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHVzICggdXJsLCBlbGVtICkge1xuICAkLmFqYXgoe1xuICAgIHVybDogdXJsLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgJCggZWxlbSApLnRleHQoIGRhdGEgKTtcbiAgICAgIGlmIChkYXRhID09PSB0cnVlKSB7XG4gICAgICAgICQoIGVsZW0gKS5yZW1vdmVDbGFzcygnc3RhdHVzLWVycm9yJyk7XG4gICAgICAgICQoIGVsZW0gKS5hZGRDbGFzcygnc3RhdHVzLW9rJyk7XG4gICAgICAgICQoIGVsZW0gKS50ZXh0KFwiUnVubmluZ1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgJCggZWxlbSApLnJlbW92ZUNsYXNzKCdzdGF0dXMtb2snKTtcbiAgICAgICAgJCggZWxlbSApLmFkZENsYXNzKCdzdGF0dXMtZXJyb3InKTtcbiAgICAgICAgJCggZWxlbSApLnRleHQoXCJEb3duXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCggZWxlbSApLnRleHQoXCJVbmtub3duXCIpO1xuICAgICAgICAkKCBlbGVtICkucmVtb3ZlQ2xhc3MoJ3N0YXR1cy1vaycpO1xuICAgICAgICAkKCBlbGVtICkuYWRkQ2xhc3MoJ3N0YXR1cy1lcnJvcicpO1xuICAgICAgfVxuICAgIH19KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHVzQWxsICgpIHtcbiAgZ2V0U3RhdHVzKCAnL3N0YXR1cy1lbWYnLCAnI2VtZnN0YXR1cycgKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydFNlcnZpY2UgKCB1cmwgKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiB1cmwsXG4gICAgc3VjY2VzczogZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICBjb25zb2xlLmxvZyggZGF0YSApO1xuICAgIH19KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIFRlc3QgZm9yIGJvb3RzdHJhcFxuICAvL3ZhciBib290c3RyYXAzX2VuYWJsZWQgPSAodHlwZW9mICQoKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9PSAnZnVuY3Rpb24nKTtcbiAgLy9hbGVydChib290c3RyYXAzX2VuYWJsZWQpO1xuXG4gICQoICcjbmF2YmFyX2Z1bGwgYScgKS5jbGljayggZnVuY3Rpb24oIGV2ZW50ICkge1xuXG4gICAgdmFyIHRoaXNfaWQgPSAkKCB0aGlzICkuYXR0ciggJ2lkJyApLnRvU3RyaW5nKCk7XG4gICAgdmFyIHRhcmdldF9kaXYgPSBcIiNcIiArIHRoaXNfaWQgKyBcImRpdlwiO1xuXG4gICAgJCggJyNuYXZiYXIgbGknICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XG4gICAgJCggdGhpcyApLnBhcmVudCgpLmFkZENsYXNzKCAnYWN0aXZlJyApO1xuXG4gICAgJCggJy5wYWdlJyApLmFkZENsYXNzKCAnaGlkZGVuJyApO1xuICAgICQoIHRhcmdldF9kaXYgKS5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcbiAgfSk7XG5cbiAgJCggJyNhdXgnICkuY2xpY2soIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgZ2V0U3RhdHVzQWxsKCk7XG4gIH0pO1xuXG4gIC8vIFN0YXR1cyBMaXN0ZW5lcnNcbiAgJCggJyNzdGF0dXNfcmVmcmVzaCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGdldFN0YXR1c0FsbCgpO1xuICB9KTtcblxuICAkKCAnI2VtZnJlc3RhcnQnICkuY2xpY2sgKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICByZXN0YXJ0U2VydmljZSggJy9yZXN0YXJ0LWVtZicgKTtcbiAgfSk7XG5cbiAgJCggJyN1cCcgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGNhbWVyYV9kZWJ1Z19sb2coXCJHaW1iYWw6IFRpbHQgdXAgKCR0aWx0X2RlZykgZGVncmVlc1wiKTtcbiAgfSk7XG5cbiAgJCggJyNkb3duJyApLmNsaWNrIChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgY2FtZXJhX2RlYnVnX2xvZyhcIkdpbWJhbDogVGlsdCBkb3duICgkdGlsdF9kZWcpIGRlZ3JlZXNcIik7XG4gIH0pO1xuXG4gICQoICcjcmlnaHQnICkuY2xpY2sgKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBjYW1lcmFfZGVidWdfbG9nKFwiR2ltYmFsOiBQYW4gcmlnaHQgKCRwYW5fZGVnKSBkZWdyZWVzXCIpO1xuICB9KTtcblxuICAkKCAnI2xlZnQnICkuY2xpY2sgKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBjYW1lcmFfZGVidWdfbG9nKFwiR2ltYmFsOiBQYW4gbGVmdCAoJHBhbl9kZWcpIGRlZ3JlZXNcIik7XG4gIH0pO1xuXG4gICQoICcjem9vbS1pbicgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGNhbWVyYV9kZWJ1Z19sb2coXCJDYW1lcmE6IFpvb20gaW4gKCR6b29tX3BlcmNlbnQpIHBlcmNlbnRcIik7XG4gIH0pO1xuXG4gICQoICcjem9vbS1vdXQnICkuY2xpY2sgKGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBjYW1lcmFfZGVidWdfbG9nKFwiQ2FtZXJhOiBab29tIG91dCAoJHpvb21fcGVyY2VudCkgcGVyY2VudFwiKTtcbiAgfSk7XG5cbiAgdmFyIHNvY2tldCA9IGlvKCk7XG4gIHNvY2tldC5vbigndXBkYXRlJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgdmFyIG9iaiA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgJCggJyNlbWZfeCcgKS50ZXh0KCBvYmpbJ1gnXSApO1xuICAgICQoICcjZW1mX3knICkudGV4dCggb2JqWydZJ10gKTtcbiAgICAkKCAnI2VtZl96JyApLnRleHQoIG9ialsnWiddICk7XG4gICAgJCggJyNlbWZfeHInICkudGV4dCggb2JqWydYUiddICk7XG4gICAgJCggJyNlbWZfeXInICkudGV4dCggb2JqWydZUiddICk7XG4gICAgJCggJyNlbWZfenInICkudGV4dCggb2JqWydaUiddICk7XG4gIH0pO1xufSk7XG5cblxuLy8gRmluZCB0aGUgcmlnaHQgbWV0aG9kLCBjYWxsIG9uIGNvcnJlY3QgZWxlbWVudFxuLypcbmZ1bmN0aW9uIGxhdW5jaEZ1bGxTY3JlZW4oZWxlbWVudCkge1xuICBpZihlbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgZWxlbWVudC5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9IGVsc2UgaWYoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cbn1cblxuJCggJ2ZzX2J0bicgKS5jbGljayAoZnVuY3Rpb24oIGV2ZW50ICkge1xuICBsYXVuY2hGdWxsU2NyZWVuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7IC8vIHRoZSB3aG9sZSBwYWdlXG59KTtcbiovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
