// *************** IMPORT CORE ***************
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// *************** Load environment variables from .env file
dotenv.config();

// *************** IMPORT CORE ***************
const app = express();
const PORT = process.env.PORT || 4000;

// *************** Middleware to parse incoming JSON requests
app.use(express.json());

// *************** Connect to MongoDB using Mongoose with connection string from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

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
