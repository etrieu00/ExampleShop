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
    shoppingCartReducer
} from './reducers/shoppingReducers'

const reducer = combineReducers({
    productsList: productListReducer,
    productCreate: productCreateReducer,
    productRead: productReadReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    shoppingCart: shoppingCartReducer,
    accountLogin: accountSignInReducer,
    accountSignOut: accountSignOutReducer,
    accountCreate: accountCreateReducer,
    accountProfile: accountReadReducer,
    accountProfileUpdate: accountUpdateReducer,
});

const cartFromStorage = localStorage.getItem('shoppingCart')
    ? JSON.parse(localStorage.getItem('shoppingCart'))
    : [];
const accountFromStorage = localStorage.getItem('accountInfo')
    ? JSON.parse(localStorage.getItem('accountInfo'))
    : null;
const accountProfileFromStorage = localStorage.getItem('accountProfile')
    ? JSON.parse(localStorage.getItem('accountProfile'))
    : null;
const initialState = {
    shoppingCart: { cart: cartFromStorage },
    accountLogin: { accountLogin: accountFromStorage },
    accountProfile: { accountProfile: accountProfileFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;