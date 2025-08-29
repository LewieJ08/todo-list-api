const User = require("../models/user");

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                success: false,
                error: "Missing authorization token"
            });
        }

        const token = (req.headers.authorization).split(" ")[1];
        const user = await User.findOne({token: token});

        if (!user) {
            return res.status(401).json({
                success: false,
                message: `Invalid authorization token`
            });
        }

        req.user = user;
        next();
    } catch(error) {
        next(error);
    }
}