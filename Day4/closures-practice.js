// var outer = function() {
//   var x = 10;

//   var inner = function() {
//     console.log("The value of x is: " + x);
//   }
//   return inner;
// };

// var foo = outer();
// foo();


var foo = (function() {
  var x = 10;

  var inner = function() {
    console.log("Value of x is: " + x);
  }
  return inner;
})(); // Notice the () at the end,
      // which will immediately invoke the function,
      // assigning the returned value (inner) to foo

test

console.log(foo);
foo();

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }
// var z = makeAdder(3)(4);