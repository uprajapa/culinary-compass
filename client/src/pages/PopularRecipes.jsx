import React from 'react';
import RecipeList from '../components/RecipeList';
import "../../public/css/recipe.css"

function PopularRecipes({ recipes, favorite, handleFavorite }) {
  console.log(recipes)
  return (
    <div className="recipe">
      <h1 className="title">Popular Recipes</h1>
      {recipes.length == 0 && <h1 className="title">No Recipes Yet. Why don't you add one?</h1>}
      <RecipeList recipes={recipes} favorite={favorite} handleFavorite={handleFavorite}/>
    </div>
  )
};

export default PopularRecipes;