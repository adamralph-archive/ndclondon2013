var Vehicle = function() {
  this.miles = 0;
}
Vehicle.prototype.drive = function(dist) {
  console.log('driving...');
  this.miles += dist;
}

var Car = function(year) {
  this.year = year;
}
Car.prototype = new Vehicle();

var car1 = new Car(2013);

console.log(car1.hasOwnProperty('miles'));
console.log(car1.miles);
car1.drive(10);
console.log(car1.hasOwnProperty('miles'));
console.log(car1.miles);

delete car1.miles;
console.log("deleted");
console.log(car1.hasOwnProperty('miles'));
console.log(car1.miles);
