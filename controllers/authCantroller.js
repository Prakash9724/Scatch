const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/genrateTokens");


module.exports.registerUser = async function (req, res) {
    try {
      let { fullname, email, password } = req.body;
  
      let user = await userModel.findOne({ email: email });
      if (user) return res.status(409).send("User already exists");
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      console.log("Hashed password: ", hashedPassword);  // Log the hashed password
  
      user = await userModel.create({
        fullname,
        email,
        password: hashedPassword,
      });
  
      const token = generateToken(user);
      res.cookie("token", token, { httpOnly: true });
      res.status(201).send("User created successfully");
  
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  
module.exports.loginUser = async function (req, res) {

    let {email, password} = req.body;

    let user = await userModel.findOne({email:email});
    if (!user) {
        console.log("User not found");
        return res.status(401).send("Invalid email or password");
      }

    
    bcrypt.compare(password, user.password, function (err,result){
      res.send(result);
        
    });


};