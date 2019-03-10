function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
  var noUpper = noSpaces.toLowerCase();
  //console.log(noUpper);

  var mid = Math.floor(noUpper.length/2);
  if(mid === 0)
    return true;

  var last = noUpper.length - 1;

  for (var i = 0; i < mid; i++) {
    if (noUpper[i] !== noUpper[last - i]){
      //console.log(noUpper[i] + " != " + noUpper[last - i]);
      return false;
    }
  }
  return true;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);

