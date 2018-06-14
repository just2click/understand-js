function greet(name) {
    // set a default value
    name = name || '<your name here>';
    console.log('Hello ' + name);
}

// Normal call
greet ('Dror');

// Call with no value - console log will return 'Hello undefined'
greet();