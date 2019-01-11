var foo = {
    fizz: 42
};

var bar = Object.create(foo);

console.log(bar.fizz);  // 42


/*
Object constructor's create method takes an object to be the prototype of the new
object.

The foo object has a property called fizz with value of 42

bar doesn't have a fizz property, so when you call on it JS will look up the prototype
chain to try and find a property with that name.

This ties into how there are functions common to all Arrays, all Objects, all
Strings, etc., as they all have underlying prototype objects which define these
methods.

*/
