const router = require("express").Router();
const authController = require("../../controllers/authController");
const sectionsController = require("../../controllers/sectionsController")
const storeController = require("../../controllers/storeController")

router.use("/storeManagement", storeController);
router.use("/authManagement", authController);
router.use("/sectionsManagement", sectionsController);


module.exports = router;
