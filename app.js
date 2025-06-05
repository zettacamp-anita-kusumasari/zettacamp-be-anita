// ****************** LOAD ENVIRONMENT VARIABLES ******************
// Using the 'dotenv' package to load environment variables (.env file)
// so that configurations like PORT and MongoDB URI can be used securely.
require('dotenv').config(); 

// Retrieve the MONGODB_URI value from environment variables after loading dotenv
const MONGODB_URI = process.env.MONGODB_URI;

// ****************** IMPORT MODULE ******************
// Importing Express as the web server framework
const express = require('express');

// Importing the MongoDB connection function from the database configuration file
const connectDB = require('./config/database');

// Creating an instance of the Express application
const app = express();

// ****************** SETUP PORT ******************
// Getting the PORT value from environment variables, or use 3000 as default
const PORT = process.env.PORT || 3000;

// ****************** CONNECT TO MONGODB ******************
// Calling the connectDB function to connect the app to the MongoDB database
// Ensure connectDB uses the MONGODB_URI that has been defined
connectDB(MONGODB_URI);

// ****************** MIDDLEWARE ******************
// Enabling Express built-in middleware to parse JSON in request bodies
app.use(express.json());

// ****************** ROUTE EXAMPLE ******************
// Creating a GET route at the root ('/') that sends a simple response
app.get('/', (req, res) => {
  res.send('Hello from Express + Mongoose!');
});

// ****************** START SERVER ******************
// Starting the server on the specified port and logging a message to the console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
