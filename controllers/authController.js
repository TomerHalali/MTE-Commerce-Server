let router = require("express").Router();
const jwt = require("jsonwebtoken");
const crypto = require("../actions/crypto");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/Users");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET);
};


const login = async (req, res) => {
  const email = req.body.email;
  const password = crypto.encryptString(req.body.password);
  const user = await User.findOne({ email: email, password: password });

  if (user) {
    const token = generateAccessToken({
      email: email,
    });
    const tokenResponse = {
      access_token: token,
    };
    res.status(200).send(tokenResponse)
  } else {
    res.sendStatus(404);
  }
};

router.post("/login", login);

module.exports = router;
