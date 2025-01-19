const monoogse = require("mongoose");

const userSchema = monoogse.Schema({
  fullname: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: String,
});

module.exports = monoogse.model("user", userSchema);
