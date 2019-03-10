var myArgs = process.argv.slice(2);
var outputString = "";
for(var i = 0; i < myArgs.length; i ++)
{
  var arg = myArgs[i];
  var first = arg[0];
  for(var j = 1; j < arg.length; j ++)
    outputString += arg[j];
  outputString += first + "ay";
  if(i < myArgs.length-1)
    outputString += " ";
}
console.log(outputString);