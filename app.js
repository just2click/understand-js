function greet(firstName, lastName, language) {
    
    // Default language if missing
    language = language || 'en';
    
    // If no params were sent return
    if (arguments.length === 0) {
        console.log('No argumanets');
        console.log('--------------')
    }
    
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('argumnets[0]: ' + arguments[0]);
    console.log('--------------')
}

greet();
greet('Jhon');
greet('Jhon', 'Doe');
greet('Jhon', 'Doe', 'es');
greet('Jhon', 'Doe', 'es', 'Main st 222', 'Ney York');