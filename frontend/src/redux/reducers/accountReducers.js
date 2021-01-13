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


export const accountSignInReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                loading: true,
            };
        case SIGN_IN_SUCCESS:
            return {
                loading: false,
                accountLogin: action.payload
            };
        case SIGN_IN_RESET:
            return {
                loading: false,
                accountLogin: null,
            };
        case SIGN_IN_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const accountSignOutReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_OUT_REQUEST:
            return {
                loading: true,
            };
        case SIGN_OUT_SUCCESS:
            return {
                loading: false,
            };
        default:
            return state;
    }
};

export const accountCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ACCOUNT_REQUEST:
            return {
                loading: true,
            };
        case CREATE_ACCOUNT_SUCCESS:
            return {
                loading: false,
                accountLogin: action.payload
            };
        case CREATE_ACCOUNT_FAIL:
            return {
                error: action.payload
            };
        default:
            return state;
    }
};