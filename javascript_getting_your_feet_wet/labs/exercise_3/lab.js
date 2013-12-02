"use strict";
var names = [ 'John', 'Jake', 'Bradley', 'Kim', 'Kate', 'Sam' ];

var message = function(selector) {
	return names.filter(selector).join(', ')
}

console.log("All names with four letters:");
console.log(message(function (name) { return name.length === 4; }));

console.log("All names with three letters:");
console.log(message(function (name) { return name.length === 3; }));

console.log("All names that start with 'K':");
console.log(message(function (name) { return name.indexOf('K') === 0; }));

console.log("All names that start with 'J':");
console.log(message(function (name) { return name.indexOf('J') === 0; }));
