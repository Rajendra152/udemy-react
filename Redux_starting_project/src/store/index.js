import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     };
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter
//         }
//     };
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     };
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     };
//     return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});


export default store;

