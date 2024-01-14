import React from 'react';
import RecipeList from '../components/RecipeList';
import useCuisineCategory from '../hooks/useCuisineCategory';
import "../../public/css/recipe.css"
import { useParams } from 'react-router-dom';

function CuisineCategory({ favorite, handleFavorite }) {
  const { id } = useParams();
  
  const { cuisineCategory } = useCuisineCategory(id);
  console.log(cuisineCategory)
  return (
    <div className="recipe">
      <h1 className="title">{id} Recipes</h1>
      {cuisineCategory.length == 0 && <h1 className="title">No Recipes Yet. Why don't you add one?</h1>}
      {cuisineCategory.length > 0 && <RecipeList recipes={cuisineCategory} favorite={favorite} handleFavorite={handleFavorite}/>}
    </div>
  )
};

export default CuisineCategory;