//Internal behaviour
// module.exports = {

//   key: "value",

//   eatBrains: function (species) {
//     if(species === "humans") {
//       return "Dead!";
//     }
//     return "Survived!";
//   },

//   f2: function () {
//     console.log("Test");
//   }

// };

var eatBrains = function (species) {
  if(species === "humans") {
    return "Dead!";
  }
  return "Survived!";
}

var function2 = function () {
    return "Test";

  }

module.exports.eatBrains = eatBrains;
module.exports.f2 = function2;
