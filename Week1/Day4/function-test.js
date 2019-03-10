
function test() {
  return function()
  {
    console.log("hello");
  }
}

var result = test()();
//result();

console.log("-------------");


var myFn = function() {
  console.log("I am function.");
}

myFn.FaFa = 88;
myFn.LiuLiu = 66;
myFn.JiuJiu = 99;

console.log(myFn);

function runner(f) {
  f();
  console.log(f.JiuJiu);
}

runner(myFn);

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);