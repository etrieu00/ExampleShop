import axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_READ_REQUEST,
    PRODUCT_READ_SUCCESS,
    PRODUCT_READ_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
} from '../constants/productConstants';

export const listAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get('/api/v1/catalog');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: 'Failed to fetch data',
        });
    }
}
export const createProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        });

        //Do things here to create the product

        // test
        const data = {
            _id: 999,
        };
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: 'Product create failed',
        });
    }
};

export const readProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_READ_REQUEST });
        const { data } = await axios.get(`/api/v1/catalog/${id}`);
        dispatch({
            type: PRODUCT_READ_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_READ_FAIL,
            payload: 'Product read failed',
        });
    }
};

export const updateProduct = (product) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        });

        //Do stuff here to update the product
        const data = product;

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: 'Product update failed',
        });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        });

        // Do stuff here to delete the product

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: 'Product delete failed',
        });
    }
};