function f1(n) {
  console.log("f1 called with " + n);
}

f1(6);

function f1(n) {
  console.log("f1 redefined called with " + n);
}

f1(6);