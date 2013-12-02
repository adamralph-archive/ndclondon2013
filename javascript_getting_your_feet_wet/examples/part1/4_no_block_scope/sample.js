var foo = function() {
  var local = 7;
  
  {
    var bar = 8;
    console.log(bar);
  }
  console.log(local);
  console.log(bar); //no block scope, so this is accessible here.
}

foo();