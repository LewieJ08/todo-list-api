const Task = require("../models/task");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
    try {
        if (!(mongoose.Types.ObjectId.isValid(req.params.id))) {
            return res.status(400).json({
                success: false,
                error: "Invalid Task ID"
            });
        }

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                error: `Task with ID: ${req.params.id} does not exist`
            });
        } else if (!(task._userId).equals(req.user._id)) {
            return res.status(401).json({
                success: false,
                error: `User, ${req.user.username} does not have access to task with ID: ${req.params.id}`
            });
        }
    } catch(error) {
        next(error);
    }

    next();
}