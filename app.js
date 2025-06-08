// *************** IMPORT CORE ***************
require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/database');
const app = express();

// ****************** Retrieve the MONGODB_URI value from environment
const MONGODB_URI = process.env.MONGODB_URI;

// ****************** Setup PORT value from environment
const PORT = process.env.PORT || 4000;

// ****************** Calling the connectDB to connect the app with the MongoDB database
connectDB(MONGODB_URI);

// *************** Import Apollo Server middleware for Express
const { ApolloServer } = require('apollo-server-express');

// *************** Import GraphQL schema definitions
const typeDefs = require('./graphql/schema');

// *************** Import resolvers for schema
const resolvers = require('./graphql/resolvers');

// *************** Async function to start Apollo Server and integrate it with Express app
async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  // *************** Start the Apollo server
  await server.start();

  // *************** Apply Apollo middleware to Express app
  server.applyMiddleware({ app });

  // *************** Start the Express server
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// *************** Invoke the function to launch server
startApolloServer();
