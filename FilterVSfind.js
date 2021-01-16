// find() function gives the first element that satisfied the gives condition
// findIndex() fucntion gives first element index that satisfied the condiiton

const array1 = [5,18,12,34,7,100]

// find number greater than 12
// 1. using find()-> first element only and then stop the execution
const num_gt_12_using_find = array1.findIndex( (item, index) => item > 12);
console.log(">>> using find() : ", num_gt_12_using_find)

// 2. using filter() -> return all element that satisfies the condition
const num_gt_12_using_filter = array1.filter( (elem, index, arr) => {
    console.log(`${elem} at index ${index} in array : ${arr}`);
    return elem > 12;
});
console.log(">>> using filter() :", num_gt_12_using_filter);

