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
    diagnosis: {
        type: Number,
        enum: [1,2,3,4,5,10],
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
        enum: ["Couple","Teenager","Elderly","Personal"]
    },
});

module.exports = mongoose.model('User', userSchema);