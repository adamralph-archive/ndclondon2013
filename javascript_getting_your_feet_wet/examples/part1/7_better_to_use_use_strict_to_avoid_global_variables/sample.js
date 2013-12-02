"use strict";
var foo = function() {
  var local1 = 7;
  local2 = 8; //because we don't have var, the use strict option will give an error on this line.
  
  console.log(local1);
  console.log(local2);
}

foo();