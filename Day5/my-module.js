var myModule = require("./my-module");

//module.exports = function() { /* ... */ }

var coolMath = require("./math-is-cool");

console.log(coolMath.PHI);  // log a Number

coolMath.explain();  // invokes the function `explain`