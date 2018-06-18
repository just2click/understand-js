function makGreeting(language) {
    return function (firstName, lastName) {
        if (language === 'en') {
            console.log('Hello ' + firstName + ', ' + lastName);
        }
        
        if (language === 'es') {
            console.log('Hola ' + firstName + ', ' + lastName);
        }        
    }
}

var greetEnglish = makGreeting('en');
var greetSpanish = makGreeting('es');

greetEnglish('Dror', 'Avidov');

greetSpanish('Roey', 'Avidov');