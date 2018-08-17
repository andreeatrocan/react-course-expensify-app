import { createStore } from "redux";

// Action generators = functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

//Reducers
// 1. Reducers are pure functions - depind in intregime de input; nu trebuie sa interactioneze deloc cu scope-ul global
// 2. Never change state or action

const countReducer = (state  = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.count
            };

        case "RESET":
            return {
                count: 0
            };

        default: 
            return state;
    }
   
};

const store = createStore(countReducer);

const unsuscribe = store.subscribe(() => {
    console.log(store.getState());
}); // apelata de fiecare data cand se schimba state din store

// unsuscribe(); // nu mai apar urmatoarele dispatchuri

// Actions ne permite sa schimbam redux store
//Actions este un obiect care este trimis in store. acesta are o proprietate "type"
// increment the count:
store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 111}));