var fileName = process.argv[2];
var readType = process.argv[3];

var fs = require("fs");

console.log("Read File Start: \n");

if(readType === "1") {
  // Asynchronous read
  fs.readFile(fileName, function (err, data) {
     if (err) {
        return console.error(err);
     }
     console.log("Asynchronous read: " + data.toString());
  });
} else {
  // Synchronous read
  var data = fs.readFileSync(fileName);
  console.log("Synchronous read: " + data.toString());
}

console.log("\nRead File Completed!");