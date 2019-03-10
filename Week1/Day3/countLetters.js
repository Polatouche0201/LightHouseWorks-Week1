function countLetters (string) {
  var output = {};
  var char = "";
  for(var i = 0; i < string.length; i ++){
    char = string[i];
    if(char !== " ") {
      if(output[char])
        output[char] ++;
      else
        output[char] = 1;
    }
  }
  return output;
}
var result = countLetters("lighthouse in the house");
console.log(result);
