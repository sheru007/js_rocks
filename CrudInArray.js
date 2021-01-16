// 1. unshift() function add the element in start of array while push() add in end of array
// 2. shift() and pop() used to delete the element from start and end of the array respectively
// 3. splice can be used for CRUD operation using 
//      array.splice(start, deleteCount:default=all from start index, replaceValue) 

let names=['sheru', 'savinay', 'avinash']

console.log(">>>>> initial array : ", names);
// 1. add the hitesh in the end of array(first param : array.length) or start(first param : 0)
const newName = names.splice(names.length, 0, 'hitesh')

// 2. output of splice() -> return either [deleted element] if we use delete else return []

// 3. update the sheru to SHERU
const updateIt = 'sheru';
const updatedName = names.splice(names.indexOf(updateIt),1,names[names.indexOf(updateIt)].toUpperCase())
console.log(">>>> updated names : ", updatedName)

// 4. delete the element
const deleteIt = 'savinay'
const deletedName = names.splice(names.indexOf(deleteIt),1)
console.log(">>>> deleted element : ", deletedName);
console.log(">>> final arraya : ", names)