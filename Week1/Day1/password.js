function replaceChr(orgString){
  for(var i = 0; i < orgString.length; i ++) {
    switch(orgString[i]) {
      case "a" :
        password += "4";
        break;
      case "e" :
        password += "3";
        break;
      case "o" :
        password += "0";
        break;
      case "l" :
        password += "1";
        break;
      default :
        password += orgString[i];
        break;
    }
  }
}

function obfuscate () {
  var argv = process.argv[2];
  if(!argv) {
    return "Please enter at least one valid argument.";
  }
  var password = replaceChr(argv);
  return password;
}

console.log(obfuscate());