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

var studentlist = ["Me", "You", "Ed", "Joe", "Shelley", "Martha", "Gerard", "Steve", "Sally"];

var randomStudent = function(x){
    var len = x.length;
    var rand = Math.floor(Math.random(len) * len + 1);
    return x[rand - 1];
}
