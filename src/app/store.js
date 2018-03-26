import {createStore, combineReducers, 
    applyMiddleware} from 'redux';
    
import stateReducer from './states/state/StateReducer';
import stateViewReducer from './states/state/StateViewReducer';
import stateEditReducer from './states/state/StateEditReducer';

import thunk from 'redux-thunk';

// function called by store
//for every dispatch
// function loggerMiddleware({ dispatch, getState }) {
//     return function (next) {
//         return function (action) {
//             console.log("LOGGER ", action, typeof action);
//             //forward action to next middleware or reducers
//             let result = next(action);
//             return result;
//             return true;
//         }
//     }
// }

const rootReducers = combineReducers({
//state name: reducer function
statesList: stateReducer,
stateViewStore: stateViewReducer,
editedState:stateEditReducer
//state items: state Reducer
});

//let store = createStore(counterReducer);
//store.getState ==> 0, number type

let store = createStore(rootReducers, 
        applyMiddleware(thunk));
//store.getState() ==> { counter : 0, cartItems: []}
//stoer.getState() object type

export default store;