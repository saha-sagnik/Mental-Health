const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        unique: true,
        trim: true,
    },
    photo:{
        type: String
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    gender:{
        type: String,
        enum: ["M","F","T","N"] //male,female,trans,prefer not to say
    },
    age:{
        type: String,
    },
    diagnosis: {
        type: [String],
        enum: ["Anxiety Disorders","Depression","PTSD","OCD","Bipolar Disorder","Schizophrenia","Eating Disorders","Substance Use Disorders","ADHD"],
    },
    category:{
        type: String,
        enum: ["Couple","Teenager","Elderly","Personal"]
    },
});

module.exports = mongoose.model('User', userSchema);