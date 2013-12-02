var names = [ 'John', 'Jake', 'Bradley', 'Kim', 'Kate', 'Sam' ];

var playWithNames = function(names, selector) {
  return names.filter(selector);
}

console.log("The function returns all names:")
console.log(playWithNames(names, function() { return true; }));

var nameHasNLetters = function(n) {
  return function(name) {
    return name.length === n;
  }
}

console.log("All names with four letters:");
console.log(playWithNames(names, 
  nameHasNLetters(4)));

console.log("All names with three letters:");
console.log(playWithNames(names, 
  nameHasNLetters(3)));

var namesThatStartWith = function(letter) {
  return function(name) {
    return name[0] === letter;
  }
}
console.log("All names that start with 'K':");
console.log(playWithNames(names, 
  namesThatStartWith('K')));

console.log("All names that start with 'J':");
console.log(playWithNames(names, 
  namesThatStartWith('J')));
