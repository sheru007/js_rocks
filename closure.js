// closure : function along with it's lexical environment bunduled together.
// uses of closure : 1. module design pattern 2. currying 3. function like once 4. memoize 5. setTimeouts
//                   6. maintaining state in async world 7. iterators
function x(){
    let a = 7;
    function y(){
        let b = 200;
        function z(){
            console.log(b, a);
        }
        z()
    }
    a = 100;
    return y;
}
const z = x();
// 1000 lines
console.log(z())  // closure(x) so will print value of a and b;

// QUESTION: print the 1 after 1 sec, 2 after 2sec, 3 after 3sec upto 5.
function q1(){
    for( var i =1; i <= 5; i++){
        function sol2(x){
            setTimeout(function (){
                console.log(x);
            }, x*1000)
        }
        sol2(i);
    }
}
q1() // output is 6 6 6 6 6 because after 1 sec, when first settimeout finish and callback execute, 
     // that time it print the valueof i that is present in it's lexical environment and it is 6.
     // solution :  1. use let instead of var because let is a block scope and it is different for every
     //             loop iterators and when the callback execute, it print the value of i that was assigned 
     //             when setTimeout called and did not changed due to next loop
     //             2. use pass by value property of js and call the settimeout in function that is call every
     //             every time loop runs  
