import {
    SHOPPING_ADD_REQUEST,
    SHOPPING_ADD_SUCCESS,
    SHOPPING_ADD_FAIL,
    SHOPPING_READ_REQUEST,
    SHOPPING_READ_SUCCESS,
    SHOPPING_READ_FAIL,
    SHOPPING_READ_RESET,
    SHOPPING_REMOVE_REQUEST,
    SHOPPING_REMOVE_SUCCESS,
    SHOPPING_REMOVE_FAIL,
    SHOPPING_REMOVE_ALL_REQUEST,
    SHOPPING_REMOVE_ALL_SUCCESS,
    SHOPPING_REMOVE_ALL_FAIL,
    READ_SHIPPING_INFO_REQUEST,
    READ_SHIPPING_INFO_SUCCESS,
    READ_SHIPPING_INFO_FAIL,
    UPDATE_SHIPPING_INFO_REQUEST,
    UPDATE_SHIPPING_INFO_SUCCESS,
    UPDATE_SHIPPING_INFO_FAIL,
} from '../constants/shoppingConstants';

export const addToCartReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOPPING_ADD_REQUEST:
            return {
                loading: true,
            };
        case SHOPPING_ADD_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case SHOPPING_ADD_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const readFromCartReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOPPING_READ_REQUEST:
            return {
                loading: true,
            };
        case SHOPPING_READ_SUCCESS:
            return {
                loading: false,
                success: true,
                cart: [...action.payload],
            };
        case SHOPPING_READ_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case SHOPPING_READ_RESET:
            return {
                cart: [],
            };
        default:
            return state;
    }
};

export const removeFromCartReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOPPING_REMOVE_REQUEST:
            return {
                loading: true,
            };
        case SHOPPING_REMOVE_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case SHOPPING_REMOVE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const removeAllFromCartReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOPPING_REMOVE_ALL_REQUEST:
            return {
                loading: true,
            };
        case SHOPPING_REMOVE_ALL_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        case SHOPPING_REMOVE_ALL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const readShippingInformationReducer = (state = { shippingInfo: {} }, action) => {
    switch (action.type) {
        case READ_SHIPPING_INFO_REQUEST:
            return {
                loading: true,
            };
        case READ_SHIPPING_INFO_SUCCESS:
            return {
                loading: false,
                shippingInfo: action.payload,
            };
        case READ_SHIPPING_INFO_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const updateShippingInformationReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SHIPPING_INFO_REQUEST:
            return {
                loading: true,
            };
        case UPDATE_SHIPPING_INFO_SUCCESS:
            return {
                success: true,
                loading: false,
            };
        case UPDATE_SHIPPING_INFO_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};