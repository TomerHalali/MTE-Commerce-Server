let router = require("express").Router();
const Products = require("../models/Products");

const getProductsByFilters = async (req, res) => {
  const { sectionId } = req.query;
  const products = await Products.find({
    $or: [{ categories: `${sectionId}` }],
  });

  res.status(200).send(products);
};

router.get("/products", getProductsByFilters);

module.exports = router;
