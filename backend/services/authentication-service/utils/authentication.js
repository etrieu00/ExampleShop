import jwt from 'jsonwebtoken';
import asynch from 'express-async-handler';
import User from '../database/models/userModel.js';

export const authenticateUser = asynch(async (req, res, next) => {
    let token;
    if (req.headers.authorization
        && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not Authorized, Token Failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not Authorized, No Token');
    }
});