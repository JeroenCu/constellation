import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


let INIT_STATE = {
    loggedIn: false,
    displayError: {},
    userList : []
};

let appReducer = function(state, action) {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === "TOKEN_RECEIVED") {
        newState.displayError.login = false
        newState.loggedIn = action.payload
    }
    if (action.type === "ERROR_RECEIVED") {
        newState.displayError[action.tag] = action.payload
    }
    if (action.type === "USERS_RECEIVED") {
        newState.userList = action.payload
    }
    return newState;
}

let middleware = applyMiddleware(thunkMiddleware)

let store = createStore(appReducer, INIT_STATE, middleware)

export default store