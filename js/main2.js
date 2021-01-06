var canvas = document.querySelector("canvas");
var kontext = canvas.getContext("2d");




kontext.fillStyle = "black";
kontext.fillRect(0, 0, canvas.width, canvas.height);






/*
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
*/

function ring() {
    kontext.beginPath();
    kontext.arc(400, 50, 70, 0, 2 * Math.PI, false);
    kontext.fillStyle = "gold";
    kontext.fill();  
}
ring();


/*
<script>
      var canvas = document.getElementById('kruh');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'orange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = '#FF6600';
      context.stroke();
    </script>
    */