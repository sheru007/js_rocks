const counterNode = document.getElementById('count');

const getInitialState = () => {
    return {
        count: 0,
    };
};

function reducer(state = getInitialState(), action) {
    switch (action.type) {
        case "COUNT": {
            console.log({ state, action })
            return {
                ...state,
                count: state.count + action.payload.count
            }
        }
        default:
            console.log({ state })
            return state
    }
}

function createStore(reducer, initialState) {
    const store = {};
    store.state = initialState;
    store.listeners = [];

    store.getState = () => store.state;

    store.subscribe = (listener) => {
        store.listeners.push(listener);
    };

    store.dispatch = (action) => {
        store.state = reducer(store.state, action);
        store.listeners.forEach(listener => listener());
    };

    return store;
};

const store = createStore(reducer);

store.subscribe(() => {
    const state = store.getState();
    const count = state.count;
    counterNode.innerHTML = count;
});

// A simple event to dispatch changes
document.addEventListener('click', () => {
    console.log('----- Previous state', store.getState());
    store.dispatch({
        type: 'COUNT',
        payload: {
            count: Math.ceil(Math.random() * 10),
        },
    });
    console.log('+++++ New state', store.getState());
});

store.dispatch({}); // Sets the inital state