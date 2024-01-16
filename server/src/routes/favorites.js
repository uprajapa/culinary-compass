const express = require("express");
const router = express.Router();
const favorites = require("../db/queries/favorites");

router.post("/", (req, res) => {
  const { userId, recipeId } = req.body;
  console.log(req.body);
  favorites
    .addFavorites(userId, recipeId)
    .then((data) => {
      res.status(200).json(data.favorites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/", (req, res) => {
  const { userId, recipeId } = req.body;
  console.log(req.body);
  favorites
    .deleteFavorite(userId, recipeId)
    .then((data) => {
      res.status(200).json(data.favorites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;