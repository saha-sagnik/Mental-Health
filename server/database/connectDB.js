require('dotenv').config();
const mongoose = require("mongoose");
async function connectToMongoDB() {
    try {
      mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
module.exports = connectToMongoDB;