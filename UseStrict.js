// use strict makes you very strict about syntex of js
// sum(5, 10)
// function sum(a,a) {
//     console.log(add = a+a);
// }
// output is 20 because js avoid small mistake like define same paramater names, etc

// to avoid above mistake use "use strict"
"use strict";
sum(5, 10)
function sum(a,b) {
    let add = a+a;
    console.log(add);
}
