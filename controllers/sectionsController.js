let router = require("express").Router();
const Categories = require("../models/Categories");
const Sections = require("../models/Sections");

const getAllSections = async (req, res) => {
  const sections = await Sections.find({disabled : false});
  const categories = await Categories.find({disabled : false})

  const result = sections.map((section) => {

    const sectionCategories = categories.filter(category => {
        return category.sectionId === section.sectionId && category.parentCategory === ""
    });

    const categoriesWithSubCategories = sectionCategories.map(category => {
      const subCategories = categories.filter(subCategory => subCategory.parentCategory === category.categoryId);
      return {
        categoryId: category.categoryId,
        categoryName: category.name,
        subCategories: subCategories.map(subCategory => ({
          categoryId: subCategory.categoryId,
          categoryName: subCategory.name,
        })),
      };
    });

    return {
      sectionId : section.sectionId,
      sectionName: section.name,
      categories: categoriesWithSubCategories,
    };
  });

  res.status(200).send(result);

};

router.get("/sections", getAllSections);

module.exports = router;
