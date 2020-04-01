//Lauren Pehlivanian & Sophie Nichol
//Softdev pd09
//K14 -- Ask Circles
//2020-03-30

var svg = document.getElementById("vimage");
var move_but = document.getElementById("move");
var xtra_but = document.getElementById("xtra");

var moving = -1; //global to keep track if already moving

//animation variables
var window = document.defaultView;
var id;

var go = function(e){
  if (e.target == svg) {
  x = e.pageX-5;
  y = e.pageY-20;

  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttributeNS(null, 'cx', x);
  c.setAttributeNS(null, 'cy', y);
  c.setAttributeNS(null, 'r', 10);
  c.setAttribute("r", "10");
  c.setAttribute("fill", "blue");
  c.setAttribute("xInc", "1");
  c.setAttribute("yInc", "1");
  c.setAttribute("stroke", "blue");
  c.addEventListener('click', change);
  svg.appendChild(c);
}
}

var change = function(e){
  if (e.target.getAttribute("fill") == "blue"){
    e.target.setAttribute("fill", "purple");
  }
  else if (e.target.getAttribute("fill") == "purple") {
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    e.target.setAttribute("cx", x);
    e.target.setAttribute("cy", y);
    e.target.setAttribute("fill", "blue");
  }
}

var move = function(timestamp) {
  if (moving == 0) {
    var allC = document.getElementsByTagName("circle");
    for (var i = 0; i < allC.length; i++) {
      //console.log("mv")
      var xCor =  parseInt(allC[i].getAttribute("cx")) + parseInt(allC[i].getAttribute("xInc"));
      var yCor =  parseInt(allC[i].getAttribute("cy")) + parseInt(allC[i].getAttribute("yInc"));
      //if out of bounds change direction
      if (yCor <= 5 || yCor >= 495){
        allC[i].setAttribute("yInc", parseInt(allC[i].getAttribute("yInc") * -1));
      }
      if (xCor <= 5 || xCor >= 495){
        allC[i].setAttribute("xInc", parseInt(allC[i].getAttribute("xInc") * -1));
      }
      allC[i].setAttribute("cy", yCor);
      allC[i].setAttribute("cx", xCor);
    }
    id = window.requestAnimationFrame(move);
  }
};

var xtra = function() {
  var allC = document.getElementsByTagName("circle");
  for (var i = 0; i<allC.length; i++) {
    console.log("hi")
    allC[i].setAttribute("r", Math.floor(Math.random() * 20) + 3);
  }
}

//clear each child
document.getElementById("clear").addEventListener("click", () => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
});

//event listeners
svg.addEventListener('click', go);

move_but.addEventListener('click', function() {
  //only begin animation if not already moving
  if (moving == -1) {
    id = window.requestAnimationFrame(move);
    moving = 0;
    move();
    //if already moving stop
  } else {
    moving = -1;
  }
});

xtra_but.addEventListener('click', xtra);
