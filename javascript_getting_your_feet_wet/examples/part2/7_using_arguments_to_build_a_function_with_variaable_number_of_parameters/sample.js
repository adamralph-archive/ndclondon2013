var max = function() {
  if(arguments.length < 1)
    throw "Nothing given!, we will burn your village";
    
  var large = arguments[0];
  for(var i = 0; i < arguments.length; i++) {
    if (large < arguments[i])
      large = arguments[i];
  }
  return large;
}

console.log(max(1, 2));
console.log(max(3, 1));
console.log(max(2, 3, 5));
try {
  console.log(max());  
} catch(ex) {
  console.log(ex);
}
