// let a = undefined;

// let promiseData = new Promise( (resolved, reject) => {
//     setTimeout( () => {
//         a = "hii, i am sheru"
//         resolved(a)
//     }, 2000)
// })

// promiseData.then( () => {
//     console.log({a})
// })

// console.log("i am last line ")

// ---->1. what is promise ? 
// priomise is an object that return a value which you hope to receive in the future but not now.

//   --->2. wht do we need it?
// JS is always synchronous and single threaded language. JS never wait for code or function result when they take some time and direct jump to next line

// ----->3. promise chaining
// resolving more than one promise is called PC. ex. while calling API using fetch(url).then(res => res.json()).then(data => console.log(data))

// ----> 4. finally keyword
// it is function that runs wheather promise resolved or reject.

// let data = new Promise((resolved, reject) => {
//     setTimeout(()=>{
//         // resolved(10);
//         reject(10)
//     }, 2000)
// })

// data.finally((item)=>{
//     console.log("finally block : ", item)
// })

// data.then((item) => {
//     console.log("resolved block : ", item)
// }).catch((err) => {
//     console.log("reject or catch block : ", err)
// })

// ----> 5. error handling in promise
// whether error occur in promise or then block, it will go to catch block.

// ---> 6. promise.all() -- promise.allsettle()   -- promice.race
// all 3 function use when there are multiple promise runing parallelly.

// promise.all()  -> it takes array of promises and resolved only after maximum time taker promise resolved but 
// but but it reject all promise if any one promise will reject.

// let data = Promise.race([
//     new Promise((resolved, reject) => {
//         setTimeout(()=>{
//             // if we write both, then whatever we write first, that will be considered
//             // reject(" after 2 sec")   
//             resolved('after 2 sev')
//         }, 2000)
//     }),
//     new Promise((resolved, reject) => {
//         setTimeout(()=>{
//             resolved(" after 1 sec")
//             // reject(" after 5 sec")
//         }, 1000)
//     }),
//     new Promise((resolved, reject) => {
//         setTimeout(()=>{
//             resolved(" after 4 sec")
//         }, 4000)
//     })
// ])

// data.then((items) => {
//     console.log({items})
// }).catch((err) => {
//     console.log(err)
// })


// promise.allSettled -> it resolved the promise only after maximun time takes promise but give us array of all promise with 
// status of whether this promise reject or fulfilled.


// promise.race()  -> it sent first promise that resolved or reject. it gived fastest one either resolve or reject.


/// async await

// async function getData(){

//     let promiseData2 = new Promise( (resolved, reject) => {
//         setTimeout( () => {
//             a = "hii, i am sheru after 2 sec"
//             resolved(a)
//         }, 2000)
//     })

//     let promiseData5 = new Promise( (resolved, reject) => {
//         setTimeout( () => {
//             a = "hii, i am sheru, after 5 sec"
//             resolved(a)
//         }, 5000)
//     })

//     let res2 = await promiseData2;
//     let res5 = await promiseData5;
//     // promiseData.then( () => {
//     //     console.log({a})
//     // })

//     console.log({res2, res5})
// }

// getData()
