const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique:true
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
    phone:{
        type: String,
        required: true,
        unique:true,
        length: 10
    },
    gender:{
        type: String,
        required: true,
        enum: ["M","F","T","N"] //male,female,trans,prefer not to say
    },
    age:{
        type: Number,
        required: true,
    },
    diagnosis: {
        type: [String],
        enum: ["Anxiety Disorders","Depression","PTSD","OCD","Bipolar Disorder","Schizophrenia","Eating Disorders","Substance Use Disorders","ADHD"],
        required: true,
    },
    category:{
        type: String,
        required: true,
        enum: ["Couple","Teenager","Elderly","Personal"]
    },
});

module.exports = mongoose.model('User', userSchema);