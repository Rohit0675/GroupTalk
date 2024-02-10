const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URL, () => {
    console.log('connected to mongodb');
})






const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, 
  socketTimeoutMS: 60000, 
};

