const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: null
    }
});

module.exports = new mongoose.model("User", userSchema);