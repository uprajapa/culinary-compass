import React from 'react';
import RecipeList from '../components/RecipeList';
import "../../public/css/recipe.css"

function Recipes({ recipes, favorite, handleFavorite }) {

  return (
    <div className="recipe">
      <h1 className="title">All Recipes</h1>
      <RecipeList recipes={recipes} favorite={favorite} handleFavorite={handleFavorite} />
    </div>
  );
}

export default Recipes;
