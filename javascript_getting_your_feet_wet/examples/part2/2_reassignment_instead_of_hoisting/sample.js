var f2 = function(n) {
  console.log("f2 called with " + n);
}

f2(6);

f2 = function(n) {
  console.log("f2 redefined called with " + n);
}

f2(6);

//reassignment instead of hositing