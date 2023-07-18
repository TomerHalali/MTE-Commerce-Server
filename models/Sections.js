const mongoose = require("mongoose");

const SectionsSchema = new mongoose.Schema({
  sectionId: String,
  name: String,
  description: String,
  disabled: Boolean
});

module.exports = Sections = mongoose.model("Sections", SectionsSchema);