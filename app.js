var person = {
    firstName: 'Default',
    lastName: 'Default',
    
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Don't do that EVER, for demo purposes only!!!
john.__proto__ = person;

console.log(john.getFullName());    // Go's to the proto
console.log(john.firstName);    // Prints John and not defualt since it findes the john object property first

var jane = {
    firstName: 'Jane',
}

jane.__proto__ = person;

console.log(jane.getFullName());    // Go's to the proto
console.log(jane.firstName);    // Prints John and not defualt since it findes the john object property first

