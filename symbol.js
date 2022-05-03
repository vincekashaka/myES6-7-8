const sumbol = Symbol();

let name = Symbol('name');
let lname = Symbol('lname');

console.log(name);
console.log(lname);

console.log(typeof name);
console.log(typeof name === lname);
console.log(typeof name === typeof lname);
console.log(typeof name == typeof lname);