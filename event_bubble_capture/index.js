// Event bubbling is by default
// 3rd param us useCapture and default value is false.
// first capturing happen and then bubbling happens

// In bubbling, order of execution is child, parent and grandparent
// In capture, order of execution is grandparent, parent and child

// we can control when to execute the callback , for capture cycle use true as 3rd argument
// and for bubbling, use false as 3rd argument

document.querySelector("#grandparent")
.addEventListener('click', (e)=>{
    console.log('Grandparent clicked')
    e.stopPropagation()  // only grandparent click will print and propgation stop
}, true)

document.querySelector("#parent")
.addEventListener('click', ()=>{
    console.log('Parent clicked')
}, true)

document.querySelector("#child")
.addEventListener('click', ()=>{
    console.log('Child clicked')
}, true)

// Q.1 -> what is order of execution when 3rd argument for above listeners is true, false and true??
// A. grandparent clicked(capturing) -> child clicked(capturing) -> parent clicked(bubbling) 

// Q.1 -> what is order of execution when 3rd argument for above listeners is true, false and false??
// A. grandparent clicked(capturing) -> child clicked(bubbling) -> parent clicked(bubbling) 

// event delagation: 1. help to save memory because need to create single listeners and 2. have to write less code
//     delimitation: 1. not all event bubble up 2. do not use stoppropgation for event delagation

// event delagation: usecase 01

document.querySelector("#category")
.addEventListener('click', (e) => {
    console.log(e.target);
    // window.location.href = '/' + e.target.id;
})

// event delagation: usecase 02 - convert typed letter into uppercase
document.querySelector("#myData")
.addEventListener('keyup', (e) => {
    console.log(e)
    if(e.target.dataset.uppercase !== undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})
