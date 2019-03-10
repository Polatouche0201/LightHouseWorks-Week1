// var wrapLog = function (callback, name) {
//   /* your code here */
//    return function() {
//     var output = name + "(";
//     var result = callback(arguments);
//     output += arguments[0] + ", " + arguments[1] + ") => " + result;
//     console.log(output);
//    }

// };

var wrapLog = function (callback, name) {
  /* your code here */
   return function() {

    //var argArray = [].slice.apply(arguments);
    var argArray = Object.values(arguments);
    var argNum = arguments.length;
    var output = name + "(";
    output += argArray.join(", ") + ") => " + callback(...argArray);
    console.log(output);
   }
};

var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24