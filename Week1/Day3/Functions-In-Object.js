var person = {
  firstName: 'Bob',
  FirstName: function() {
    return this.firstName;
  },
  lastName:  'Smith',
  FullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log('Hello, ' + person.FullName());
console.log("First Name is: " + person.FirstName());