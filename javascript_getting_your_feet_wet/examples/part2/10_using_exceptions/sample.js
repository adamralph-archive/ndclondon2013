var madMethod = function(n) {
  if (n == 0)
    throw "I don't like to see a zero"
    
  if(n < 0)
    throw "no negative"
    
  return n * 2;
}

var callMadMethod = function(n) {
  console.log("----calling madMethod with " + n);
  try {
    console.log(madMethod(n));
  } catch(ex) {
    console.log(ex);
  } finally {
    console.log("whether exception or not...");
  }
}

callMadMethod(0);
callMadMethod(-2);
callMadMethod(2);