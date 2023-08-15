let router = require("express").Router();
const Filters = require("../models/Filters");

const getFiltersByParentId = async (req, res) => {
  const id = req.query.id;
  const allFilters = await Filters.find({
    $or: [{ categoryId: `${id}` }, { sectionId: `${id}` }],
  });

  const filterOptionsObj = allFilters.map((filter) => {
    return {
      filterName: filter.filterName,
      filterLabel: filter.filterLabel,
      filterOptions: filter.filterOptions,
    };
  });

  res.status(200).send(filterOptionsObj);
};

router.get("/filters", getFiltersByParentId);

module.exports = router;
