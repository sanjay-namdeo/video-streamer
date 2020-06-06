import {SIGN_IN, SIGN_OUT, STREAM_CREATE} from "./types";
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

        dispatch({
            type: STREAM_CREATE,
            payload: response.data
        });
    }
}

export {signIn, signOut, streamCreate}