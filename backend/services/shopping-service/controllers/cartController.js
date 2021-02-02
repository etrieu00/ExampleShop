import asynch from 'express-async-handler';
import Cart from '../models/cartModel.js';

const readCart = asynch(async (req, res) => {
    const cart = await Cart.findOne({ userId: req._id });
    if (cart) {
        res.status(200)
            .json(cart.cart);
    } else {
        res.status(401)
            .json({ message: 'Failed to read user cart' });
    }
});

const updateCart = asynch(async (req, res) => {
    const cart = await Cart.findOne({ userId: req._id });
    if (cart) {
        const index = cart.cart
            .findIndex(({ productId }) => productId === req.body.productId);
        if (index === -1) {
            cart.cart = [...cart.cart, req.body];
        } else {
            if (req.body.productCount === 0) {
                const newCart = cart.cart
                    .filter(({ productId }) => productId !== req.body.productId);
                cart.cart = newCart;
            } else {
                cart.cart[index] = req.body;
            }
        }
        const updatedCart = await cart.save();
        res.status(202)
            .json(updatedCart.cart)
    } else {
        res.status(401)
            .json({ message: 'Failed add product to cart' });
    }
});

const deleteCart = asynch(async (req, res) => {
    const cart = await Cart.findOne({ userId: req._id });
    if (cart) {
        cart.cart = [];
        await cart.save();
        res.status(202).json({ message: 'Cart emptied' });
    } else {
        res.status(403)
            .json({ message: 'Failed to delete cart' });
    }
});

export {
    readCart,
    updateCart,
    deleteCart,
};