// package imports
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Query {
    hello: String!
    logs: [AuditLog!]!
  }

  type AuditLog {
    id: ID!
    createdAt: Date
    name: String!
    severity: String!
    component: String!
    context: String!
    message: String!
  }

  type Mutation {
    createLog(
      name: String!
      severity: String!
      component: String!
      context: String!
      message: String!
    ): AuditLog!
  }
`;

// exports
module.exports = { typeDefs };
