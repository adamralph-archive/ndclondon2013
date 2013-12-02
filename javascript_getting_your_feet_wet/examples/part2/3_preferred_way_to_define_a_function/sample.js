function f1(n) { //This is not preferred
  console.log("f1 called");
}

f1(6);

var f2 = function(n) { //This is preferred
  console.log("f2 called");
}

f2(6);

var f3 = function f3(n) { //Avoid this also,
  //unless you work for the department of redudancy.
  console.log("f3 called");
}

f3(6);
