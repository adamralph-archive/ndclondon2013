//Implement greet in a way that it takes 
//no arguments at all in the parameter list.

"use strict";
var greet = function() {
  var greeting = "";
  for (var i=0; i < arguments.length; i++) {
	if (i === arguments.length - 1) {
	  greeting += arguments[i];
	}
	else if (arguments.length == 2 && i === (arguments.length - 2)) {
	  greeting += arguments[i] + " and ";
	}
	else if (i === (arguments.length - 2)) {
	  greeting += arguments[i] + ", and ";
	}
	else {
	  greeting += arguments[i] + ", ";
	}
  }
  
  console.log(this + ' ' + greeting);
}

var invokeGreetWith = function(message, names) {
  greet.apply(message, names);
}

invokeGreetWith('Hello', ['Jake', 'Jane', 'Curt'])
invokeGreetWith('Howdy', ['Jack', 'Jill'])
invokeGreetWith('Howdy', ['Bill'])

/*
Hello Jake, Jane, and Curt
Howdy Jack and Jill
Howdy Bill
*/