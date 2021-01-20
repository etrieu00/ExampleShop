import products from './products.js';
import Product from '../database/models/productModels.js';

const populatePseudoData = async () => {
    try {
        await Product.deleteMany();
        const createdProducts = await Product.insertMany(products);
    } catch (error) {
        console.log('Failed to insert products');
    }
};

const destroyPseudoData = async () => {
    try {
        await Product.deleteMany();
    } catch (error) {
        console.log('Failed to insert products');
    }
};

export { populatePseudoData, destroyPseudoData };