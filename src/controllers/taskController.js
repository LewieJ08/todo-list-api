const Task = require("../models/task");

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({_userId: req.user._id});
        res.status(200).json({
            success: true,
            message: `Tasks for ${req.user.username} fetched successfully`,
            data: tasks
        });
    } catch(error) {
        next(error);
    }
}

const getTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: `Task with ID: ${req.params.id} fetched successfully`,
            data: task
        });
    } catch(error) {
        next(error);
    }
}

const createTask = async (req, res, next) => {
    try {
        const task = new Task({_userId: req.user._id, ...req.body});
        await task.save();
        res.status(201).json({
            success: true,
            message: `Task created successfully by ${req.user.username}`,
            data: task
        });
    } catch(error) {
        next(error);
    }
}

const updateTask = (req, res, next) => {
    try {
        // TODO create a middleware to check access to task by ID for (update, get ,delete)
    } catch(error) {
        next(error);
    }
}

const deleteTask = (req, res, next) => {
    try {

    } catch(error) {
        next(error);
    }
}


module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask}
