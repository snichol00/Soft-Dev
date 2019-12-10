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

var gcd = function(x, y){
  if (x > y){
    var max = x;
    var min = y;
    return gcd (x % y, y);
  }
  else{
    var max = y;
    var min = x;
    return gcd (y % x, x);
  }
}
