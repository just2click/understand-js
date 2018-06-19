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
}

var logPersonName = logName.bind(person);

logPersonName();

logName();