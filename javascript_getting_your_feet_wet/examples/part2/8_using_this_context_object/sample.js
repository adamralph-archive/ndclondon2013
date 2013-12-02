var greet = function(name) {
  console.log(this.toUpperCase() + ' ' + name);
}

greet.call('hello', 'Joe');
greet.call('howdy', 'Joe');