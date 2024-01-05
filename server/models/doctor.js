const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name:{
        type:String,
        required: true,
        trim: true,
    },
    gender:{
        type: String,
        required: true,
        enum: ["M","F"] //male,female,trans,prefer not to say
    },
    specialisation: {
        type: [String],
        enum: ["Anxiety Disorders","Depression","PTSD","OCD","Bipolar Disorder","Schizophrenia","Eating Disorders","Substance Use Disorders","ADHD"],
        required: true,
    },
    contact: {
        type: String,
        unique:true,
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