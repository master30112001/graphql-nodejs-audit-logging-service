const { AuditLog } = require("../models/AuditLog");

// GraphQLDate is for scalar Date type
const GraphQLDate = require("@parameter1/graphql-type-date");

const resolvers = {
  Date: GraphQLDate,
  Query: {
    hello: () => "hi",
    logs: async () => await AuditLog.find(),
  },
  Mutation: {
    createLog: async (_, { name, severity, component, context, message }) => {
      const latestlog = new AuditLog({
        name,
        severity,
        component,
        context,
        message,
        createdAt: Date.now(),
      });

      await latestlog.save();
      return latestlog;
    },
  },
};

// exports
module.exports = { resolvers };
