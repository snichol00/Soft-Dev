var svg = document.getElementById("vimage");

lx = null
ly = null

canvas.addEventListener("click", (e) => {
    console.log("here");
    cx = e.pageX - canvas.offsetLeft;
    cy = e.pageY - canvas.offsetTop;
    svg.fillStyle = "blue";
    svg.beginPath();
    svg.arc(cx, cy, 10, 0, 2 * Math.PI);
    svg.fill();
    if(lx != null && ly != null){
      svg.beginPath();
      svg.moveTo(lx, ly);
      svg.lineTo(cx, cy);
      svg.stroke();
    }
    lx = cx;
    ly = cy;
});

document.getElementById("clear").addEventListener("click", () => {
  //console.log("clear");
  svg.fillStyle = "white";
  svg.fillRect(0,0,canvas.width,canvas.height);
  lx = null;
  ly = null;
});
