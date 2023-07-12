let router = require("express").Router();
const jwt = require("jsonwebtoken");
const crypto = require("../actions/crypto");
const newDate = require("../actions/getDateAndTime");
const emailValidation = require("../actions/emailValidation");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/Users");
const constants = require("../constants/constants");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET);
};

const login = async (req, res) => {
  const email = req.body.email;

  if (emailValidation(email)) {
    const password = crypto.encryptString(req.body.password);
    const user = await User.findOne({ email: email, password: password });

    if (user) {
      const token = generateAccessToken({
        email: email,
      });
      const tokenResponse = {
        access_token: token,
      };
      res.status(200).send(tokenResponse);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(404);
  }
};

const registration = async (req, res) => {
  const payload = req.body;

  if (emailValidation(payload.email)) {
    const userExist = await User.findOne({ email: payload.email });
    let response = {
      userCreated: false,
      reason: `${constants.authConstants.REASOM} ${payload.email}`,
    };

    if (userExist) {
      res.status(200).send(response);
    } else {
      const allUsers = await User.find();
      const id = (allUsers.length + 1).toString();

      const user = new User({
        userId: id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: crypto.encryptString(payload.password),
        shippingAddress: "",
        billingInformation: "",
        phoneNumber: "",
        dateOfBirth: "",
        isApproval: true,
        createdOn: newDate,
        rankId: "",
        roleId: "",
      });

      user
        .save()
        .then(() => {
          response.userCreated = true;
          response.reason = constants.authConstants.SAVED;

          res.status(200).send(response);
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }
  } else {
    res.sendStatus(404);
  }
};

router.post("/login", login);
router.post("/registration", registration);

module.exports = router;
