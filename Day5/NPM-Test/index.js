var chalk = require("chalk");

var message = chalk.green("Hello ").bold() + chalk.yellow("World ") + chalk.blue("!");
console.log(message);