import axios from 'axios';
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

export const addProductToCart = (id, quantity) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SHOPPING_ADD_REQUEST,
        });
        const { data: productInfo } = await axios.get(`/api/v1/catalog/${id}`);
        const product = {
            name: productInfo.name,
            productId: productInfo._id,
            productPrice: productInfo.price,
            productCount: quantity,
        };
        const { accountLogin: { accountToken } } = getState();
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accountToken.token}`,
            }
        };
        const { data } = await axios.put(
            '/api/v1/shopping/cart',
            product,
            config
        );
        dispatch({
            type: SHOPPING_ADD_SUCCESS,
        });
        dispatch({
            type: SHOPPING_READ_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SHOPPING_ADD_FAIL,
            payload: error,
        });
    }
};

export const readCart = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SHOPPING_READ_REQUEST,
        });
        const { accountLogin: { accountToken } } = getState();
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accountToken.token}`,
            }
        };
        const { data } = await axios.get(
            '/api/v1/shopping/cart',
            config,
        );
        dispatch({
            type: SHOPPING_READ_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SHOPPING_READ_FAIL,
            payload: 'Failed to read cart',
        });
    }
};

export const removeProductFromCart = (item) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SHOPPING_REMOVE_REQUEST,
        });
        const { accountLogin: { accountToken } } = getState();
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accountToken.token}`,
            }
        };
        const product = {
            ...item,
            productCount: 0,
        };
        const { data } = await axios.put(
            '/api/v1/shopping/cart',
            product,
            config,
        );
        dispatch({
            type: SHOPPING_REMOVE_SUCCESS,
        });
        dispatch({
            type: SHOPPING_READ_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SHOPPING_REMOVE_FAIL,
            error: error,
        })
    }
};

export const removeAllProductsFromCart = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SHOPPING_REMOVE_ALL_REQUEST,
        });
        const { accountLogin: { accountToken } } = getState();
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accountToken.token}`,
            }
        };
        await axios.delete(
            '/api/v1/shopping/cart',
            config,
        );
        dispatch({
            type: SHOPPING_REMOVE_ALL_SUCCESS,
        });
        dispatch({
            type: SHOPPING_READ_RESET,
        });
    } catch (error) {
        dispatch({
            type: SHOPPING_REMOVE_ALL_FAIL,
        });
    }
};

export const readShippingInfo = () => async (dispatch) => {
    try {
        dispatch({
            type: READ_SHIPPING_INFO_REQUEST,
        });
        // test until backend is implemented
        const shippingInfo = localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : null;
        dispatch({
            type: READ_SHIPPING_INFO_SUCCESS,
            payload: shippingInfo,
        });
    } catch (error) {
        dispatch({
            type: READ_SHIPPING_INFO_FAIL,
            payload: 'Failed to read shipping info'
        });
    }
};

export const updateShippingInfo = (address) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_SHIPPING_INFO_REQUEST,
        });
        // test until backend is implemented
        localStorage.setItem('shippingInfo', JSON.stringify(address));
        dispatch({
            type: UPDATE_SHIPPING_INFO_SUCCESS,
        });
        dispatch({
            type: READ_SHIPPING_INFO_SUCCESS,
            payload: address,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_SHIPPING_INFO_FAIL,
            payload: 'Failed to update shipping info',
        });
    }
};