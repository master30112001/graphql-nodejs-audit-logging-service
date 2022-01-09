const { AuditLog } = require("../models/AuditLog");

const resolvers = {
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

module.exports = { resolvers };
