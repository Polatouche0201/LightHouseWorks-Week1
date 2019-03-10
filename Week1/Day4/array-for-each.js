function findWaldo(arr, found) {
  var targetName = "Alice";
  arr.forEach(function(element, index) {
    if (element === targetName) {
      found(index, targetName);   // execute callback
    }
  });
}

function actionWhenFound(index, name) {
  console.log("Found " + name + " at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);