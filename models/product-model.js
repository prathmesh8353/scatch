const monoogse = require("mongoose");

const productSchema = monoogse.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcol: String,
  panelcolor: String,
  textcolor: String,
});

module.exports = monoogse.model("product", productSchema);
