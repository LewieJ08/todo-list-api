const User = require("../models/user")

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users successfully fetched.",
            data: users
        });
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully.",
            data: user
        });
    } catch(error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                error: `User with username: ${req.body.username} already exists.`
            });
        } else {
            next(error);
        }
    }
}


const loginUser = async () => {}

module.exports = {getUsers, createUser, loginUser};