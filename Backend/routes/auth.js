const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ThisisSecretWebToken";
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchusers")
//Route 1:create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password should be atleast 5 words").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false;
    //If there are error return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // Check whether user woth this email exists alraedy
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Sorry a user with this email alraedy exist" });
      }
      //Adding salt to making our password more strong and therby, preventing it from threats.
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        }
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      success=true;
      res.json({ success,authtoken });
      //res.json(user)
    } catch (error) {
      //If error occured the message will get displayed
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);
//Route 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success=false;
    //If there are error return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      
      return res.status(400).json({errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        
        return res
          .status(400)
          .json({error: "Please try with correct Id credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success=false
        return res.status(400).json({success,error: "Please try with correct password credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success= true;
      res.json({success, authtoken });
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internel server error");
    }
  }
);
//Route 3: To fetch user data by using token: POST "/api/auth/getuser".Login required
router.post(
  "/getuser",fetchuser,async (req, res) => {
try {
   const userId=req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internel server error");
}
})
module.exports = router;
