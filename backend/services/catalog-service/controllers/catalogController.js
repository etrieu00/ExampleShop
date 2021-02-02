import asynch from 'express-async-handler';
import Product from '../models/productModels.js';

const createProduct = asynch(async (req, res) => {
    const {
        name,
        images,
        description,
        categories,
        price,
        countStock,
    } = req.body;
    const product = await new Product({
        name: name || '',
        images: images || [],
        description: description || '',
        categories: categories || [],
        price: price || 0,
        countStock: countStock || 0,
    });
    const createdProduct = await product.save();
    if (createdProduct) {
        res.status(201)
            .json(createdProduct);
    } else {
        res.status(404)
            .json({ message: 'Failed to create product' });
    }
});

const readProducts = asynch(async (_, res) => {
    const products = await Product.find({});
    res.json(products);
});

const readProductById = asynch(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.status(200)
            .json(product);
    } else {
        res.status(404)
            .json({ message: 'Product not found' });
    }
});

const updateProduct = asynch(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const {
        name,
        images,
        description,
        categories,
        price,
        countStock,
    } = req.body;
    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.images = images;
        product.categories = categories;
        product.countStock = countStock;
        const updatedProduct = await product.save();
        res.status(201)
            .json(updatedProduct);
    } else {
        res.status(404)
            .json({ message: 'Product not found' });
    }
});

const deleteProduct = asynch(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        const removedProduct = await product.remove();
        res.status(202)
            .json(removedProduct);
    } else {
        res.status(404)
            .json({ message: 'Product not found' });
    }
});

export { createProduct, readProducts, readProductById, updateProduct, deleteProduct };