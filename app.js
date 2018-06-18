function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}

// Calling a function that returns a function
greet("Hi")("Dror");

var sayHi = greet('Hi');

sayHi('Dror');