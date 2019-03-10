function isPalindrome(s) {
  var string = s.split(" ").join("");
  var stringReverse = string.split("").reverse().join("");
  return string == stringReverse;
}
module.exports = isPalindrome;