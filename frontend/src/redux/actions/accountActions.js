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
    READ_ACCOUNT_REQUEST,
    READ_ACCOUNT_SUCCESS,
    READ_ACCOUNT_FAIL,
    READ_ACCOUNT_RESET,
    UPDATE_ACCOUNT_REQUEST,
    UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_FAIL,
} from '../constants/accountConstants';

export const accountSignIn = (credentials) => async (dispatch) => {
    try {
        dispatch({
            type: SIGN_IN_REQUEST
        });
        // Do things here to sign in
        // test
        const { email, password } = credentials;
        const tempAccount = localStorage.getItem('accountProfile')
            ? JSON.parse(localStorage.getItem('accountProfile'))
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

export const accountSignOut = () => async (dispatch) => {
    dispatch({
        type: SIGN_OUT_REQUEST
    });
    //Do things here to sign out
    localStorage.removeItem('accountInfo');
    dispatch({
        type: SIGN_IN_RESET,
    });
    dispatch({
        type: READ_ACCOUNT_RESET,
    });
    dispatch({
        type: SIGN_OUT_SUCCESS,
    });
};

export const accountCreate = (account) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_ACCOUNT_REQUEST
        });
        //Do things here to create account
        // test
        localStorage.setItem('accountProfile', JSON.stringify(account));
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
            payload: 'Failed to create account',
        });
    }
};

export const accountRead = () => async (dispatch) => {
    try {
        dispatch({
            type: READ_ACCOUNT_REQUEST
        });
        //Do things here to create account
        // test
        const { firstName, lastName, email } = JSON.parse(localStorage.getItem('accountProfile'));
        dispatch({
            type: READ_ACCOUNT_SUCCESS,
            payload: {
                firstName,
                lastName,
                email
            },
        });
    } catch (error) {
        dispatch({
            type: READ_ACCOUNT_FAIL,
            payload: 'Failed to read account',
        });
    }
};

export const accountUpdate = (accountInfo) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_ACCOUNT_REQUEST
        });
        //Do things here to create account
        // test
        if (accountInfo.password) {
            localStorage.setItem('accountProfile', JSON.stringify(accountInfo));
        } else {
            const tempAccount = localStorage.getItem('accountProfile')
                ? JSON.parse(localStorage.getItem('accountProfile'))
                : null;
            const updatedAccount = {
                ...accountInfo,
                password: tempAccount.password,
            }
            localStorage.setItem('accountProfile', JSON.stringify(updatedAccount));
        }
        dispatch({
            type: UPDATE_ACCOUNT_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_ACCOUNT_FAIL,
            payload: 'Failed to update account',
        });
    }
};