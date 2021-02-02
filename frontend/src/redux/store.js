import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    productListReducer,
    productCreateReducer,
    productReadReducer,
    productUpdateReducer,
    productDeleteReducer,
} from './reducers/productReducers';
import {
    accountSignInReducer,
    accountSignOutReducer,
    accountCreateReducer,
    accountReadReducer,
    accountUpdateReducer,
} from './reducers/accountReducers';
import {
    addToCartReducer,
    readFromCartReducer,
    readShippingInformationReducer,
    removeFromCartReducer,
    removeAllFromCartReducer,
    updateShippingInformationReducer,
} from './reducers/shoppingReducers'

const reducer = combineReducers({
    productsList: productListReducer,
    productCreate: productCreateReducer,
    productRead: productReadReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    addtoCart: addToCartReducer,
    readFromCart: readFromCartReducer,
    removeFromCart: removeFromCartReducer,
    removeAllFromCart: removeAllFromCartReducer,
    accountLogin: accountSignInReducer,
    accountSignOut: accountSignOutReducer,
    accountCreate: accountCreateReducer,
    accountProfile: accountReadReducer,
    accountProfileUpdate: accountUpdateReducer,
    shippingInfo: readShippingInformationReducer,
    shippingInfoUpdate: updateShippingInformationReducer,
});

const tokenFromStorage = localStorage.getItem('accountToken')
    ? JSON.parse(localStorage.getItem('accountToken'))
    : null;
const shippingInfoFromStorage = localStorage.getItem('shippingInfo')
    ? null
    // ? JSON.parse(localStorage.getItem('shippingInfo'))
    : null;

const initialState = {
    accountLogin: { accountToken: tokenFromStorage },
    shippingInfo: { shippingInfo: shippingInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;