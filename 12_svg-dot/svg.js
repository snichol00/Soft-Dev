//Emory Walsh & Sophie Nichol
//Softdev pd09
//K12 -- Connect The Dots
//2020-03-30

var svg = document.getElementById("vimage");

lx = null
ly = null

svg.addEventListener("click", (e) => {
  x = e.pageX-5;
  y = e.pageY-20;

  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttributeNS(null, 'cx', x);
  circle.setAttributeNS(null, 'cy', y);
  circle.setAttributeNS(null, 'r', 5);
  circle.setAttributeNS(null, 'style', 'fill: blue; stroke: blue; stroke-width: 1px;' );
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

document.getElementById("clear").addEventListener("click", () => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  lx = null
  ly = null
});
