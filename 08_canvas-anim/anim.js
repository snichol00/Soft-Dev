var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var id = null;
var radius = 1;
var direction = "out"; //out or in

var logo = new Image();
logo.src = "logo_dvd.jpg";

document.getElementById("go").addEventListener("click", () => {
  window.requestAnimationFrame(circle);
});

document.getElementById("dvd").addEventListener("click", () => {
  window.requestAnimationFrame(bounce);
});

function circle(){
  ctx.clearRect(0,0,600,600)
  if(radius === 250){
    direction = "in";
  }
  if(radius === 0){
    direction = "out";
  }
  if(direction === "out"){
    radius++;
  }
  else if(direction === "in"){
    radius--;
  }
  //console.log(radius)
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(300, 300, radius, 0, 2 * Math.PI);
  ctx.fill();
  if(id != 0){
  id = window.requestAnimationFrame(circle);
  }
};

function bounce(){
  ctx.clearRect(0,0,600,600)
  
}

document.getElementById("stop").addEventListener("click", () => {
  window.cancelAnimationFrame(id);
  id = null;
});
