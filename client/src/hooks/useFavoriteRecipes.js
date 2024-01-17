import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useFavoriteRecipes = (recipes) => {
  let favoriteRecipes = [];

  const getFavoriteRecipes = async (recipes) => {
    const email = localStorage.getItem("email");
    try {
      const user = await axios.get(`${base_url}/api/users/${email}`);
      const userId = user.data.user.id;

      const response = await axios.get(`${base_url}/api/recipes/favorite-recipes/${userId}`);

      if (response.status === 200) {
        const data = response.data.favoriteRecipes;
        data.map((recipe) => {
          const newRecipeData = recipes.find((item) => item.id == recipe.recipe_id);
          favoriteRecipes.push(newRecipeData);
        })
      }
    } catch (err) {
      console.error("Error fetching cuisines:", err);
    }
    return favoriteRecipes;
  };
  return getFavoriteRecipes(recipes);
};

export default useFavoriteRecipes;
