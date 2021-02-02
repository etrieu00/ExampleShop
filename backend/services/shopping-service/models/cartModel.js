import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productCount: {
        type: Number,
        required: true,
    },
});

const cartSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    cart: [productSchema]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;