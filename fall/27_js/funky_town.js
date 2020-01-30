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
  }
  else{
    var max = y;
    var min = x;
  }
  var n = min;
  while (n > 0){
    if (min % n == 0 && max % n == 0){
      return n;
    }
    n--;
  }
}

var studentlist = ["Me", "You", "Ed", "Joe", "Shelley", "Martha", "Gerard", "Steve", "Sally"];

var randomStudent = function(x){
    var len = x.length;
    var rand = Math.floor(Math.random(len) * len + 1);
    return x[rand - 1];
}
