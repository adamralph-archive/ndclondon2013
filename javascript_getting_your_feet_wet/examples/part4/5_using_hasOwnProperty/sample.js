var worker = {
  work: function() { console.log('working...'); }
}

var person = {
  first: 'John',
  last: 'Smith',
};

person.__proto__ = worker;

for(var prop in person) {
  console.log(prop + " has own? " + person.hasOwnProperty(prop));
}