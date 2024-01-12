import React from 'react';
import RecipeList from '../components/RecipeList';
import "../../public/css/recipe.css"

function Recipes({ recipes, favorite, handleFavorite }) {
  console.log(recipes)
  return (
    <div className="recipe">
      <h1 className="title">All Recipes</h1>
      <RecipeList recipes={recipes} favorite={favorite} handleFavorite={handleFavorite}/>
    </div>
    // <div className="m-8 border pt-32">
    //   {recipes &&
    //     recipes.map((recipe) => (
    //       <div
    //         key={recipe.id}
    //         className="flex flex-row m-4 border-b border-gray-500 pb-4"
    //       >
    //         <ImageWithFavoriteIcon
    //           imageUrl={recipe.photo_link}
    //           isfavorite={favorite[recipe.id]}
    //           onClick={() => handleFavorite(recipe.id)}
    //         />

    //         <div className="flex p-2 flex-col">
    //           <div className="flex flex-col">
    //             <div>
    //               <span className="font-bold text-5xl mr-5">Recipe Name:</span>
    //               <span className="text-4xl">{recipe.cuisine}</span>
    //             </div>
    //             <div className="mt-4">
    //               <span className="font-bold text-4xl mr-5">Chef's Name:</span>
    //               <span className="text-3xl">{recipe.chef_name}</span>
    //             </div>
    //           </div>

    //           <div className="flex flex-col mt-8">
    //             <div className="mt-4">
    //               <span className="font-bold text-4xl mr-5">Time:</span>
    //               <span className="text-3xl">{recipe.cook_time}</span>
    //             </div>
    //             <div className="mt-4">
    //               <span className="font-bold text-4xl mr-5">Budget:</span>
    //               <span className="text-3xl">{recipe.servings}</span>
    //             </div>
    //             <div className="mt-4">
    //               <span className="font-bold text-4xl mr-5">Cusine:</span>
    //               <span className="text-3xl">{recipe.cuisine}</span>
    //             </div>
    //             <div className="mt-4">
    //               <span className="font-bold text-4xl mr-5">Description:</span>
    //               <span className="text-3xl">{recipe.description}</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}

export default Recipes;
