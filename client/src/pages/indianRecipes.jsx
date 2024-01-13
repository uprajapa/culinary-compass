import React from 'react';
import RecipeList from '../components/RecipeList';
import "../../public/css/recipe.css"

function IndianRecipes({ recipes, favorite, handleFavorite }) {
  console.log(recipes)
  return (
    <div className="recipe">
      <h1 className="title">Indian Recipes</h1>
      <RecipeList recipes={recipes} favorite={favorite} handleFavorite={handleFavorite}/>
    </div>
  )
};

export default IndianRecipes;