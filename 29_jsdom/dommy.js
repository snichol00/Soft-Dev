var fibButton = document.getElementById('fib');
var fibClick = function(){
  document.getElementById("fib");
  result = fibonacci(7);
  console.log(result);
  //how to print to page?
};
fibButton.addEventListener('click', fibClick());

var gcdButton = document.getElementById('gcd');
var gcdClick = function(){
  document.getElementById("gcd");
  result = gcd(81, 27);
  console.log(result);
  //how to print to page?
};
gcdButton.addEventListener('click', gcdClick());

var ranButton = document.getElementById('ran');
var ranClick = function(){
  document.getElementById("ran");
  result = randomStudent(81, 27);
  console.log(result);
  //how to print to page?
};
ranButton.addEventListener('click', ranClick());
