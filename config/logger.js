const { createLogger, transports, format } = require("winston");
require("winston-mongodb");
const logger = createLogger({
  transports: [
    new transports.File({
      filename: "info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.MongoDB({
      level: "error",
      db: "mongodb+srv://taskapp:Vedant@300@cluster0.hdkoi.mongodb.net/myloggerapp?retryWrites=true&w=majority",
      options: {
        useUnifiedTopology: true,
      },
      collection: "mylogs",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
