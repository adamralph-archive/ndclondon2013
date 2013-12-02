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
var car2 = new Car(2014);

console.log(car1.miles);
console.log(car2.miles);
car1.drive(10);
console.log(car1.miles);
console.log(car2.miles); //???

//gets are deepers, sets are shallow

