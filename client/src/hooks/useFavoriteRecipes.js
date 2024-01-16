import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useFavoriteRecipes = (recipes) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    getFavoriteRecipes();
  }, [])

  const getFavoriteRecipes = async () => {
    // let recipes = [];
    let result = {};
    const email = localStorage.getItem("email");
    try {
      const user = await axios.get(`${base_url}/api/users/${email}`);
      const userId = user.data.user.id;
      const response = await axios.get(`${base_url}/api/recipes/favorite-recipes/${userId}`);
      if (response.status === 200) {
        const data = response.data.favoriteRecipes;
        data.map(async (recipe) => {
          console.log(recipe, recipes);
          const newRecipeData = recipes.find((item) => item.id == recipe.recipe_id)
          console.log(newRecipeData);
          // const newRecipe = newRecipeData.data.recipe;
          // recipes.push(newRecipe);

          result = { ...result, newRecipeData };

        })
        setFavoriteRecipes(result['recipes']);
      }
    } catch (err) {
      console.error("Error fetching cuisines:", err);
    }
  };

  return { favoriteRecipes };
};

export default useFavoriteRecipes;
