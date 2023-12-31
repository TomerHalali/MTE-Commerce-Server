const mongoose = require("mongoose");

const StoresSchema = new mongoose.Schema({
    storeId: String,
    information: Array,
    usefulLinks: Array,
    openingHours: Array,
    aboutText: String,
    mediaLinks: Array,
    storeName: String,
    ourServices: Array,
    headerAddsTexts: Array,
    mainBannerUrl: String
});

module.exports = Stores = mongoose.model("Stores", StoresSchema);
