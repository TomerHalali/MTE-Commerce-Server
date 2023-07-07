let router = require("express").Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const constants = require("../constants/constants");
const crypto = require("../actions/crypto")
const dotenv = require("dotenv");
dotenv.config();
const User = require('../models/Users')


const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET);
};

const getAccessToken = (req, res) => {
  const token = generateAccessToken({
    emailAddress: req.headers[constants.authConstants.EMAIL_ADDRESS],
  });
  const tokenResponse = {
    access_token: token,
  };

  res.status(200).send(tokenResponse);
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = crypto.encryptString(req.body.password);
  const user = await User.findOne({email: email,password: password})
  user? res.status(200).send(user) : res.sendStatus(404)
  
};


router.post("/login", auth, login);
router.post("/token/getAccessToken", getAccessToken);


module.exports = router;
