var Car = function() {
  console.log('creating...');
}

//Car(); //don't

//The uppercase here is intended to convey
//that Car is a class and not a mere function.

new Car();
//We are creating an object using the constructor
//called Car. We never really create a class,
//even though we loosely say that we are creating
//a class. We use a constructor to create an object.