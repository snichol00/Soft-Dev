//-Emory Walsh & Sophie(a) Nichol
//Softdev pd09
//K05 -- ...and I want to Paint It Better
//2020-02-07


var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

//mode either "rect" or "dot"
var curmode = "dot";

canvas.addEventListener("click", (e) => {
    //console.log("mode: " + curmode);
    cx = e.pageX - canvas.offsetLeft; //describes the position of the box's distance from the left side of the page
    cy = e.pageY - canvas.offsetTop; //describes the position of the box's distance from the top of the page
    if(curmode === "dot"){
      ctx.fillStyle = "blue";
      ctx.beginPath(); //begins a new path of a line/curve. without this, everything would be connected
      ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
      ctx.fill();
    }
    else{
      ctx.fillStyle = "pink";
      ctx.fillRect(cx, cy, 10, 40);
    }
});

document.getElementById("clear").addEventListener("click", () => {
  //console.log("clear");
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width,canvas.height);
});

document.getElementById("mode").addEventListener("click", () => {
  if(curmode === "rect"){
    curmode = "dot";
    //console.log("dot");
  }
  else{
    curmode = "rect";
    //console.log("rect2");
  }
});
