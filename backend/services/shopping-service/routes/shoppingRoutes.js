import express from 'express';
import {
    authenticateUser,
} from '../utils/authentication.js';
import {
    createCart,
    readCart,
    updateCart,
    deleteCart,
} from '../controllers/cartController.js';
const router = express.Router();

router.route('/')
    .post(authenticateUser, createCart)
    .get(authenticateUser, readCart)
    .put(authenticateUser, updateCart)
    .delete(authenticateUser, deleteCart);

export default router;