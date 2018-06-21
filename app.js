var person = {
    firstName: 'Default',
    lastName: 'Default',
    
    greet: function () {
        return 'Hi ' + this.firstName;
    }
}

var john = Object.create(person);

// An empty ibject based on person is created
console.log(john);

// In order to have our data we need to populate it
john.firstName = 'John';
john.lastName = 'Doe';

console.log(john);

console.log(john.greet());