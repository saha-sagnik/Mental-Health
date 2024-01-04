const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
      await mongoose.connect('mongodb+srv://sbmunnu:munnu@mongo.mzaad3h.mongodb.net/wallmart?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
module.exports = connectToMongoDB;