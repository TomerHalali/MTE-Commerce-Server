const router = require("express").Router();
const authController = require("../../controllers/authController");


router.use("/authManagement", authController);


module.exports = router;