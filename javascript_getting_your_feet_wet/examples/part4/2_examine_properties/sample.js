//JSON
var person = {
  first: 'John',
  last: 'Smith',
  age: 2,
  play: function() { console.log('playing...'); }
};

console.log(person.first);

var propertyName = 'age';
console.log(person[propertyName]);

for(var prop in person) {
  if(typeof(person[prop]) !== 'function')
    console.log(prop + " ---> " + person[prop]);
}