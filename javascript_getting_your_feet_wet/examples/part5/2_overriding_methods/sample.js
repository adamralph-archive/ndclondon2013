var Vehicle = function() {
  this.miles = 0;
  this.drive = function(dist) {
    console.log(this);
    this.miles += dist;
    console.log('vehicle driving...');
  }
}

var Car = function(year) {
  this.year = year;
  this.drive = function(dist) {
    console.log('car driving...');
    //Car.prototype.drive(dist); //trouble
    //Car.prototype.drive.call(this, dist);
    Car.prototype.drive.apply(this, arguments)
  }
}
Car.prototype = new Vehicle()

var car1 = new Car(2013);
var car2 = new Car(2013);

console.log(car1.miles);
car1.drive(10);
console.log(car1.miles);

console.log(car2.miles);
