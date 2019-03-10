var myGlobalVar = "global";
//var myLocalVar = "Local";
function printMyVars() {
  var myLocalVar = "local";
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
}

console.log(myLocalVar); // this would not work!