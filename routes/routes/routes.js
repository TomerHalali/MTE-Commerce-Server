const router = require("express").Router();
const authController = require("../../controllers/authController");
const sectionsController = require("../../controllers/sectionsController")
const storeController = require("../../controllers/storeController")
const filterController = require("../../controllers/filterController")


router.use("/storeManagement", storeController);
router.use("/authManagement", authController);
router.use("/sectionsManagement", sectionsController);
router.use("/filtersManagement", filterController);


module.exports = router;
