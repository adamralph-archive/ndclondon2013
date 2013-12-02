console.log(Object.prototype);
console.log(Object.prototype.__proto__);

console.log({}.__proto__ === Object.prototype);

Object.prototype.foo = function() {
  return "foo called...";
}

console.log({}.foo());

console.log("hello".foo());
