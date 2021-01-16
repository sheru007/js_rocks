// callback function: when we pass a function, this function is called callback

// js is synchronous and single threaded.

// Blocking the main threaded means when a function stay in call stack for long time, it does not allow
//      other function to execute

// EventlISTENERS : closure demo and scope demo
// Q. show the number of click event happended?
function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("button clicked : ", count++);
    })
}
attachEventListener();

// remove EventLishtner : because it keep the memory and slow the page
// garbage collection : when you remove the eventListener,then the scope variable remain there and become garbage
