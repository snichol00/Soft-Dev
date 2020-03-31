//Emory Walsh & Sophie Nichol
//Softdev pd09
//K13 -- Ask Circles [Change || Die]
//2020-03-31

var svg = document.getElementById("vimage");

lx = null
ly = null

svg.addEventListener("click", (e) => {
  x = e.pageX-5;
  y = e.pageY-20;

  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute(null, 'cx', x);
  circle.setAttribute(null, 'cy', y);
  circle.setAttributeNS(null, 'r', 10);
  circle.setAttributeNS(null, 'style', 'fill: blue; stroke: blue; stroke-width: 1px;' );
  circle.addEventListener('click', change);
  svg.appendChild(circle);

  if(lx != null && ly != null){
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttributeNS(null, 'x1', lx);
    line.setAttributeNS(null, 'y1', ly);
    line.setAttributeNS(null, 'x2', x);
    line.setAttributeNS(null, 'y2', y);
    line.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
    svg.appendChild(line);
  }

  lx = x
  ly = y
});

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

document.getElementById("clear").addEventListener("click", () => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  lx = null
  ly = null
});
