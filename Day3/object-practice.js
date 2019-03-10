var emptyObject = {}; // Create a new empty Object

var tinyObject = { key: "value" };  // A basic object containts a key and a value as a pair;

var myObject = {
  a: 6,     // Number
  b: "abc", // String
  c: true,  // Boolean
  d: null,  // Null
};
var valueA = myObject["a"]; // get the value associated with the key "b"
var valueB = myObject.b;    // another way to get the value
var value = myObject.e;

var mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;

var person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};
var city = person["address"]["city"] // returns "New York"
city = person.address.zipCode;
person["phoneNumbers"] = new String("250-619-6316"); /* <insert array of phone numbers here> */
// console.log(person["phoneNumbers"] instanceof Object);
// console.log(person["phoneNumbers"] instanceof Array);
// console.log(person["phoneNumbers"] instanceof String);

var spam = "spam";
person["dislikes"] = { food: spam, "e-mail": "spam" };

var chr = "street";
person[chr] = "test";
//console.log(person);

delete person[chr];
//console.log(person);

var myObjected = {
'key-1': 42,
keyB: 'value B',
'keyC': [1, 2, 3]
};
//console.log(myObjected);

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
var regex = "HJ";

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."