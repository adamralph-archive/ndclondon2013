???

var printIfWordIsSpecial = function(specialChecker, word) {
  console.log(word + " is " +
   (specialChecker.isWordSpecial(word) ? "" : "not ") +
  "special");
}

var palindromeChecker = new PalindromeChecker();

printIfWordIsSpecial(palindromeChecker, 'mom');
printIfWordIsSpecial(palindromeChecker, 'dad');
printIfWordIsSpecial(palindromeChecker, 'almost');

var alphabeticalChecker = new AlphabeticalChecker();
printIfWordIsSpecial(alphabeticalChecker, 'mom');
printIfWordIsSpecial(alphabeticalChecker, 'dad');
printIfWordIsSpecial(alphabeticalChecker, 'almost');

//Checks if special in one of the ways.

var palindromeOrAlphabetical = new PalindromeChecker();
palindromeOrAlphabetical.__proto__ = new AlphabeticalChecker();

printIfWordIsSpecial(palindromeOrAlphabetical, 'mom');
printIfWordIsSpecial(palindromeOrAlphabetical, 'dad');
printIfWordIsSpecial(palindromeOrAlphabetical, 'almost');

/*
mom is special
dad is special
almost is not special
mom is not special
dad is not special
almost is special
mom is special
dad is special
almost is special
*/