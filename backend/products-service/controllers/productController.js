import asynch from 'express-async-handler';
import Product from '../database/models/productModels';

const createProduct = asyncHandler(async (req, res) => {
    const {
        name,
        images,
        description,
        categories,
        price,
        inStock,
        countStock,
    } = req.body;
    const product = await new Product({
        name: name || '',
        images: images || [],
        description: description || '',
        categories: categories || [],
        price: price || 0,
        inStock: inStock || false,
        countStock: countStock || 0,
    });
    const createdProduct = await product.save();
    if (createdProduct) {
        res.status(201).json({
            createdProduct,
            message: 'Product created'
        });
    } else {
        res.status(404);
        throw new Error('Failed to create product');
    }
});

const readProducts = asynch(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const readProductById = asynch(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const {
        name,
        images,
        description,
        categories,
        price,
        inStock,
        countStock,
    } = req.body;
    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.images = images;
        product.categories = categories;
        product.inStock = inStock;
        product.countStock = countStock;
        const updatedProduct = await product.save();
        res.status(201).json({
            updatedProduct,
            message: "Product has been updated"
        });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        const removedProduct = await product.remove();
        res.json({
            removedProduct,
            message: 'Product removed'
        });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

export { createProduct, readProducts, readProductById, updateProduct, deleteProduct };