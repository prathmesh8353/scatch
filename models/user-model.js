const monoogse = require("mongoose");

monoogse.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = monoogse.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = monoogse.model("user", userSchema);
