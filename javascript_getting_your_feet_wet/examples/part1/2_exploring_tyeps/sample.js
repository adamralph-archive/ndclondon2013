var displayTypeOf = function(value) {
  console.log(typeof(value));
}

displayTypeOf(6);
displayTypeOf(6.1);

displayTypeOf("hello");
displayTypeOf(function() {});

displayTypeOf();
displayTypeOf(new (function() {}));