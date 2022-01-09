// packages
// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

// other
const logger = require("./config/logger");
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
    "mongodb+srv://taskapp:Vedant%40300@cluster0.hdkoi.mongodb.net/myloggerapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  app.listen({ port: 3000 }, () =>
    console.log(` Server ready at http://localhost:3000${server.graphqlPath}`)
  );
};

startServer();

// -----------------------------------------
/*
1. graphql api + with mongodb connectivity
2. 



*/

// app.use(express.json());

// app.use((req, res, next) => {
//   logger.info(req.body);
//   let oldSend = res.send;

//   res.send = function (data) {
//     logger.info(JSON.parse(data));
//     oldSend.apply(res, arguments);
//   };
//   next();
// });

// const port = 3000;

// app.listen(port, () => {
//   console.log("listening", port);
//   logger.log("error", `server up and running on PORT : ${port}`);
// });
