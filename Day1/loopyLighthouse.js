function loopyLighthouse(range, multiples, words) {
  var outputString = "";
  for(var i = range[0]; i <= range[1]; i++) {
    if((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      outputString += words[0] + words[1];
    } else if (i % multiples[0] === 0) {
      outputString += words[0];
    } else if (i % multiples[1] === 0) {
      outputString += words[1];
    } else {
      outputString += i;
    }
    outputString += "\n";
  }
  return outputString;
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));