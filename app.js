// Adding custom feature to Array prototype can be problemait
// as it may colide with exusting libraries

Array.prototype.myCustomFeatre = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

// For arries used a standart for loop