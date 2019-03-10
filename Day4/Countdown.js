var countdownGenerator = function (x) {
  /* your code here */
  var timeLeft = x;
  var Msg = "";

  return function () {
    if(timeLeft >= 0) {
      Msg = "T-minus " + timeLeft;
    } else if (timeLeft == 0) {
      Msg = "Blast Off!";
    } else {
      Msg = "Rockets already gone, bub!";
    }
    timeLeft --;
    console.log(Msg);
  }
};

var countdown = countdownGenerator(5);
countdown(); // T-minus 5...
countdown(); // T-minus 4...
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!