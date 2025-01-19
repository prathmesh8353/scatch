const express = require("express");
const router = express.Router();

const Owner = require("../models/owner-product");

router.get("/", (req, res) => {
  res.send("owners");
});

module.exports = router;
