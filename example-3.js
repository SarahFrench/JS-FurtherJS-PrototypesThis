var foo = {
    fizz: 42
};

var bar = Object.create(foo);

console.log(bar.fizz);  // 42

bar.fizz = 11;

console.log(bar.fizz);  // 11

/*
SHADOWED PROPERTIES
objects can have properties that they inherit from prototype Objects, but if you
give those objects a property of the same name it'll 'overwrite' what they inherited from
the prototype.

BUT, conversely, if you remove a property from an object, you might get something
inherited from the prototype that you didn't expect.

The shadowed property is the one at the end of the prototype tree - i.e. in the child objects.
It is 'under the shadow' of the property of the same name that's in the prototype, it is 'below'
the prototype's property.
*/
