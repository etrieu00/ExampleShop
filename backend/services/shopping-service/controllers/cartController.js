import asynch from 'express-async-handler';
import Cart from '../database/models/cartModel.js';

const createCart = asynch(async (req, res) => {
    const cart = await Cart.create({
        userId: req._id,
        cart: [],
    });
    if (cart) {
        res.status(201);
    } else {
        res.status(401)
            .json({ message: 'Failed to create cart' });
    }
});

const readCart = asynch(async (req, res) => {
    const cart = Cart.findOne({ userId: req._id });
    if (cart) {
        res.status(200)
            .json(cart);
    } else {
        res.status(401)
            .json({ message: 'Failed to read user cart' });
    }
});

const updateCart = asynch(async (req, res) => {
    const cart = Cart.findOne({ userId: req._id });
    if (cart) {
        const index = cart.cart
            .findIndex(({ productId }) => productId === req.product.productId);
        if (index === -1) {
            cart.cart = [...cart.cart, req.product];
        } else {
            if (req.product.productCount === 0) {
                const newCart = cart.cart
                    .filter(({ productId }) => productId !== req.product.productId);
                cart.cart = newCart;
            } else {
                cart.cart[index] = req.product;
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
    const cart = Cart.findOne({ userId: req._id });
    if (cart) {
        cart.cart = [];
        await cart.save();
        res.status(200);
    } else {
        res.status(403)
            .json({ message: 'Failed to delete cart' });
    }
});

export {
    createCart,
    readCart,
    updateCart,
    deleteCart,
};