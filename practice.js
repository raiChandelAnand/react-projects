const person = {
  name: "Alice",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

// This function call will fail because 'this' is undefined
const greet = person.greet;
console.log(greet()); // Output: Hello, my name is undefined

// Using bind to set 'this' to 'person'
const boundGreet = person.greet.bind(person);
console.log(boundGreet()); // Output: Hello, my name is Alice
