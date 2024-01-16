import React from "react";
import useFavoriteRecipes from "../hooks/useFavoriteRecipes";

export default function favoriteIds(favoriteRecipes) {
  let favoriteRecipesId = [];

  favoriteRecipes?.forEach(recipe => favoriteRecipesId.push(recipe.id));
  return favoriteRecipesId;
};