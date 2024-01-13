import React from 'react';
import RecipeListItem from './RecipeListItem';

const RecipeList = (props) => {

  const { recipes, favorite, handleFavorite } = props;
  
  const recipeListArray = recipes.map((recipe)=>
    <RecipeListItem 
    key={recipe.id}
    id={recipe.id}
    recipe_name={recipe.recipe_name}
    chef_name={recipe.chef_name}
    budget={recipe.budget}
    time={recipe.cook_time}
    cuisine={recipe.cuisine_name}
    description={recipe.description}
    photo_link={recipe.photo_link}
    favorite={favorite}
    handleFavorite={handleFavorite}
    />
  );
  return(
    <ul>
      {recipeListArray}
    </ul>
  );
};

export default RecipeList;