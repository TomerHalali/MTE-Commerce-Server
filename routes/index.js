const router = require("express").Router();
const applicationRoutes = require("./routes/routes");
const constants = require("../constants/constants");

router.use("/api", applicationRoutes);
router.get("/", (req, res) => {
  res.send(constants.authConstants.HELLO);
});

module.exports = router;
