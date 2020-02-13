var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var stopButton = document.getElementById('stop');

var id = 0;
var rad = 1;
var inc = 1;
var stopped = true;

var drawCircle = function(){
  //check bounds
  if (rad >= 200 && inc == 1){
    inc = -1;
  }
  if (rad <= 0 && inc == -1){
    inc = 1;
  }
  rad += inc;
  ctx.beginPath();
  ctx.arc(200, 200, rad, 0, 2 * Math.PI);
  ctx.fill();
  //update id
  if (id != 0) {
    id = window.requestAnimationFrame(drawCircle());
  }
};

var start = function(e){
  if (stopped == true){
    id = window.requestAnimationFrame(drawCircle);
    drawCircle();
    stopped = false;
  }
};
var startButton = document.getElementById('start');
startButton.addEventListener('click', start);


canvas.addEventListener("click", (e) => {
    console.log("here");
    cx = e.pageX - canvas.offsetLeft;
    cy = e.pageY - canvas.offsetTop;
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
    ctx.fill();
    if(lx != null && ly != null){
      ctx.beginPath();
      ctx.moveTo(lx, ly);
      ctx.lineTo(cx, cy);
      ctx.stroke();
    }
    lx = cx;
    ly = cy;
    window.requestAnimationFrame()
    requestAnimationFrame(callback)
    cancelAnimationFrame(id)
});

document.getElementById("clear").addEventListener("click", () => {
  //console.log("clear");
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  lx = null;
  ly = null;
});
