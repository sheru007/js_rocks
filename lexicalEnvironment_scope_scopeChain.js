// scope = where you can acces a specific variable or function in our code.
// Q. where is the scopr of b?? or where can i acess b?? or is b inside the scopr of function c()??
// scope depent on the lexical environment(lexical means in heirarchy or in sequence)
// Execution Context(EC) = memory(variable) + code(line by line) of specific function
// lexical environment(LE) = local memory(part of EC) + referance to the LE of it's parent.


function a() {
    var b = 10;
    console.log(">> in a() EC >> b: ", b);  // 10
    function c() {
        console.log(">> in c() EC >> b: ",b);  // 10
    }
    c();
}

a();
console.log(">> in global EC >> b: ", b);   // undefined


// c() is lexically sitting inside a() and a() is lexically sitting inside global EC;
// Scope Chain : is nothing but these chain of these LE and parent referance.