import {SIGN_IN, SIGN_OUT} from "./types";

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

export {signIn, signOut}