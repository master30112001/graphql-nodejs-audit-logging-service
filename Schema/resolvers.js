const { Cat } = require("../models/Cat");

const resolvers = {
  Query: {
    hello: () => "hi",
    cats: async () => await Cat.find(),
  },
  Mutation: {
    createCat: async (_, { name, severity, component, context, message }) => {
      const kitty = new Cat({
        name,
        severity,
        component,
        context,
        message,
        createdAt: Date.now(),
      });

      await kitty.save();
      return kitty;
    },
  },
};

module.exports = { resolvers };
