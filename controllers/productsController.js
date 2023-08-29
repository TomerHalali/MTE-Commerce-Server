let router = require("express").Router();
const Products = require("../models/Products");

const getProductsBySectionId = async (req, res) => {
    const {sectionId} = req.query;
    const products = await Products.find({
        $or: [{categories: `${sectionId}`}],
    });

    res.status(200).send(products);
};

const getHotProducts = async (req, res) => {
    const products = await Products.find({
        variants: {
            $elemMatch: {
                type: 'status',
                value: 'hot'
            }
        }
    })

    res.status(200).send(products)
}

const getProductsOnSale = async (req, res) => {
    const products = await Products.find({
        promotionPrice: { $exists: true, $ne: "" }
    })

    res.status(200).send(products)
}

router.get("/products", getProductsBySectionId);
router.get("/hotProducts", getHotProducts);
router.get("/onSale", getProductsOnSale);

module.exports = router;
