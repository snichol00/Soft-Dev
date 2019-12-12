//changes heading when hovered
var changeHeading = function(e){
  var h = document.getElementById("h");
  h.innerHTML = "???";
};

//Removes item from list when clicked
var removeItem = function(e){

};

//lists element and their events
var lis = document.getElementsByTagName("li");

console.log(lis);

for(var i=0; i<lis.length; i++){
  lis[i].addEventListener('mouseover', function(e){
    changeHeading(e, lis[i]);
  });
  lis[i].addEventListener('mouseout', changeHeading)
  lis[i].addEventListener('click', removeItem);
};

//adds item "WORD" to list
var addItem = function(e){
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "WORD";
  list.appendChild(item);
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
  console.log(e);
  //???
}

//should use dynamic programming (store recent vals)
var addFib2 = function(e){
  console.log(e);
  //???
}

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);


//display event in console
button.addEventListener('click', function(e){
  console.log(e);
});
