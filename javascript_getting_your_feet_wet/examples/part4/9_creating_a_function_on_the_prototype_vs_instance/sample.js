var Car = function(year) {
  console.log('creating...');
  this.year = year;
  this.turn = function() {
    console.log('turning...');
  }
}

Car.prototype.drive = function() {
  console.log('driving....');
}

var car1 = new Car(2013);
console.log(car1.year);
car1.drive();
car1.turn();