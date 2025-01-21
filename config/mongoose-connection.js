const monoogse = require("mongoose");
const dbgr = require("debug")("development:mongoose-connection");
const config = require("config"); //config checks for the environment and loads the appropriate configuration file e.g. development.json, production.json, etc.

monoogse
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(() => {
    dbgr("Connected to database");
  })
  .catch((err) => {
    dbgr("Error connecting to database", err);
  });

module.exports = monoogse.connection;
