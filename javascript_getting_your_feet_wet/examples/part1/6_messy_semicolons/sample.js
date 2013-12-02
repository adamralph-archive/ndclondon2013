var foo = function(n) {
  if(n > 5) {
    return n;
  } else {
    return 
      n * 2; //because this can be a stand alone expression, JS puts a ; at the end of return.
  }
}

console.log(foo(6));
console.log(foo(3));