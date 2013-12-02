var PalindromeChecker = function() {
  this.isSpecial =  function(word) {
    return word.split('').reverse().join('') === word;
  }
}
//If we create a lot of PalindromeChecker objects,
//it would be better to move isSpecial function to the
//prototype of PalindromeChecker to avoid creating
//object for each instance.

var printIfWordIsSpecial = function(checker, word) {
  var check = checker.isSpecial(word) ? '' : ' not';
  console.log(word + ' is' + check + ' special');
}

var palindromeChecker = new PalindromeChecker();

printIfWordIsSpecial(palindromeChecker, 'mom');
printIfWordIsSpecial(palindromeChecker, 'dad');
printIfWordIsSpecial(palindromeChecker, 'palindrome');

/*
mom is special
dad is special
palindrome is not special
*/