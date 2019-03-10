var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callback(element));
  });
  return newArray;
}

// word => word.length

function getLength (word) {
  return word.length;
}

function toUpper (word) {
  return word.toUpperCase();
}

function reverse (word) {
  return word.split('').reverse().join('');
}

// map(words, callback);
var result1 = map(words, getLength);
var result2 = map(words, toUpper);
var result3 = map(words, reverse);

// var result1 = words.map(word => word.length);
// var result2 = words.map(word => word.toUpperCase());
// var result3 = words.map(word => word.split('').reverse().join(''));
console.log(result1);
console.log(result2);
console.log(result3);
