const router = require("express").Router();
const authController = require("../../controllers/authController");
const sectionsController = require("../../controllers/sectionsController")
const storeController = require("../../controllers/storeController")
const filtersController = require("../../controllers/filtersController")
const productController = require("../../controllers/productsController")


router.use("/storeManagement", storeController);
router.use("/authManagement", authController);
router.use("/sectionsManagement", sectionsController);
router.use("/filtersManagement", filtersController);
router.use("/productsManagement", productController);


module.exports = router;
