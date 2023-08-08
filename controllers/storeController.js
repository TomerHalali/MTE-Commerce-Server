let router = require("express").Router();
const Stores = require("../models/Stores");

const getStoreInformation = async (req, res) => {
  const store = await Stores.find();
  if (store) {
    const storeInformation = {
        aboutText: store[0].aboutText,
        usefulLinks: store[0].usefulLinks,
        openingHours: store[0].openingHours,
        mediaLinks: store[0].mediaLinks,
        information: store[0].information,
        storeName: store[0].storeName,
        ourServices: store[0].ourServices
    };

    res.status(200).send(storeInformation);
  } else {
    res.sendStatus(404);
  }
};

router.get("/info", getStoreInformation);

module.exports = router;
