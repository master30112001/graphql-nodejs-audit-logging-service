// packages
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

// other
const { resolvers } = require("./Schema/resolvers");
const { typeDefs } = require("./Schema/typeDefs");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  await mongoose.connect(
    "mongodb+srv://taskapp:<password></password>@cluster0.hdkoi.mongodb.net/myloggerapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  app.listen({ port: 3000 }, () =>
    console.log(` Server ready at http://localhost:3000${server.graphqlPath}`)
  );
};

startServer();
