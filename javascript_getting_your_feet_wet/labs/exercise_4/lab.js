var PalindromeChecker = function() {
  this.isSpecial = function(word) {
	return word.split("").reverse().join("") === word;
  }
}

var palindromeChecker = new PalindromeChecker();

var printIfWordIsSpecial=function(checker, word) {
	if (checker.isSpecial(word))
		console.log(word + " is special");
	else
		console.log(word + " is not special");
}

printIfWordIsSpecial(palindromeChecker, 'mom');
printIfWordIsSpecial(palindromeChecker, 'dad');
printIfWordIsSpecial(palindromeChecker, 'palindrome');

/*
mom is special
dad is special
palindrome is not special
*/