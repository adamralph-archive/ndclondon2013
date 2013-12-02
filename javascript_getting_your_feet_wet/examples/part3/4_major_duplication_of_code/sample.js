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

var totalPricesOver25 = function(prices) {
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    if(prices[i] > 25) total += prices[i];
  }
  return total;
}

var totalPricesUnder30 = function(prices) {
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    if(prices[i] < 30) total += prices[i];
  }
  return total;
}

console.log(totalPrices(prices));
console.log(totalPricesOver25(prices));
console.log(totalPricesUnder30(prices));