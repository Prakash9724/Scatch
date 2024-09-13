const express = require("express");
const router = express.Router();
const {registerUser,loginUser} = require("../controllers/authCantroller")
const bcrypt = require('bcrypt');


router.get("/", function (req, res) {
  res.send("hey it's Working");
});

router.post("/register",registerUser);

router.post("/login",loginUser);

module.exports = router;
