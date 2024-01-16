import React from "react";
import useFavoriteRecipes from "../hooks/useFavoriteRecipes";

export default function favoriteIds() {
  const { favoriteRecipes } = useFavoriteRecipes();

  const favoriteRecipesId = [];

  favoriteRecipes.forEach(recipe => favoriteRecipesId.push(recipe.id));

  return favoriteRecipesId;
};