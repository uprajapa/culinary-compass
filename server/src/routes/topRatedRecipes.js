const express = require("express");
const router = express.Router();
const recipesQueries = require("../db/queries/recipes");

router.get("/", (req, res) => {
  recipesQueries
    .findTopRatedRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;