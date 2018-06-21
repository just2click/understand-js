function Person () {

    // The actual object (which is empty)
    console.log(this);
    
    this.firstName = 'John';
    this.lastName = 'Doe';
    // Show that this function is invoked after the new operator
    console.log('Person is invoked');
    
    // If we return an object from this function
    // we actually override the above object props
    //return { gretting: 'Opps' };
}

Person2.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}


// Setting the methods this way is very efficient memory wise
// as the methods are only created once on the prototype and
// are not duplicated with every object instance
Person2.prototype.getFormalFullName = function () {
    return this.lastName + ', ' + this.firstName;
}

// A function constructor with params
function Person2 (firtsName, lastName) {

    // The actual object (which is empty)
    console.log(this);
    
    this.firstName = firtsName;
    this.lastName = lastName;
    // Show that this function is invoked after the new operator
    console.log('Person2 is invoked');
}

var john = new Person();

console.log(john);
    
var john2 = new Person2('John', 'Doe');

console.log(john2);

console.log('Get fullname: ', john2.getFullName());

var jane = new Person2('Jane', 'Doe');

console.log(jane);

console.log('Get formal fullname: ', jane.getFormalFullName());
