import axios from 'axios';
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
        const { email, password } = credentials;
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        const { data } = await axios.post(
            '/api/v1/users/login',
            { email, password },
            config
        );
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('accountToken', JSON.stringify(data));
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
    localStorage.removeItem('accountToken');
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
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        const { email, password } = account;
        const { data } = await axios.post(
            '/api/v1/users',
            { email, password },
            config
        );
        dispatch({
            type: CREATE_ACCOUNT_SUCCESS,
            payload: data,
        });
        localStorage.setItem('accountToken', JSON.stringify(data));
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data,
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
        //Do things here to read account
        // test
        const test = {
            firstName: 'eric',
            lastName: 't',
            email: 'eh@gmail.com'
        }
        dispatch({
            type: READ_ACCOUNT_SUCCESS,
            payload: test,
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
        // Do nothing for now
        console.log('account updated');
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