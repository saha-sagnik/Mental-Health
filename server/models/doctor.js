const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name:{
        type:String,
        required: true,
        trim: true,
    },
    specialisation: {
        type: Number,
        enum: [1,2,3,4,5,10],
        required: true,
    },
    contact: {
        type: String,
        required: true,
        length: 10
    },
    availability: {
        days: [String],
        startTime: String, 
        endTime: String,   
    },
});

module.exports = mongoose.model('Doctor',doctorSchema);