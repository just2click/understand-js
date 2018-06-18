
var firstName = 'Dror';

// A valid function expression
(function(name) {
    var greeting = 'Shalom';
    console.log(greeting + ' ' + name);
}(firstName));

// Another IIFE with a different execution context
// We can send in a reference to an external context
(function(global, name) {
    // We can then on porpuse change the global parameter
    global.greeting = 'Hello';
    console.log(global.greeting + ' ' + name);
}(window, firstName));