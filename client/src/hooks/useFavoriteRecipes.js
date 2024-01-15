import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useFavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    getFavoriteRecipes();
  }, [])

  const getFavoriteRecipes = async () => {
    let recipes = [];
    let result = {};
    const email = localStorage.getItem("email");
    try {
      const user = await axios.get(`${base_url}/api/users/${email}`);
      const userId = user.data.user.id;
      const response = await axios.get(`${base_url}/api/recipes/favorite-recipes/${userId}`);
      if (response.status === 200) {
        const data = response.data.favoriteRecipes;
        data.map(async (recipe) => {
          const newRecipeData = await axios.get(`${base_url}/api/recipes/${recipe.recipe_id}`);
          const newRecipe = newRecipeData.data.recipe;

          recipes.push(newRecipe);

          result = { ...result, recipes };

          setFavoriteRecipes(result['recipes']);
        })
      }
    } catch (err) {
      console.error("Error fetching cuisines:", err);
    }
  };

  return { favoriteRecipes };
};

export default useFavoriteRecipes;
