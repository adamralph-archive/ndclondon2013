var foo = function() {
  var local = 7;
  bar = 8; //This becomes global
  
  console.log(local);
  console.log(bar);
}

foo();

// console.log(local); //ERROR
console.log(bar);