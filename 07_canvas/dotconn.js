var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var id = null;
var rad = 1;
var inc = 1;
var stopped = true;

var drawCircle = function(){
  ctx.clearRect(0,0,600,600);
  ctx.fillStyle = "blue";
  //check bounds
  if (rad >= 250 && inc == 1){
    inc = -1;
  }
  if (rad <= 0 && inc == -1){
    inc = 1;
  }
  rad += inc;
  ctx.beginPath();
  ctx.arc(300, 300, rad, 0, 2 * Math.PI);
  ctx.fill();
  //update id
  if (id != 0) {
    id = window.requestAnimationFrame(drawCircle);
  }
};

var startButton = document.getElementById('start');
var start = function(e){
  if (stopped == true){
    id = window.requestAnimationFrame(drawCircle);
    drawCircle();
    stopped = false;
  }
};
startButton.addEventListener('click', start);

var stop = function(){
  if (stopped == false){
    window.cancelAnimationFrame(id);
    stopped = true;
    id = null;
  }
}
var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stop);
