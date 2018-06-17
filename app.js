// An array can have all kinds of object types, including functions which are basically objects
var arr = [
    1,
    false,
    {
        name: 'Dror',
        address: 'Yael Rom st. 9'
    },
    function (name) {
        var greetings = "Hello ";
        
        console.log(greetings + name);
    },
    'Hello'
];

console.log(arr);
arr[3](arr[2].name);