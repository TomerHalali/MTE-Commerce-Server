const mongoose = require("mongoose");

const filtersSchema = new mongoose.Schema({
  filterId: String,
  filterName: String,
  filterLabel: String,
  filterOptions: Array,
  categoryId: Array,
  sectionId: Array,
});

module.exports = Filters = mongoose.model("Filters", filtersSchema);