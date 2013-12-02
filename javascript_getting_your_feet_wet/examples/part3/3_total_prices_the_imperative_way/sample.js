//DRY principle - Don't Repeat Yourself
//Every knowledge in an application 
//should have a single, unambiguous, authoritative
//representation.

var prices = [10, 20, 25, 30, 35, 45, 40];

//total all the prices.

var totalPrices = function(prices) {
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

console.log(totalPrices(prices));