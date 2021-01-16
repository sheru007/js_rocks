//RULE -1 : Each Render Has Its Own Props and State

// QUESTION
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// ANSWER
// During first render
function Counter() {
    const count = 0; // Returned by useState()
    // ...
    <p>You clicked {count} times</p>
    // ...
}

// After a click, our function is called again
function Counter() {
    const count = 1; // Returned by useState()
    // ...
    <p>You clicked {count} times</p>
    // ...
}

// After another click, our function is called again
function Counter() {
    const count = 2; // Returned by useState()
    // ...
    <p>You clicked {count} times</p>
    // ...
}


//RUEL -2 : Each Render Has Its Own Event Handlers

// when we click show alert, thet time whatever is the 
// value of count, will be shown in alert, not the current value of count
// TIP: every render have its own event listener

// QUESTION
function Counter() {
    const [count, setCount] = useState(0);
    
    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={handleAlertClick}>
                Show alert
            </button>
        </div>
    );
}

// RULE -3 : Each Render Has Its Own Effects

// QUESTION
function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

//ANSWER 

// During first render
function Counter() {
    // ...
    useEffect(
        // Effect function from first render
        () => {
        document.title = `You clicked ${0} times`;
        }
    );
    // ...
}
// After a click, our function is called again
function Counter() {
    // ...
    useEffect(
        // Effect function from second render
        () => {
        document.title = `You clicked ${1} times`;
        }
    );
    // ...
}
// After another click, our function is called again
function Counter() {
    // ...
    useEffect(
        // Effect function from third render
        () => {
        document.title = `You clicked ${2} times`;
        }
    );
    // ..
}

// RULE -4: if we want future props/state in past render, then use useRef()

function Example() {
    const [count, setCount] = useState(0);
    const latestCount = useRef(count);
    useEffect(() => {
        // Set the mutable latest value
        latestCount.current = count;
        setTimeout(() => {
            // Read the mutable latest value
            console.log(`You clicked ${latestCount.current} times`);
        }, 3000);
    });
}

// RULE -5: Every function inside the component render (including event handlers, effects, timeouts or 
//          API calls inside them) captures the props and state of the render call that defined it.

//  The effect cleanup doesn’t read the “latest” props, whatever that means. 
//  It reads props that belong to the render it’s defined in

// That’s what allows React to deal with effects right after painting — and make your apps faster by default. 
// The old props are still there if our code needs them.

//QUESTION
useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
    return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
    };
});

// ANSWER
// First render, props are {id: 10}
function Example() {
    // ...
    useEffect(
        // Effect from first render
        () => {
            ChatAPI.subscribeToFriendStatus(10, handleStatusChange);
            // Cleanup for effect from first render
            return () => {
                ChatAPI.unsubscribeFromFriendStatus(10, handleStatusChange);
            };
        }
    );
    // ...
}
// Next render, props are {id: 20}
function Example() {
    // ...
    useEffect(
    // Effect from second render
    () => {
        ChatAPI.subscribeToFriendStatus(20, handleStatusChange);
        // Cleanup for effect from second render
        return () => {
        ChatAPI.unsubscribeFromFriendStatus(20, handleStatusChange);
        };
    }
    );
    // ...
}


// NICE QUESTION
useEffect(() => {
    const id = setInterval(() => {
        setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
}, [count]);

// BEST SOLUTION
useEffect(() => {
    const id = setInterval(() => {
        setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
}, []);


// TIP: When setting a state variable depends on the current value of 
//       another state variable, you might want to try replacing them both with useReducer.

// TIP: You may omit dispatch, setState, and useRef container values from the deps because React 
//        guarantees them to be static. But it also doesn’t hurt to specify them.