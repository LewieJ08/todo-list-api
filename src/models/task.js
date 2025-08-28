const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending","in-progress","done"],
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
    }
});

module.exports = new mongoose.model("Task", taskSchema);