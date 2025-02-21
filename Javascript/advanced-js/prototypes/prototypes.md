# prototype

- class in java / c++, these classes are pure blueprint.
- pure blueprint: once u create obj from these class, we wont get any link.

# class in JS

- if u created 50 objs from blueprint and did some changes, then these changes can be ascociated with other objects as well.
- A lot of times,we will find people saying JS is not an object oriented, instead it is object linked to an object kind of language. the sole reason is prototypes.

# What is prototypes?

- prototype is a mechanism by which, objects can share properties with another object.

# what happens inside js while running your code?

-- internal setup
 - this is handled by js.
 - js will setup a function called as Object.
 - toString() is not provided by browser.
 - js will also provide another entity, but it doesnt have any name, and this entity is an normal js object.
 - these object entity is not empty it has some functions like toString(), isPrototype(), valueOf() and its functionalities provided.
 - to access this object entity then use Object.prototype, then we will get access to all those objects and the functonalities as well.
 - this object entity also has something known as constructor function. if you do Object.prototype.constructor -> it points to Object itself.

-- our code setup
- this js exectes our own code.
