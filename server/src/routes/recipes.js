const express = require("express");
const router = express.Router();
const recipesQueries = require("../db/queries/recipes");

router.get("/", (req, res) => {
  recipesQueries
    .findAll()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/favorite-recipes/:id", (req, res) => {
  const { id } = req.params;

  recipesQueries
  .favoriteRecipes(id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  recipesQueries
    .newRecipe(data)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });
  
  router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    recipesQueries
      .findByUserId(id)
      .then((recipe) => {
        res.status(200).json(recipe);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;
  recipesQueries
    .findById(id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  recipesQueries
    .deleteById(id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { chef_name, recipe_name, budget, prep_time, cook_time, servings, description, ingredients, cooking_instructions, video_link, photo_link, cuisine_id, user_id } = req.body;
  recipesQueries
    .editById(id, chef_name, recipe_name, budget, prep_time, cook_time, servings, description, ingredients, cooking_instructions, video_link, photo_link, cuisine_id, user_id )
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;
