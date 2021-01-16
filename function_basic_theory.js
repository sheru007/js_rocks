// arrow function / first class / anonmyous / function statement / function expression
// diff between function statement vs function expression vs function declaration ????

// difference between functon statement and function expression is hoisting, function statement is hoisted
// and we can call it before it declared but we can not function expression
a()  // work fine due to hoisting
//b()   //  typeError: b is not a function because it is just like other variable

// function statement is also called function declaration:
function a() {
    console.log("this way of creating a function is called function statement")
}

// function expression:
var b = function() {
    console.log("this way of creating a function is called function expression")
}
b()

// anonymous function: it has no identity, if you create it , it gives you syntexError because js do not allow
// a function without name
// USE: it is used when function is use as value like assign to it , sent it as argument

// named function expression: same as function expression but assign a function statement not anonymous function
var c = function cc(){
    console.log("named function expression")
}
c()
//cc()  // referanceError: cc is not defined because it has changed it's identity to c

// argument : when you pass value when you call 
// parameters: when you declare a function and get the values that is passed while calling it

// first class function/citizens: ability of a function such that we can pass this function as argument, get it as parameters
// and return a this function from function








