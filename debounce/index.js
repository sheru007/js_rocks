console.log('>>> learning debounc in js')

let counter = 0;
const getData = () => {
    // used to call the API
    console.log('fetching data ..', counter++);
}

// debounce function takes 2 argument: a function and a delay, and does not let this function unnecessary
// make a call again and again. only make a call if the difference between the time interval of this function 
// call is greater than delay. ex. scroll event like lazy loading , resize of the window
const debounce = (fn, d) => {
    let timer;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, d);
    }
}
const betterFunction = debounce(getData, 300);