//import { createStore } from 'redux'
//const { createStore } = Redux;

//Reducer counter and it manages the state tree
const redCounter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default redCounter;

/*******************REDUX GETTING STARTED**************/
/*Basically re-implementing a store with its main methods SUBSCRIBE, DISPATCH, GETSTATE 
by another hand it used the console and DOM directly to show an implementation of one counter
*/

//Initialize the store
//We're gonna create the reducer function

//IMPLEMENTATION
// const createStore = (reducer) => {
    
//     let state;    
//     let listeners = [];
//     const getState = () => state;

//     // the unique way to change de state it must calculate the new state when the new state is updated
//     //calling the reducer function and the action will dispatch after that it requires to
//     //notify every change listener calling them

//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     }; 

//     const subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listener = listeners.filter(l => l !== listener);
//         };
//     };

//     dispatch({});

//     return {getState, dispatch, subscribe}
// };

//CREATING THE STORE
// const store = createStore(counter);

//DOM RENDERING
// const render = () => {
//     document.body.innerText = store.getState();
// };
// //It must subscribe the listeners "Who is listening"
// store.subscribe(render);

// document.addEventListener('click',() => {
//     store.dispatch({type: 'INCREMENT'});
// });

//Another common notations
//var createStore = Redux.createStore;
//import {createStore} from 'Redux';

//CONSOLE PRINT
// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());


