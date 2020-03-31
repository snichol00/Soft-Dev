//Emory Walsh & Sophie Nichol
//Softdev pd09
//K12 -- Connect The Dots
//2020-03-30

var svg = document.getElementById("vimage");

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

document.getElementById("clear").addEventListener("click", () => {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
});

svg.addEventListener('click', go);
