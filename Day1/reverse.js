var myArgs = process.argv.slice(2);
var outputString = "";
for(var i = 0; i < myArgs.length; i ++)
{
  var reverse = myArgs[i];
  if(!reverse.isNaN)
    for(var j = reverse.length-1; j >= 0; j --)
      outputString += reverse[j];
  else
    outputString += reverse;
  if(i < myArgs.length-1)
    outputString += "\n";
}
console.log(outputString);