const mongoose = require("mongoose");

const ranksSchema = new mongoose.Schema({
  rankId: String,
  name: String,
});

module.exports = Ranks = mongoose.model("Ranks", ranksSchema);