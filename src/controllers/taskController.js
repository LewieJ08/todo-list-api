const Task = require("../models/task");

const getAllTasks = async (req, res, next) => {
    try {  
        let tasks;

        if (!req.query.status) {
            tasks = await Task.find({_userId: req.user._id});
        } else {
            tasks = await Task.find({_userId: req.user._id, status: req.query.status});
        }
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

const updateTask = async (req, res, next) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, {...req.body, updatedAt: new Date()});
        const task = await Task.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Task updated successfully.",
            data: task
        });
    } catch(error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch(error) {
        next(error);
    }
}


module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask};
