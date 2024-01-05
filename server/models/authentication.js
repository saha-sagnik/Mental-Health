const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    UserID:{
        type:String,
        required: true,
        trim: true,
        unique: true
    },
    emailID:{
        type:String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true

    },
    passwrd:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Auth',authSchema);