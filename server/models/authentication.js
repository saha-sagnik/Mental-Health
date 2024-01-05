const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator'); // Assuming you use a validation library just do [npm install validator]

const authSchema = new Schema({
   
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Invalid email format',
        },
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('Auth', authSchema);
