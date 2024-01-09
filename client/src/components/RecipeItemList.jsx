import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeItemList = (props) => {

  const { topRecipes } = props;
  
  const recipeListArray = topRecipes.map((recipe)=>
    <RecipeItem 
    key={recipe.id}
    recipe_name={recipe.recipe_name}
    chef_name={recipe.chef_name}
    time={recipe.cook_time}
    cuisine={recipe.cuisine}
    description={recipe.description}
    />
  );
  return(
    <ul>
      {recipeListArray}
    </ul>
  );
};

export default RecipeItemList;