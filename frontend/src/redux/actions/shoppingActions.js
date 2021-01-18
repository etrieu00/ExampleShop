import products from '../../data/products';
import {
    SHOPPING_ADD,
    SHOPPING_REMOVE,
    SHOPPING_REMOVE_ALL,
    READ_SHIPPING_INFO_REQUEST,
    READ_SHIPPING_INFO_SUCCESS,
    READ_SHIPPING_INFO_FAIL,
    UPDATE_SHIPPING_INFO_REQUEST,
    UPDATE_SHIPPING_INFO_SUCCESS,
    UPDATE_SHIPPING_INFO_FAIL,
} from '../constants/shoppingConstants';

export const addProductToCart = (id, quantity) => async (dispatch, getState) => {
    // Get data from actual back end
    const product = products[id - 1];
    dispatch({
        type: SHOPPING_ADD,
        payload: {
            id: product._id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
        }
    });
    //Add to cart on actual back end
    localStorage.setItem('shoppingCart', JSON.stringify(getState().shoppingCart.cart));
};

export const removeProductFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: SHOPPING_REMOVE,
        payload: id,
    })
    // Remove from actual backend
    localStorage.setItem('shoppingCart', JSON.stringify(getState().shoppingCart.cart));
};

export const removeAllProductsFromCart = () => async (dispatch) => {
    dispatch({
        type: SHOPPING_REMOVE_ALL,
    });

    // Remove from actual backend
    localStorage.removeItem('shoppingCart');
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