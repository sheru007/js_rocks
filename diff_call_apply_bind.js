let name1 = {
    firstname: 'sheru',
    lastname: 'khan',
} 

let printFullName = function(hometown, state) {
    console.log(this.firstname+" "+this.lastname+" from "+hometown+" , "+state);
}
// by default every function have this argument that refers to who calls this function like here name1 is this.
// name1.printFullName()
//printFullName.call(name1,'bhilwara',"raj")

let name2 = {
    firstname: 'heena',
    lastname: 'bano',
}

// ----> borrow the print function from name1 and use it here to name2 using call funciton

// name1.printFullName.call(name2);
//printFullName.call(name2,'bhil','raj')

// the main difference between call and apply is the way we pass the arguments
//printFullName.apply(name2,['bhil','raj'])

// ----> bind function- it will create the copy of function, bind it with obj 
//       and return a function that can be call after some time unlike call method that execute
//       at the same time. 
let printMyName = printFullName.bind(name1,'bhil','raj');
//printMyName();


// POLYFILL OF BIND FUNCTIONS- how to write custom bind function
// as we know, every function have acess to this bind function, so our bind function do the same.
// keep custom function in Function.prototype to be acessible to every function.

Function.prototype.myBind = function(...args){
    let obj = this,   // this -> function who call it like here printFullName and args is array of all arguments
        params = args.slice(1);  // params have all argument except first one
    return function (...args2) {  // because mybind return a function
        // obj.call(args[0], params[0]);
        obj.apply(args[0], [...params, ...args2]);  // bacause apply accept the array of argument
    }
}

let printMyName2 = printFullName.myBind(name1, "bhil");
//printMyName2("raj");

// POLYFILL OF Array.map()

const number = [2,4,6,8,10, 3, 5, 7];
Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let ele of this){
        newArray.push(callback(ele))
    }
    return newArray;
}
const squareNumber = number.myMap(ele => ele*ele);
console.log(squareNumber);

Array.prototype.myFilter = function(callback){
    let newArray = [];
    for(let ele of this){
        if(callback(ele)) {
            newArray.push(ele)
        }
    }
    return newArray;
}

const oddNumber = number.myFilter(ele => ele%2 !== 0);
console.log(oddNumber);








