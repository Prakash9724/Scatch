const express = require("express");
const router = express.Router();
const ownerModal = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModal.find();
    if (owners.length > 1) {
      return res
        .send(503)
        .send("You don't have permission to create new owner");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModal.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
    
    
  });
}

router.get("/", function (req, res) {
  res.send("hey it's Working");
});

module.exports = router;
