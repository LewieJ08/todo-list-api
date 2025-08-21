const User = require("../models/user")

const getUsers = async (req, res, next) => {}

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
        next(error);
    }
}


const loginUser = async () => {}

module.exports = {getUsers, createUser, loginUser};