// *************** IMPORT CORE ***************
require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/database');
const app = express();

// ****************** Retrieve the MONGODB_URI value from environment
const MONGODB_URI = process.env.MONGODB_URI;

// ****************** Setup PORT value from environment
const PORT = process.env.PORT || 3000;

// ****************** Calling the connectDB to connect the app with the MongoDB database
connectDB(MONGODB_URI);

// ****************** Enabling Express built-in middleware for parse JSON
app.use(express.json());

// ****************** Creating a GET route to sends a simple response
app.get('/', (req, res) => {
  res.send('Hello from Express + Mongoose!');
});

// ****************** Starting the server on the specified port and logging a message to the console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
