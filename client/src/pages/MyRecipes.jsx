import React, { useState, useEffect } from 'react';
import "../../public/css/myrecipes.css"
import EditRecipe from '../components/EditRecipe';
import useRecipes from '../hooks/useRecipes';
import axios from 'axios';

function MyRecipes() {
  
  const { recipes, setRecipes } = useRecipes();

  const deleteRecipe = (id) => { 
   axios.delete(`http://localhost:8080/api/recipes/${id}`)
      .then((response) => console.log("Deleted recipe with id", id, response))
      .catch(err => console.error('Error deleting recipe', err))  
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  };

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
        {recipes.map(recipe => 
          <tr key={recipe.id} className="content-row">
            <td className="content-data">{recipe.recipe_name}</td>
            <td className="content-data"><EditRecipe/></td>
            <td className="content-data"><button onClick={()=> deleteRecipe(recipe.id)}>Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    
    )
  };
  
  export default MyRecipes;
  
  // const testRecipes = [
  //             {name: "Mexican Inspired Healthy One Pot Black Bean"}, 
  //             {name: "Indian Style Potato Vegetable Wrap"}, 
  //             {name: "Quick and Easy Chicken Curry"}
  //           ]
  // const [userRecipes, setUserRecipes] = useState(testRecipes);
  