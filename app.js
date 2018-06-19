function sayHiLater () {
    var greeting = 'Hi';
    
    setTimeout(function () {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions
// Example:
//$("button").click(function () {

//});

function tellMeWhenDone(cb) {
    var a = 1000;   // Do something
    var b = 2000;   // Do something
    
    cb();   // cll the callback (i.e. cb), it runs  the function I gave it
}

tellMeWhenDone(function () {
    console.log('Done!');
})