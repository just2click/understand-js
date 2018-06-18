// function statement
function greet(name) {
    console.log('Hello ' + name);
}

greet('Jhon');

// using a function expression
var greetFunc = function(name) {
    console.log('Hi ' + name);
}

greetFunc('Jhon');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    //console.log('Hola ' + name);
    return ('Hola ' + name);
}('Jhon');


console.log(greeting);

var firstName = 'Dror';

// A valid function expression
(function(name) {
    var message = 'Shalom';
    console.log(message + ' ' + name);
}(firstName));