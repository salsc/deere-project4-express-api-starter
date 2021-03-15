const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const RecipeModel = require("../models").Recipe;

// GET RECIPE DETAILS
router.get("/detail/:id", async (req, res) => {
  let recipe = await RecipeModel.findByPk(req.params.id);
  res.json({ recipe });
});

// GET ALL RECIPES
router.get("/", async (req, res) => {
  let allRecipes = await RecipeModel.findAll();
  res.json({ allRecipes });
});

// CREATE A NEW RECIPE
router.post("/", async (req, res) => {
  let newRecipe = await RecipeModel.create(req.body);
  res.json({ newRecipe });
});

// UPDATE A RECIPE
router.put("/detail/:id", async (req, res) => {
  let updatedRecipe = await RecipeModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let recipe = await RecipeModel.findByPk(req.params.id);
  res.json({ recipe });
});

// DELETE A RECIPE
router.delete("/detail/:id", async (req, res) => {
  await RecipeModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Recipe with id ${req.params.id} was deleted`,
  });
});

module.exports = router;