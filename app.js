var a;

// Goes to the internet and looks for a value

// Will print log if a is either: null, undefined, false or 0
// or a = "" (zero length string)

if (a) {
    console.log('a exists');
}

// Handle the situation that 'a' equals zero which is coarsed to
// false but maybe a valid value
a = 0;

if (a || a === 0) {
    console.log('a exists (or)');
}