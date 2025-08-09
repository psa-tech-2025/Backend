const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    user: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;