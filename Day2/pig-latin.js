var originalWords = process.argv.slice(2);
var pigLatinWords = [];
for (var i = 0; i < originalWords.length; i++) {
  var translate = translateToPigLatin(originalWords[i]);
  pigLatinWords.push(translate);
}
console.log(pigLatinWords.join(' '));
function translateToPigLatin(word) {
  return word.slice(1, word.length) + word[0] + "ay";
}