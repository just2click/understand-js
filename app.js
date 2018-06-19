// Functional programming
function mapForEach(arr, fn) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))   
    }
    
    return newArr;
    
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);

// Using mapForEach
var arr3 = mapForEach(arr1, function (item) {
   return item * 2; 
});
    
console.log(arr3);

// Using mapForEach with a different action, not a mathemathical operation
var arr4 = mapForEach(arr1, function (item) {
   return item > 2; 
});
    
console.log(arr4);

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log('binded: ', arr5);

// Exercise
var checkLimiter = function (limiter) {
    return checkPastLimit.bind(this, limiter);
}

var arr6 = mapForEach(arr1, checkLimiter(3));

console.log('wrapped: ', arr6);