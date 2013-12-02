var Checker = function() {
  this.next = {
    isWordSpecial: function() { return false; }
  }
  this.isWordSpecial = function(word) {
    if(this.check(word))
      return true;
    
    return this.next.isWordSpecial(word); 
  }
}

var PalindromeChecker = function() {
  this.check = function(word) {
    return word.split('').reverse().join('') === word;
  }
}

PalindromeChecker.prototype = new Checker();

var AlphabeticalChecker = function() {
  this.check = function(word) {
    return  word.split('').sort().join('') === word;
  }
}
AlphabeticalChecker.prototype = new Checker();

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
palindromeOrAlphabetical.next = new AlphabeticalChecker();

printIfWordIsSpecial(palindromeOrAlphabetical, 'mom');
printIfWordIsSpecial(palindromeOrAlphabetical, 'dad');
printIfWordIsSpecial(palindromeOrAlphabetical, 'almost');
