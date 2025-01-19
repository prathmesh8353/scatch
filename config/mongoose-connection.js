const monoogse = require("mongoose");

monoogse
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

module.exports = monoogse.connection;
