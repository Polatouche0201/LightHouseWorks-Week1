// Tests

// console.log(eatBrains("humans"));
// console.log(eatBrains("not humans"));

// Interface code

const zombies = require("./zombies.js");

var input = process.argv[2];
console.log(zombies.eatBrains(input));
console.log(zombies.f2());