let router = require("express").Router();
const Filters = require("../models/Filters");

const getFiltersBySectionIdOrCategoryId = async (req, res) => {
  const id = req.query.id;
  const filters = await Filters.find({
    $or: [{ categoryId: `${id}` }, { sectionId: `${id}` }],
  });

  res.status(200).send(filters);
};

router.get("/filters", getFiltersBySectionIdOrCategoryId);

module.exports = router;
