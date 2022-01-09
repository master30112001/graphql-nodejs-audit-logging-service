const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
  }
  type Cat {
    id: ID!
    name: String!
  }
  type Mutation {
    createCat(name: String!): Cat!
  }
`;

module.exports = { typeDefs };

// the 'Cat!' after the semicolon in typeMutation after CreateCat statement is for
// returning a value... here we are returning the Cat Type(object)
