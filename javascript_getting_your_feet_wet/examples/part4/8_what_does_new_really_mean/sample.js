var Car = function(year) {
  console.log('creating...');
  this.year = year;
}

var car1 = new Car(2013);
//What does the above really mean.

//1. Allocate memory for the instance, let's call it inst, i.e, var inst = {}

//2. set inst.__proto__ = Car.prototype

//3. Calls the constructor with the inst as the context object, i.e., Car.call(inst, 2013);

console.log(car1.year);

//var inst = {};
//inst.__proto__ = Car.prototype;
//Car.call(inst, 2014);
//
//console.log(inst.year);
