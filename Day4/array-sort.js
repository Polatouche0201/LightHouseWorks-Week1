// function sortfunction(a, b){ //causes an array to be sorted numerically and ascending
//     return (a - b);
// }
// var array = [10, 2, 5, 1, 9];
// //array.sort();
// array.sort(function(a,b) {
//     return a - b;
// })
// console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB) //sort string ascending
      return -1;
    if (nameA > nameB)
      return 1;
    if (nameA === nameB)
      return b.age - a.age;  //sort string descending
    return 0; //default return value (no sorting)
});

console.log(students);