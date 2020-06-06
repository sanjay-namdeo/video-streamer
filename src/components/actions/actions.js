import {SIGN_IN, SIGN_OUT, STREAM_CREATE, STREAM_EDIT, STREAM_DELETE, FETCH_STREAM, FETCH_STREAMS} from "./types";
import stream from "../apis/stream";

const signIn = (usedId) => {
    return {
        type: SIGN_IN,
        payload: usedId
    }
};

const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

const streamCreate = (formValues) => {
    return async function (dispatch) {
        const response = await stream.post('/streams', formValues);

        dispatch({type: STREAM_CREATE, payload: response.data});
    }
}

const streamEdit = (formValues) => {
    return async function (dispatch) {
        const response = await stream.put('/streams', formValues);

        dispatch({type: STREAM_EDIT, payload: response.data});
    }
}

const streamDelete = (id) => {
    return async function (dispatch) {
        await stream.delete('/streams', id);

        dispatch({type: STREAM_DELETE, payload: id})
    }
}

const fetchStream = (id) => {
    return async function (dispatch) {
        const response = await stream.get(`/streams/${id}`);

        dispatch({type: FETCH_STREAM, payload: response.data});
    }
}

const fetchStreams = () => {
    return async function (dispatch) {
        const response = await stream.get('/streams');

        dispatch({type: FETCH_STREAMS, payload: response.data})
    }
}

export {signIn, signOut, streamCreate, streamEdit, streamDelete, fetchStream, fetchStreams}