import React from 'react';
import RecipeList from '../components/RecipeList';
import "../../public/css/recipe.css"

function Recipes({ recipes, handleFavorite, favoriteRecipes }) {

  return (
    <div className="recipe">
      <h1 className="title">All Recipes</h1>
      {recipes.length == 0 && <h1 className="title">No Recipes Yet. Why don't you add one?</h1>}
      <RecipeList favoriteRecipes={favoriteRecipes} recipes={recipes} handleFavorite={handleFavorite} />
    </div>
  );
}

export default Recipes;