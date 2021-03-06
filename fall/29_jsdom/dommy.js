//changes heading when hovered
var changeHeading = function(e){
  var h = document.getElementById("h");
  h.innerHTML = e.target.innerHTML;
};

//changes heading back to hello world
var revertHeading = function(e){
  var h = document.getElementById("h");
  h.innerHTML = "Hello World!";
}

//Removes item from list when clicked
var removeItem = function(e){
  //this doesn't work
  e.target.remove();
};

//lists element and their events
var lis = document.getElementsByTagName("li");

console.log(lis);

for(var i=0; i<lis.length; i++){
  lis[i].addEventListener('mouseover', changeHeading);
  lis[i].addEventListener('mouseout', revertHeading);
  lis[i].addEventListener('click', removeItem);
};

//adds item "WORD" to list
var addItem = function(e){
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "WORD";
  list.append(item);
  item.addEventListener('click', removeItem);
};

var button = document.getElementById("b");
button.addEventListener('click', addItem)

//Fib function
var fib = function(n){
  if(n < 2){
    return 1;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
};

//add a new fib to the list
var addFib = function(e){
  console.log(ele);
  var fibList = document.getElementById("fiblist");
  var item = document.createElement("li");
  newFib = addFib2();
  item.innerHTML = newFib;
  fibList.append(item);
  item.addEventListener('click', removeItem);
}

//should use dynamic programming (store recent vals)
var ele = [0, 1];
var ele_counter = 0;
var addFib2 = function() {
    console.log(ele);
    var val = ele[0] + ele[1];
    ele[0] = ele[1];
    ele[1] = val;
    return val;
};


var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);


//display event in console
button.addEventListener('click', function(e){
  console.log(e);
});
