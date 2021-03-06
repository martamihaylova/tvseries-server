const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/
    },
    password: {
        type: String,
        required: true
    },
    shows: [],
});

module.exports = mongoose.model('Users', userSchema);