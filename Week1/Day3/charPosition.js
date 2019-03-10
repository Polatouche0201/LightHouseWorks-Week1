function charPosition (string) {
  var output = {};
  var char = "";
  for(var i = 0; i < string.length; i ++){
    char = string[i];
    if(char !== " ") {
      if(output[char])
        output[char]["TimeOccur"] ++;
      else {
        output[char] = {};
        output[char]["TimeOccur"] = 1;
        output[char]["FirstPosition"] = i;
      }
    }
  }
  return output;
}
var result = charPosition("lighthouse in the house");
console.log(result);