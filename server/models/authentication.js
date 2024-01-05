const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator'); // Assuming you use a validation library just do [npm install validator]

const authSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
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
        required: true,
    },
});

module.exports = mongoose.model('Auth', authSchema);
