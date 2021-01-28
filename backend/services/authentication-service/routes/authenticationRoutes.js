import express from 'express';
import {
    createUser,
    readUser,
    updateUser,
    deleteUser,
} from '../controllers/authenticationController.js';
import {
    authenticateUser,
} from '../utils/authentication.js';
const router = express.Router();
router.route('/')
    .post(createUser)
    .put(authenticateUser, updateUser);
router.route('/login')
    .post(readUser);
router.route('/:id')
    .delete(authenticateUser, deleteUser);
export default router;