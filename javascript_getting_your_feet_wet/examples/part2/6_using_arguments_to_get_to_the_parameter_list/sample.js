//In JS all functions always take variable
//number of paramters, all the time.

//The parameter names we given are merely
//names to first few parameters, there may be
//more that are not given a name.

var f1 = function(a, b) {
  console.log(arguments);
  console.log(a);
  console.log(b);
}

f1(2);
f1(2, 3);
f1(2, 3, 4);
f1();

//arguments is a special name (keyword) that
//represents the parameter list to a function.
