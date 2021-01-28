import asynch from 'express-async-handler';
import generateJWT from '../utils/generateJWT.js';
import User from '../database/models/userModel.js';

const createUser = asynch(async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
            .json({ message: 'User already exist' });
    }
    const user = await User.create({
        email,
        password,
    });
    if (user) {
        res.status(201)
            .json({
                token: generateJWT(user._id),
            });
    } else {
        res.status(400)
            .json({ message: 'Invalid user' });
    }
});

const readUser = asynch(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && (await user.matchPassword(password))) {
        res.status(200)
            .json({
                token: generateJWT(user._id),
            });
    } else {
        res.status(404)
            .json({ message: 'Invalid password or username' });
    }
});

const updateUser = asynch(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.email = req.body.email || user.email;
        user.password = req.body.password;
        const updateUser = await user.save();
        res.status(202)
            .json({
                token: generateToken(updateUser._id),
            });
    } else {
        res.status(404)
            .json({ message: 'User not found' });
    }
});

const deleteUser = asynch(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await User.remove(user);
        res.status(202);
    } else {
        res.status(404)
            .json({ message: 'Unable to delete user' });
    }
});

export {
    createUser,
    readUser,
    updateUser,
    deleteUser,
};