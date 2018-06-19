var person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    
    getFullName () {
        var fullName = this.firstName + ' ' + this.lastName;
        
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    // This will fail as the getFullName method isn't
    // a function on the global scope
    console.log('Logged: ' + this.getFullName());
    console.log('Argumanets: ' + lang1 + ' ' + lang2);
    console.log('---------');
}

// Bind creates a copy of the method and sends in the this reference
var logPersonName = logName.bind(person);

// JUst call the binded function
logPersonName();

// Add a lang1
logPersonName('en');

// Call invokes the function with the params we sent

// The call lets us set who is the 'this' in this function execution context
logName.call(person);

// We can also send more params
logName.call(person, 'en', 'es');

// Apply does the same as call but it takes the extra params in an array
logName.apply(person, ['en', 'es']);

// We can also use it as IIFE
(function(lang1, lang2) {
    // This will fail as the getFullName method isn't
    // a function on the global scope
    console.log('Logged: ' + this.getFullName());
    console.log('Argumanets: ' + lang1 + ' ' + lang2);
    console.log('---------');
}).apply(person, ['en', 'es']);


// Function borrowing
var person2 = {
    firstName: 'Jane',
    lastName: 'Flow',
}

console.log(person.getFullName.apply(person2));

// Function currying
function multiply (a, b) {
    return a * b;
}

// Setting the '2' number like this will set this method to always
// multiple by two
var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(5));