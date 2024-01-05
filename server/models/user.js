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
        trim: true,
    },
    photo:{
        type: String
    },
    gender:{
        type: String,
        enum: ["M","F","T","N"] //male,female,trans,prefer not to say
    },
    ageGroup:{
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