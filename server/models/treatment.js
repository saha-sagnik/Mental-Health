const mongoose = require('mongoose');
const User = require('./user.js');
const Doctor = require('./doctor.js');
const Schema = mongoose.Schema;

const treatmentSchema = new Schema({
    userID:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    doctorID: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    diagnosis: {
        type: Number,
        enum: [1,2,3,4,5,10],
        required: true,
    },
    day:{
        type: String,
        required: true,
    },
    apptTimings: {
        startTime: String, 
        endTime: String,   
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: null
    },
    personalReview:{
        type: String,
        trim: true,
        default: null
    }
});

module.exports = mongoose.model('Treatment',treatmentSchema);