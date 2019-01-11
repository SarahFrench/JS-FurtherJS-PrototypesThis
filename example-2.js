var foo = {
    fizz: 42
};

var bar = Object.create(foo);

console.log(bar.fizz);  // 42

foo.fizz = 11;

console.log(bar.fizz);  // 11


/*
The consequences of what's shown in example 1 is that you can change things
unintentionally if you modify an object acting as a prototype. 
*/
