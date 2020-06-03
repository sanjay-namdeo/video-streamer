import {SIGN_IN, SIGN_OUT} from "../actions/types";
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
}

const reducers = combineReducers({auth: authReducer, form: formReducer});

export default reducers;