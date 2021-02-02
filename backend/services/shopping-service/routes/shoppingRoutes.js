import express from 'express';
import {
    authenticateUser,
} from '../utils/authentication.js';
import {
    readCart,
    updateCart,
    deleteCart,
} from '../controllers/cartController.js';
const router = express.Router();

router.route('/')
    .get(authenticateUser, readCart)
    .put(authenticateUser, updateCart)
    .delete(authenticateUser, deleteCart);

export default router;