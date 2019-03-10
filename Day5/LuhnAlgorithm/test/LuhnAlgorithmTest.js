var assert = require("chai").assert;
var checkCard = require("../lib/LuhnAlgorithm");
describe("LuhnAlgorithm -- checkCard", function() {
  it("should return true if the card No. is a 5160756450152287", function() {
    var word = 5160756450152287;
    var result = checkCard(word);
    assert.isTrue(result);
  });
  it("should return false if the card No. is a 1234567890123456", function() {
    var word = 1234567890123456;
    assert.isFalse(checkCard(word));
  });
});
