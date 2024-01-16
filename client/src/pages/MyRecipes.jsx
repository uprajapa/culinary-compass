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
          <tr className="title-row">
            <td className="title-data">Recipes</td>
            <td className="title-data">Edit Recipe </td>
            <td className="title-data">Delete Recipe</td>
          </tr>
        {userRecipes.map(recipe => 
          <tr key={recipe.name} className="content-row">
            <td className="content-data">{recipe.name}</td>
            <td className="content-data"><button>Edit</button></td>
            <td className="content-data"><button>Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    
    )
  };
  
  export default MyRecipes;
  