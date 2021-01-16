// let and const are hoisted
// var -> allocated memory(hoisted) and attached to global(window or this) object
// let and const -> allocated memory(hoisted) but attached to diff memory location called script in browser
// Temporal dead zone -> time zone between hoisting of variable and declaration of variable
// NOTE: try to make temporal dead zone to zero by declaring the variable to top of code.

//console.log(x) // ReferenceError: x is not defined because x is no where in memory
//console.log(a)   // ReferenceError: Cannot access 'a' before initialization because a is in temporal dead zone
let a = 10;

// let a = 15;  //SyntaxError: Identifier 'a' has already been declared because let variable can not be re-declare but can be re-assign
a = 15;
console.log(a)
//const b;    // SyntaxError: Identifier 'a' has already been declared because const vaiable have to be initialize when it is declared
const b = 10;
//b = 15;  //TypeError: Assignment to constant variable because const type can not be re-assign nor re-declared