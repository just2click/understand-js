function greet() {
    console.log('hi');
}

// Since in javascript a function is an object we can add properties to it
greet.language = 'English';

console.log(greet); // Shows the function
console.log(greet.language);    // Return the proprty
console.log(greet.code);