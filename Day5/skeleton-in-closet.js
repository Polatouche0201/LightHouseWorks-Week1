var secrets = [];

function sortMyCloset () {
  return secrets.sort(function(a,b) {
    return a - b;
  })
}

module.exports = {
  closetIn: function (skeleton) {
    secrets.push(skeleton);
  },

  closetOut: function () {
    var sorted = sortMyCloset();
    return sorted;
  }
};