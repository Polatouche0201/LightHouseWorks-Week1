function maxProfit (timePoints) {
  var timeNum = timePoints.length;

  var posCompare = 0;
  var profitMax = 0;

  while(posCompare < timeNum-1) {
    var num1 = timePoints[posCompare];
    for(var j = posCompare+1; j < timeNum-1; j++) {
      var num2 = timePoints[j];
      var profitCur = num2 - num1;
      if(profitMax < profitCur) {
        profitMax = profitCur;

      }
    }
    posCompare ++;
  }
  return profitMax;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
