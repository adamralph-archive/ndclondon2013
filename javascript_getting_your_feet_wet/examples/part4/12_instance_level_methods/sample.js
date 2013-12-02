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
car1.drive(10);

var venkatsCar = new Car(1984);
venkatsCar.breakdown = function() {
  console.log("clunk");
}
venkatsCar.breakdown();

try {
  car1.breakdown();
} catch(ex) {
  console.log(ex);
}

//Not only can you have methods on class, it 
//can also be added to specific instances.