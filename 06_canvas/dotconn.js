var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

//mode either "rect" or "dot"
var curmode = "dot";

lx = null
ly = null

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
});

document.getElementById("clear").addEventListener("click", () => {
  //console.log("clear");
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  lx = null;
  ly = null;
});
