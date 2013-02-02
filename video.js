(function() {
  var video;
  var canvas;
  
  document.addEventListener("DOMContentLoaded", function() {
    video = document.getElementById("v");
    canvas = document.getElementById("c");

    navigator.mozGetUserMedia({ video: true }, function (stream) {
      video.mozSrcObject = stream;
      video.play();

      video.onclick = function () {
        canvas.width = video.width;
        canvas.height = video.height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.width, video.height);

        video.pause();

        video.style.display = "none";
        canvas.style.display = "block";
      };

      requestAnimationFrame();
    }, function (err) {
      return console.error("Oh noes, cant get video stream", err);
    });
  });

  function requestAnimationFrame () {

  }
})();