<<<<<<< HEAD
import React from "react";
import "../../public/css/RecipeListItem.css";

const RecipeListItem = (props) => {
  const { recipe_name, chef_name, time, cuisine, description, photo_link } =
    props;

  return (
    <div className="recipe-list-item">
      <div className="profile-pic">
        <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Hearty-Black-Bean-Quesadillas-V3.jpg" />
      </div>
      <div className="profile-info">
        <div className="recipe-title">
          <p>
            {recipe_name} by {chef_name}
          </p>
=======
import React from 'react';
import ImageWithFavoriteIcon from './ImageWithFavoriteIcon';
import "../../public/css/recipelistitem.css";

const RecipeListItem = (props) => {
  const { recipe_name, chef_name, budget, time, cuisine, description, photo_link, id, favorite, handleFavorite } = props;
  
  return (
  <div className="recipe-list-item">
        <div className="profile-pic">
        <ImageWithFavoriteIcon
              imageUrl={photo_link}
              isfavorite={favorite[id]}
              onClick={() => handleFavorite(id)}
            />
          {/* <img src={photo_link}/> */}
        </div>
        <div className="profile-info">
          <div className="recipe-title">
            <p>{recipe_name} by {chef_name}</p>
          </div>
          <p>Time: {time} minutes</p>
          <p>Est Budget: ${budget}</p>
          <p>Cuisine: {cuisine}</p>
          <span className="description">Description: {description}</span>
        </div>
        <div>

>>>>>>> origin
        </div>
      </div>
<<<<<<< HEAD
      <p>Time: {time} minutes</p>
      <p>Est Budget:</p>
      <p>Cuisine: {cuisine}</p>
      <p>Description: {description}</p>
    </div>
  );
=======

  )
>>>>>>> origin
};

export default RecipeListItem;
