// block: block is used to grouping the multiple statement in js.
// Question: why do we need it?? 
// Answer: so that we can use this gruop where JS except one statement like if(), for() accept one statement.

//if(true)   // SyntaxError: Unexpected end of input because if() accept a statement;
//if(true) return;
//if(true) 5==5;

// block scope: all the variable that can be access in this block
// let and const are attached to block object and this object remove once the execution move after it.
var a = 100;
let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(a); // 10
console.log(b); // 100 because let and const defined in block remain in block object and defined in script remain in script object.
//console.log(b);  //ReferenceError: b is not defined
//console.log(c);


//shadowing :  var variable in block shadow the var variable in script
// we can shadow let using let but can not let using var because it is illegal shadowing
// CASE: 01
let c = 20;
{
    //var c = 20; // SyntaxError: Identifier 'c' has already been declared because we can not shadow
    let c = 20;   // work fine
}

// but var is functional scope like it donot go outside the function it is declared in.
// CASE: 02
var g = 10;
function x(){
    var g = 100;  // unlike case 1 , it do not give error because var is inside functional scope.
}
var d = 20;
{
    let d = 20;  // work fine because let is block scope and do not interfare with var d that is out of this block scope
}

const t = 10;
{
    const t = 20;
    {
        const t = 30;
        console.log(t) // 30 because block follows the lexical scope
    }
    console.log(t) // 20 because block follows the lexical scope
}
