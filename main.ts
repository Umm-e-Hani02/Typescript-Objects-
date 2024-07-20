// ===========================================================
//                          OBJECTS
// ===========================================================

// In TypeScript, objects are collections of properties, where each property has a key (name) and a value. 
// They are used to store and organize data in a structured way.

// Here is a basic object in TypeScript
let person = {
    name: "Umm-e-Hani",
    age: 13,
    teacher: "Sir Hamza Alvi"
};

// Accessing properties of an object with dot notation
console.log(person.name); // OUTPUT: "Umm-e-Hani"

// Accessing properties of an object with square bracket notation
console.log(person["age"]); // OUTPUT: 13

// Accessing object properties using template literals (backticks)
console.log(`My name is ${person.name} and my teacher is ${person.teacher}`); 
// OUTPUT: "My name is Umm-e-Hani and my teacher is Sir Hamza Alvi"

//                   Object Operations

// Object.keys():
// Returns an array containing the keys (property names) of the object.
console.log("\nObject Keys:");
console.log(Object.keys(person)); 
// OUTPUT: ["name", "age", "teacher"]

// Object.values():
// Returns an array containing the values of the object's properties.
console.log("\nObject Values:");
console.log(Object.values(person)); 
// OUTPUT: ["Umm-e-Hani", 13, "Sir Hamza Alvi"]

// Object.entries():
// Returns an array of arrays, where each inner array contains a key-value pair from the object.
console.log("\nObject Entries:");
console.log(Object.entries(person)); 
// OUTPUT: [["name", "Umm-e-Hani"], ["age", 13], ["teacher", "Sir Hamza Alvi"]]

//                  Object Keys and Values Examples

let obj1 = {
    a: 1,
    b: 2,
    c: 3
};

console.log("\nObject Keys:");
console.log(Object.keys(obj1)); 
// OUTPUT: ["a", "b", "c"]

let obj2 = {
    0: "A",
    4: "B",
    1: "C"
};

console.log(Object.keys(obj2)); 
// OUTPUT: ["0", "1", "4"]

let obj3 = {
    0: "A",
    1: "B",
    2: "C"
};
console.log("\nObject Values:");
console.log(Object.values(obj3)); 
// OUTPUT: ["A", "B", "C"]

let obj4 = {
    100: "A",
    0: "B",
    1: "C"
};

console.log(Object.values(obj4)); 
// OUTPUT: ["B", "C", "A"]

let obj5 = {
    100: "A",
    8: "B",
    7: "C"
};
console.log("\nObject Entries:");
console.log(Object.entries(obj5)); 
// OUTPUT: [["7", "C"], ["8", "B"], ["100", "A"]]

// Note: Object keys are ordered in ascending order when using Object.keys() and Object.values() methods.

// ===========================================================
//                        NESTED OBJECTS
// ===========================================================

// In TypeScript, nested objects can be used to represent complex data structures, such as a book with its details 
// and nested objects for author information and publisher details.

let book = {
    title: "Mastering TypeScript",
    author: {
        firstName: "John",
        lastName: "Doe"
    },
    yearPublished: 2021,
    genre: "Programming"
};

// Accessing properties of a nested object
console.log("\nNested Object:");
console.log("Title:", book.title); // OUTPUT: "Mastering TypeScript"
console.log("Author's First Name:", book.author.firstName); // OUTPUT: "John"
