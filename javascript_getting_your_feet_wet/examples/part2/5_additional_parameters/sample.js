var max = function(a, b) {
  if(a > b)
    return a;
  return b;
}

console.log(max(1, 3));
console.log(max(4, 2));

console.log(max(2, 6, 3));

console.log(max(2, 6, 9));

//it appears like it ignored the additional paramters.