var fibonacci = function(n){
  if (n == 0){
    return n;
  }
  if (n == 1){
    return n;
  }
  else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

var gcdH = function(a, b, c) {
  if (a % c == 0 && b % c == 0) return c;
  else return gcdH(a, b, c-1);
};
var gcd = function(a, b) {
  if (a == b) return a;
  else if (a < b) return gcdH(a, b, a);
  else return gcdH(a, b, b);
};

var studentList = ["Me", "You", "Ed", "Joe", "Shelley", "Martha", "Gerard", "Steve", "Sally"];

var randomStudent = function(){
  var index = Math.floor(Math.random() * studentList.length);
  return studentList[index];
}

var fibButton = document.getElementById('fib');
var fibClick = function(){
  document.getElementById("fib");
  result = fibonacci(7);
  console.log(result);
  //how to print to page?
};
fibButton.addEventListener('click', fibClick);

var gcdButton = document.getElementById('gcd');
var gcdClick = function(){
  document.getElementById("gcd");
  result = gcd(81, 27);
  console.log(result);
  //how to print to page?
};
gcdButton.addEventListener('click', gcdClick);

var ranButton = document.getElementById('ran');
var ranClick = function(){
  document.getElementById("ran");
  result = randomStudent(81, 27);
  console.log(result);
  //how to print to page?
};
ranButton.addEventListener('click', ranClick);
