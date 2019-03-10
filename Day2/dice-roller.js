var argv = process.argv[2];
function RollingDice (time) {
  var result = [];
  for(var i = 0; i < time; i ++){
    result.push(Math.floor(Math.random() * Math.floor(6)) + 1);
  }
  return result.join(", ");
}
var output = "Rolled 3 dice: " + RollingDice(argv);
console.log(output);