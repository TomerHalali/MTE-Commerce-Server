const router = require("express").Router();
const authController = require("../../controllers/authController");
const topicsController = require("../../controllers/topicsController")


router.use("/authManagement", authController);
router.use("/topicsManagement", topicsController);


module.exports = router;