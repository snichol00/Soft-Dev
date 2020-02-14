var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var id = null;
var radius = 2;
var direction = "out"; //out or in
var circAnim = "off"; //on or off
var dvdAnim = "off"; //on or off
var x = 0;
var y = 0;
var dx = 2;
var dy = 2;

var logo = new Image();
logo.src = "logo_dvd.jpg"


document.getElementById("circle").addEventListener("click", () => {
  if(circAnim === "off"){
    circle();
    circAnim = "on";
  }
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
    radius += 2;
  }
  else if(direction === "in"){
    radius -= 2;
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

function randXY(){
  x = Math.random() * (600 - logo.width/5);
  y = Math.random() * (600 - logo.height/5);
}

document.getElementById("dvd").addEventListener("click", () => {
  window.cancelAnimationFrame(id);
  ctx.clearRect(0, 0, 600, 600);
  circAnim = "off";
  dvdAnim = "on"
  id = null;
  randXY();
  moveDvd();
});

function moveDvd(){
  ctx.drawImage(logo, x, y, logo.width/5, logo.height/5);
  if(x + 2 > 600 - logo.width/5 || x + 2 < 0){
    dx *= -1;
  }
  if(y + 2 > 600 - logo.height/5 || y + 2 < 0){
    dy *= -1;
  }
  x += dx;
  y += dy;
  id = window.requestAnimationFrame(moveDvd);
}

document.getElementById("stop").addEventListener("click", () => {
  window.cancelAnimationFrame(id);
  circAnim = "off";
  dvdAnim = "off"
  id = null;
});
