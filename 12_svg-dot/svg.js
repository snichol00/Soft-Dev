var svg = document.getElementById("vimage");

//past x / y values
lx = null;
ly = null;

canvas.addEventListener("click", (e) => {
    // current x/y values
    cx = e.pageX;
    cy = e.pageY;
    //make a circle at each new click
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttributeNS(null, 'style', 'fill: black; stroke: black; stroke-width: 1px;' );
    c.setAttributeNS(null, 'cx', cx);
    c.setAttributeNS(null, 'cy', cy);
    c.setAttributeNS(null, 'r', 10);
    svg.appendChild(c);
    // if it's not the first circle, draw a line
    if(lx != null && ly != null){
      var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttributeNS(null, 'style', 'fill:none; stroke: black; stroke-width: 1px;' );
      l.setAttributeNS(null, 'x1', lx);
      l.setAttributeNS(null, 'x2', cx);
      l.setAttributeNS(null, 'y1', ly);
      l.setAttributeNS(null, 'y2', cy);
      svg.appendChild(l);
    }
    //adjust x and y values
    cx = lx;
    cy = ly;
});

document.getElementById("clear").addEventListener("click", () => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  lx = null
  ly = null
});
