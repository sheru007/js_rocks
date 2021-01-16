// 1. get the input value as number
const checkMyValueType = (event) => {
    console.log(typeof event.target.value) // string
    console.log(typeof event.target.valueAsNumber) // number
}
//<input type="number" onkeyup="checkMyValueType(event)" />

// 2. copy an input to clipboard
function copyToClipboard(inputID){
    navigator.clipboard.writeText(document.querySelector(inputID).value);
}

// 3. chack if tab is in view/focus or not
const isBrowserTabInView = () => document.hidden;
isBrowserTabInView(); // returns true or false depending if tab is in view / focus

// 4. check if localstorage is enabled or not
const isLocalStorageEnabled = () => {
    try {
        const key = `__storage__test`;
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};
isLocalStorageEnabled(); // true, if localStorage is accessible

// 5. check the performance of sth
var startTime = performance.now();
isLocalStorageEnabled();
const endTime = performance.now();
console.log(endTime - startTime + " milliseconds."); // (Time in milliseconds)

// 6. fires an event only once 
const myButton = document.getElementById("myBtn");
const myClickFunction = () => {
    console.log('this click will only get called once')
}
myButton.addEventListener('click', myClickHandler, {
    once: true,
});

// 7. scroll the page to TOP of the page
const scrollToTopOfDocument = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
scrollToTopOfDocument();

// 8. listen the click outside the element 
const onClickOutsideElement = (element, callback) => {
    document.addEventListener('click', e => {
        if (!element.contains(e.target)) callback();
    });
};
onClickOutside('#some-element', () => console.log('Hey you missed'));
// Will log "Hey you missed" everytime a click that was not "some-element" was clicked



