import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }],
    description: {
        type: String,
        required: true,
    },
    categories: [{
        type: String,
    }],
    price: {
        type: Number,
        required: true,
    },
    countStock: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;