const jwt = require("jsonwebtoken");
const constants = require("../constants/constants");
const dotenv = require("dotenv");
dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers[constants.authConstants.AUTHORIZATION];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("errors.Unauthorized");

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("errors.Forbidden");

    next();
  });
}

module.exports = authenticateToken;
