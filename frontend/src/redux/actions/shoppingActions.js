import products from '../../data/products';
import {
    SHOPPING_ADD,
    SHOPPING_REMOVE,
    SHOPPING_REMOVE_ALL,
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
    localStorage.setItem('shoppingCart', JSON.stringify([]));
};