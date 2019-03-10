var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Functions Implement

// 1. List everyone and for each of them, list the names of who they follow and who follows them
var followsAndFans = {};
var followsList = function(people) {
  var follows = [];
  for(var i in people.follows) {
    var name = data[people.follows[i]].name;
    follows.push(name);
  }
  followsAndFans[people.name] = {};
  followsAndFans[people.name].follows = follows.join(", ");
}

var fansList = function(targetPeople) {
  var fans = [];
  for(var people in data) {
    var followsData = data[people].follows;
    for(var i in followsData) {
      if(targetPeople === followsData[i]) {
        var name = data[people].name;
        fans.push(name);
      }
    }
  }

  if(!followsAndFans[data[targetPeople].name])
    followsAndFans[data[targetPeople].name] = {};
  followsAndFans[data[targetPeople].name].fans = fans.join(", ");;
}
var getFollowsAndFans = function() {
  for(var people in data) {
    followsList(data[people]);
    fansList(people);
  }
  return followsAndFans;
}

//console.log(getFollowsAndFans());

// 2. Identify who follows the most people
var topFollows = 0;
var topFollowsName = "";

var getFollowsNum = function(people) {
  var followsNum = people.follows.length;
  if(topFollows < followsNum){
    topFollows = followsNum;
    topFollowsName = people.name;
  }
}

var getTopFollows = function() {
  for(var people in data) {
    getFollowsNum(data[people]);
  }
  var result = topFollowsName + " follows the most people, number is " + topFollows;
  return result;
}

//console.log(getTopFollows());

// 3. Identify who has the most followers
var topFans = 0;
var topFansName = "";

var getFansNum = function(people) {

}

var getTopFans = function() {
  for(var people in data) {
    getFansNum(data[people]);
  }
  var result = topFansName + " follows the most people, number is " + topFans;
  return result;
}