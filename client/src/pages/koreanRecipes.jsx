import React from 'react';
import RecipeList from '../components/RecipeList';
import "../../public/css/recipe.css"

function KoreanRecipes({ recipes, favorite, handleFavorite }) {
  console.log(recipes)
  return (
    <div className="recipe">
      <h1 className="title">Korean Recipes</h1>
      <RecipeList recipes={recipes} favorite={favorite} handleFavorite={handleFavorite}/>
    </div>
  )
};

export default KoreanRecipes;