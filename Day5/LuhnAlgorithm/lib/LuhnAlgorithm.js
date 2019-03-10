function checkCard (Num) {
    var cardNo = Num.toString();
    if(isNaN(cardNo))
        return false;
    if(cardNo.length < 12){
        return false;
    }
    var nums = cardNo.split("");
    var sum = 0;
    var index = 1;
    for(var i = 0 ; i < nums.length; i++){
        if((i+1)%2==0){
            var tmp = Number(nums[nums.length-index])*2;
            if(tmp >= 10){
                var t = tmp+"".split("");
                tmp = Number(t[0]) + Number(t[1]);
            }
            sum+=tmp;
        }else{
            sum+=Number(nums[nums.length-index]);
        }
        index ++;
    }
    if(sum%10 != 0){
        return false;
    }
    return true;
}
module.exports = checkCard;
// console.log(check(5160756450152286));
// console.log(check(1234567890123456));