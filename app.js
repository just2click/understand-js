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

// Don't do this EVER!! for demo onlu
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}
var jane = {
    address: '111 Main st',
    
    getFormalFullName: function () {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    
    getFirstName: function() {
        return this.getFirstName;
    }
}

_.extend(john, jane, jim);

console.log(john.getFormalFullName());