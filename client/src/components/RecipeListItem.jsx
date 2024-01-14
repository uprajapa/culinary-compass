import React from "react";
import "../../public/css/RecipeListItem.css";
import ImageWithFavoriteIcon from "./ImageWithFavoriteIcon";
const RecipeListItem = (props) => {
  const {
    recipe_name,
    chef_name,
    budget,
    time,
    cuisine,
    description,
    photo_link,
    id,
    favorite,
    handleFavorite,
  } = props;

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
          <p>
            {recipe_name} by {chef_name}
          </p>
        </div>
        <p>Time: {time} minutes</p>
        <p>Est Budget: ${budget}</p>
        <p>Cuisine: {cuisine}</p>
        <span className="description">Description: {description}</span>
      </div>
      <div></div>
    </div>
  );
};

export default RecipeListItem;
