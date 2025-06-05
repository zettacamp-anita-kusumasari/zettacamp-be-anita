/**
 * This section handles the MongoDB connection using Mongoose.
 *
 * The `connectDB` function is defined as an asynchronous function
 * to attempt connecting the app to MongoDB. The database URI is
 * loaded from the environment variable `MONGODB_URI`, or falls back
 * to a default local MongoDB URI if not provided.
 *
 * If the connection is successful, connection details will be logged.
 * If the connection fails, an error message will be logged and
 * the application process will exit.
 *
 * This file exports `connectDB` so it can be used in other parts of the app,
 * such as during server initialization.
 */

// *************** IMPORT LIBRARY ***************
const mongoose = require('mongoose');

// *************** CONNECT TO MONGODB ***************
const connectDB = async () => {
  try {
    // Get MongoDB URI from environment variable or fallback to localhost
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-db-name';

    // Connect to MongoDB without deprecated options
    const conn = await mongoose.connect(mongoURI);

    // Log host and database name on successful connection
    console.log(`MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`);
  } catch (error) {
    // Log error if connection fails
    console.error('MongoDB connection failed:', error.message);
    // Exit the app process with failure
    process.exit(1);
  }
};

// *************** EXPORT FUNCTION ***************
module.exports = connectDB;
