let router = require("express").Router();
const Stores = require("../models/Stores");

const getStoreInformation = async (req, res) => {
  const store = await Stores.find();

  res.status(200).send(store[0]);
};

router.get("/info", getStoreInformation);

module.exports = router;
