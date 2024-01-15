import React, { useState } from 'react';
import "../../public/css/myrecipes.css"
function MyRecipes() {
  const testRecipes = [
              {name: "Mexican Inspired Healthy One Pot Black Bean"}, 
              {name: "Indian Style Potato Vegetable Wrap"}, 
              {name: "Quick and Easy Chicken Curry"}
            ]
  const [userRecipes, setUserRecipes] = useState(testRecipes);

  
  return(
    <div className="stuff">
      <h1 className="title">My Recipes</h1>
      <table className="table">
        <tbody> 
          <tr>
            <td>Recipes</td>
            <td>Edit Recipe </td>
            <td>Delete Recipe</td>
          </tr>
        {userRecipes.map(recipe => 
          <tr key={recipe.name}>
            <td>{recipe.name}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    
    )
  };
  
  export default MyRecipes;
  