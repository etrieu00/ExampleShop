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

export const shoppingCartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case SHOPPING_ADD:
            const product = action.payload;
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                return {
                    cart: state.cart.map(item => {
                        if (item.id === existingItem.id) {
                            return {
                                ...item,
                                quantity: item.quantity + product.quantity
                            };
                        } else {
                            return item;
                        }
                    })
                };
            } else {
                return {
                    cart: [...state.cart, product]
                }
            }
        case SHOPPING_REMOVE:
            return {
                cart: state.cart.filter(product => product.id !== action.payload),
            };
        case SHOPPING_REMOVE_ALL:
            return {
                cart: [],
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
            console.log(action.payload)
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