import express from 'express';
import {
    createProduct,
    readProducts,
    readProductById,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();
router.route('/')
    .get(readProducts)
    .post(createProduct);
router.route('/:id')
    .get(readProductById)
    .put(updateProduct)
    .delete(deleteProduct);

export default router;