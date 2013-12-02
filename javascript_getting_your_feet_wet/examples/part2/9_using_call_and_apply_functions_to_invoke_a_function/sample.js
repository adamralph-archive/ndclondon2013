var greet = function(name1, name2) {
  console.log(this.toUpperCase() + ' ' + name1 +
     " and " + name2);
}

greet.call('hello', 'Jack', 'Jill');

var names = ['Jack', 'Jill']
greet.call('hello', names[0], names[1]);

greet.apply('hello', names);
