var factor = 2;
var factorIt = function(n) {
  return n * factor; //factor is from the lexical scope
}

console.log(factorIt(3));