//PROTOTYPE: whenever we create array, object or function, JS engine put this hidden property and method in an 
//          object and attach it with your array, object or function.
//          this object is called prototype and can be access use (array/object/fun).__proto__

let arr = ["sheru", "khan"];
console.log(arr.__proto__ === Array.prototype);  // true
console.log(arr.__proto__.__proto__ === Object.prototype);  //true
console.log(arr.__proto__.__proto__.__proto__)  // null and this is called prototype chain

let obj = {
    name: "sheru",
    city: "bhilwara",
    getIntro: function() { console.log(this.name + " from " + this.city)}
}
console.log(obj.__proto__ === Object.prototype) // true
console.log(obj.__proto__.__proto__)  // null because chain ends here

function func(){
    let a = 5;
}
console.log(func.__proto__ === Function.prototype);  // true
console.log(func.__proto__.__proto__ === Object.prototype); //true
console.log(func.__proto__.__proto__.__proto__)  // null and this is called prototype chain

const obj2 = {
    name: "sk",
}

// never do this
obj2.__proto__ = obj;
console.log(obj.name) // sheru
console.log(obj2.name) //sk

console.log(obj.getIntro()) // sheru from bhilwara
console.log(obj2.getIntro())  // sk from bhilwara because of prototypal inheritance