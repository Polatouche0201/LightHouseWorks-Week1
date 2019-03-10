var argv = process.argv[2];

if(argv > 2) {
  var total = 0;
  var pop = 0;
  var empty = 0;
  var cap = 0;
  var redeemBottle = 0;
  var redeemCap = 0;

  function invest (num) {
    total = num;
    pop = num;
    while(pop > 0) {
      redeem();
    }
  }

  function redeem () {
    var redeemNum = 0;
    empty ++;
    cap ++;
    pop --;
    if(empty >= 2) {
      redeemNum = Math.round(empty / 2);
      total += redeemNum;
      pop += redeemNum;
      redeemBottle += redeemNum;
      empty -= redeemNum * 2;
    }
    if(cap >= 4) {
      redeemNum = Math.round(cap / 4);
      total += redeemNum;
      pop += redeemNum;
      redeemCap += redeemNum;
      cap -= redeemNum * 4;
    }
  }

  invest(Math.round(parseInt(argv)/2));
  console.log("TOTAL BOTTLE : " + total);
  console.log("REMAINING BOTTLE : " + empty);
  console.log("REMAINING CAP : " + cap);
  console.log("TOTAL EARNED");
  console.log("   BOTTLES : " + redeemBottle);
  console.log("   CAPS : " + redeemCap);
} else {
  console.log("Invest Money must >= $2, becuase one pop cost $2");
}

