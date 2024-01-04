const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    name:{
        type:String,
        required: true,
        trim: true,
    },
    DOB:{
        type: Date,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    score:{
        type: Number,
        required: true,
        default: -1
    },
    category:{
        type: String,
        required: true,
        enum: ["Couple","Teenager","Old","Personal"]
    },
});

module.exports = mongoose.model('User', userSchema);