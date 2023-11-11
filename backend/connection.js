const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.fme54y7.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log('connected to mongodb');
})






const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, // Increase timeout period to 5 seconds
  socketTimeoutMS: 60000, // Increase socket timeout to 45 seconds
};

// const mongodbUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@MONGODB_SERVER_IP:27017/chatdatabase?retryWrites=true&w=majority&ssl=true`;

// mongoose.connect(mongodbUri, options)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });











// mongoose.connect(
// 	process.env.DB,
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	},
// 	() => {
// 		console.log('connected to database myDb ;)');
// 	}
// );