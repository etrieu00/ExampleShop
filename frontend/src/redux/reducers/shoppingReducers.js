import {
    SHOPPING_ADD,
    SHOPPING_REMOVE,
    SHOPPING_REMOVE_ALL,
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