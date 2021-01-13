import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_IN_RESET,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    CREATE_ACCOUNT_REQUEST,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAIL,
} from '../constants/accountConstants';

export const accountSignIn = (credentials) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SIGN_IN_REQUEST
        });
        // Do things here to sign in
        // test
        const { email, password } = credentials;
        const tempAccount = localStorage.getItem('tempAccount')
            ? JSON.parse(localStorage.getItem('tempAccount'))
            : null;
        const { email: tempEmail, password: tempPassword } = tempAccount;
        if (email === tempEmail
            && password === tempPassword) {
            localStorage.setItem('accountInfo', JSON.stringify(credentials));
        } else {
            throw Error('Invalid Account');
        }
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: credentials,
        });
    } catch (error) {
        dispatch({
            type: SIGN_IN_FAIL,
            payload: 'Failed to sign in',
        });
    }
};

export const accountSignOut = () => async (dispatch, getState) => {
    dispatch({
        type: SIGN_OUT_REQUEST
    });
    //Do things here to sign out
    localStorage.removeItem('accountInfo');
    dispatch({
        type: SIGN_IN_RESET,
    });
    dispatch({
        type: SIGN_OUT_SUCCESS,
    });
};

export const accountCreate = (account) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ACCOUNT_REQUEST
        });
        //Do things here to create account
        // test
        localStorage.setItem('tempAccount', JSON.stringify(account));
        dispatch({
            type: CREATE_ACCOUNT_SUCCESS,
            payload: account,
        });
        const credentials = {
            email: account.email,
            password: account.password,
        };
        localStorage.setItem('accountInfo', JSON.stringify(credentials));
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: credentials,
        });
    } catch (error) {
        dispatch({
            type: CREATE_ACCOUNT_FAIL,
            payload: 'Failed to sign in',
        });
    }
};