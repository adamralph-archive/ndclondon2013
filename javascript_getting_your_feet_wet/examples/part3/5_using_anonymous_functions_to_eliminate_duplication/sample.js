//DRY principle - Don't Repeat Yourself
//Every knowledge in an application 
//should have a single, unambiguous, authoritative
//representation.

var prices = [10, 20, 25, 30, 35, 45, 40];

//total all the prices.

var totalPrices = function(prices, selector) {
  var total = 0;
  for(var i = 0; i < prices.length; i++) {
    if(selector(prices[i])) total += prices[i];
  }
  return total;
}

console.log(
  totalPrices(prices, 
    function(price) { return true; }));

console.log(
  totalPrices(prices, 
    function(price) { return price > 25; }));

console.log(
  totalPrices(prices, 
    function(price) { return price < 30; }));




