console.log("hiiii")

let x = 1, y=2,z=3
console.log({x,y,z});

console.clear()
console.log('%s is %d year old', "sheru",24);


// with an info,debug,warn,error icon on left side
console.info("console info")
console.debug("console debug")
console.warn("console warning")
console.error("console error")

// if we want an msg only if there is some condition is false
let isValid = false;
console.assert(isValid, "this is reason why")

// for counting some repitationn and to identify the different counter , provide both a label
// console.clear()
// console.countReset("count 1")
// for(let i=0;i<10;i++){
//     console.count("count 1");
// }


// if we want to get the time between code and for multiple timer, provide both a label
// console.clear()
// console.time("sheru")
// setTimeout(() => {
//     //gives the time elapsed from time() to timeEnd();
//     console.timeEnd("sheru")
// }, 5000)

// setTimeout(()=>{
//     console.timeLog("sheru");
// },2000)

// setTimeout(()=>{
//     console.timeLog("sheru")
// },4000)

// to make group of console of same type and provide label to only first function for differnet group
console.clear()
console.log("i am not in group")
console.group("group 1")
console.log(" i am in group 1")
console.log(" i am also in group 1")
console.groupEnd()
console.log(" i am not in group")

// to trace the execution of all parent function that is calling this function
console.clear()
function one(){
    two()
}

function two(){
    three()
}

function three(){
    console.trace();
}
one()

// to print the object into tale
console.clear()
const peope = [
    {
        name:"sher",
        age: 24,
        company: "toppr"
    },
    {
        name:"savinay",
        age: 24,
        company:"socgen"
    }
]

console.table(peope,['name', 'company'])

// apply css to console.log
console.clear()
console.log("%c this is yellow text in blue background","color:yellow, background-color:blue");

// use debugger to open debugger tool in vs-code
// for(let i=0; i<10; i++){
//     debugger
//     console.log(i)
// }


