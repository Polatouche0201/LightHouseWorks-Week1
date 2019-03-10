function replaceChr(orgString){
  var password = ""
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
  return password;
}

function obfuscate () {
  var argv = process.argv[2];
  if(!argv) {
    return "Please enter at least one valid argument.";
  }
  var result = replaceChr(argv);
  return result;
}

console.log(obfuscate());