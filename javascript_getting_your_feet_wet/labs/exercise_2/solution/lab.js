//Implement greet in a way that it takes 
//no arguments at all in the parameter list.

var greet = function() {
  var params = Array.apply(null, arguments);
  var allButLast = params.splice(0, arguments.length - 1);

  var comma = arguments.length > 2 ? ',' : '';
  var and = arguments.length > 1 ? ' and ' : '';
  console.log(this.toString() + ' ' 
    + allButLast.join(', ') + comma + and + params);
}

var invokeGreetWith = function(message, names) {
  greet.apply(message, names);
}

invokeGreetWith('Hello', ['Jake', 'Jane', 'Curt'])
invokeGreetWith('Howdy', ['Jack', 'Jill'])
invokeGreetWith('Howdy', ['Bill'])

/*
Hello Jake, Jane, and Curt
Howdy Jack and Jill
Howdy Bill
*/