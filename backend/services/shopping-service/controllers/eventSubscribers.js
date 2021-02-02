import Cart from '../models/cartModel.js'
import {
    Client,
    CREATE_CART
} from '../utils/redisPubSub.js';

const CartEvent = () => {
    Client.on("message", (_, message) => {
        Cart.create({
            userId: JSON.parse(message).id,
            cart: [],
        });
    });

    Client.subscribe(CREATE_CART);
};

export default CartEvent;