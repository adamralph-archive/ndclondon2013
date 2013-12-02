//JSON
var person = {
  first: 'John',
  last: 'Smith',
};

var worker = {
  work: function() { console.log('working...'); }
}

var usePerson = function() {
  try {
    console.log("person's prototye is: ");
    console.log(person.__proto__);
    console.log("Calling work method on person:");
    person.work();
  } catch(ex) {
    console.log(ex);
  }
}

usePerson();

person.__proto__ = worker;
usePerson();

person.work = function() {
  console.log("special work in person itself");
}
usePerson();

delete person.work;
usePerson();