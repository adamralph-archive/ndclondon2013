var list = [1, 2, 3, 4, 5, 6];

//for(var i = 0; i < list.length; i++) {
//  console.log(list[i]);
//}
//external iterator
//This is also imperative in style
  // we tell not only what to do, but also spell out how to do it.

var printIt = function(n) {
  console.log(n);
}

list.forEach(printIt); //internal iterator
//This is also declarative in style,
//you told what you want, and the library function
//figure out the rest of the details.
