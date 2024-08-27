console.log('Hello!');

// Prototype object
const prototype = {
  greet() {
    console.log('Hello from the prototype!');
  },
};

// Create a new object based on the prototype
const instance = Object.create(prototype);
instance.greet(); // Output: Hello from the prototype!

//example 2
// Constructor function
function Person(name) {
  this.name = name;
}

// Add a method to the prototype of Person
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Create new instances
const alice = new Person('Alice');
const bob = new Person('Bob');

alice.sayHello(); // Output: Hello, my name is Alice
bob.sayHello(); // Output: Hello, my name is Bob
