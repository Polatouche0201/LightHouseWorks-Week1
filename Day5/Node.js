var skeletons = require("./skeleton-in-closet.js");

var time = Math.floor(Math.random() * Math.floor(5)) + 5;
for(var i = 0; i < time; i ++) {
  var num = Math.floor(Math.random() * Math.floor(100));
  skeletons.closetIn(num);
}

console.log(skeletons.closetOut());  // log a Number