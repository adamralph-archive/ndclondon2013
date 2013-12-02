var Vehicle = function() {
  this.miles = 0;
  this.drive = function(dist) {
    this.miles += dist;
    console.log('vehicle driving...');
  }
}

var Car = function() {
  
}
Car.prototype = new Vehicle()

var car1 = new Car();
var car2 = new Car();

console.log(car1.miles);
car1.drive(10);
console.log(car1.miles);

console.log(car2.miles);

Vehicle.prototype.turn = function(dir) {
  console.log('turning....' + dir);
}

car1.turn('left');
car2.turn('right');