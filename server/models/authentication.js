const mongoose = require('mongoose');
const User = require('./user.js');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Auth', authSchema);