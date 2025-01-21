const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner-product");

router.get("/", (req, res) => {
  res.send("owners");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async(req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(400).send("Owner already exists");
    }
    let { fullname, email, password} = req.body;
    let owner = await ownerModel.create({ fullname, email, password });
    res.status(201).send(owner);
  });
}

module.exports = router;
