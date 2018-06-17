function a() {
    console.log(this);
    this.someValue = 'Hello';
}

var b = function() {
    console.log(this);
}

// This is showing the Window object as it is in the
// general scope
a();

// Adding a value like we did before simply attaches
// this value to the Window
console.log(someValue);

b();

// In this scenario will see that the value changes
// as javascript looks 'up' the chain ti find this.
var c = {
    name: 'The c object',
    log: function () {
        this.name = 'Updated c object';
        console.log(this);
    }
}

c.log();

var d = {
    name: 'The d object',
    log: function () {
        var self = this;    // Would help us save use the correct this
        // Replace all this with self inside the log: function ()
        
        //this.name = 'Updated d object';
        self.name = 'Updated d object';
        //console.log(this);
        console.log(self);

        // Since the this is correctly set nothing changes
        var setname = function(name) {
            //this.name = name;
            self.name = name;
        }
        
        setname('Update d object again');
        //console.log(this);
        console.log(self);        
        
    }
    
    
}

d.log();