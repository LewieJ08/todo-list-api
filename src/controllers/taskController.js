const Task = require("../models/task");

const getAllTasks = (req, res, next) => {
    // pass
}

const getTask = (req, res, next) => {
    // pass
}

const createTask = async (req, res, next) => {
    try {
        const task = new Task({_userId: req.user._id, ...req.body});
        await task.save()
        res.status(201).json({
            success: true,
            message: `Task created successfully by ${req.user.username}`,
            data: task
        })
    } catch(error) {
        next(error);
    }
}

const updateTask = (req, res, next) => {
    //pass
}

const deleteTask = (req, res, next) => {
    //pass
}


module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask}
