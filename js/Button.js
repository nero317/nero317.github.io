var contextPath = '${contextPath}/';
$(document).ready(function() {

      $("#download_btn").click(function() {
        download();
      });

      function download() {
        var url = contextPath + "Haf_TKGB.exe";
        location.href = url;
      }
