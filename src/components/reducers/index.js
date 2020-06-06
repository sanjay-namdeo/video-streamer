import {
    FETCH_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT,
    STREAM_CREATE,
    STREAM_DELETE,
    STREAM_EDIT
} from "../actions/types";
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import _ from 'lodash';

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

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case STREAM_CREATE:
            return {...state, [action.payload.id]: action.payload};
        case STREAM_EDIT:
            return {...state, [action.payload.id]: action.payload};
        case STREAM_DELETE:
            return _.omit(state, action.payload.id);
        case FETCH_STREAM:
            return state[action.payload];
        case FETCH_STREAMS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({auth: authReducer, form: formReducer, streams: streamReducer});

export default reducers;