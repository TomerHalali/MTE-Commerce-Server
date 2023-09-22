let router = require("express").Router();
const Stores = require("../models/Stores");

const getStoreInformation = async (req, res) => {
    const store = await Stores.find({});
    if (store) {
        const storeInformation = {
            aboutText: store[0]._doc.aboutText,
            usefulLinks: store[0]._doc.usefulLinks,
            openingHours: store[0]._doc.openingHours,
            mediaLinks: store[0]._doc.mediaLinks,
            information: store[0]._doc.information,
            storeName: store[0]._doc.storeName,
            ourServices: store[0]._doc.ourServices,
            headerAddsTexts: store[0]._doc.headerAddsTexts,
            mainBannerUrl: store[0]._doc.mainBannerUrl
        };

        res.status(200).send(storeInformation);
    } else {
        res.sendStatus(404);
    }
};

router.get("/info", getStoreInformation);

module.exports = router;
