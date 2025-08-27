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
        required: true,
        enum: ["pending","in-progress","done"],
        default: "pending"
    }
});

module.exports = new mongoose.model("Task", taskSchema);