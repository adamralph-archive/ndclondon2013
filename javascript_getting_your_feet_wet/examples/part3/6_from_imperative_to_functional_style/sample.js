//DRY principle - Don't Repeat Yourself
//Every knowledge in an application 
//should have a single, unambiguous, authoritative
//representation.

var prices = [10, 20, 25, 30, 35, 45, 40];

//total all the prices.

var totalPrices = function(prices, selector) {
  var add = function(a, b) { return a + b; }
  return prices.filter(selector).reduce(add);
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




