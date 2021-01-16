// What is Currying in JavaScript?
// Currying is a technique of evaluating a function with multiple arguments, into a sequence of functions 
// with a single argument.In other words, when a function, instead of taking all arguments at one time, takes the 
// first one and return a new function that takes the second one and returns a new function which takes the third one, 
// and so forth until all arguments have been fulfilled. That is when we turn a function call add(1,2,3) into add(1)(2)(3).
// By using this technique, the little piece can be configured and reused with ease.
// Currying helps you to avoid passing the same variable again and again.
// It helps to create a higher-order function.


// arrow fucntion can be access before it initialise
// const sum = (a) => (b) => (c) => (d) => a+b+c+d;
console.log(sum(5)(10)(15)(20)())

// arrow fucntion do not hoisted so main fucniton must be declare with fucntion keywork 
// and inside that , we can use arrow fucntion
// function sum(a){
//     return (b) => (c) => (d) => a+b+c+d;
// }

// what if i have infinite parameters
function sum(a){ return (b) => b ? sum(a+b) : a}

