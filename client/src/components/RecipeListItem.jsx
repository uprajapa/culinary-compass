import React from "react";
import "../../public/css/RecipeListItem.css";

const RecipeListItem = (props) => {
  const { recipe_name, chef_name, time, cuisine, description, photo_link } =
    props;

  return (
    <div className="recipe-list-item">
      <div className="profile-pic">
        <img src={photo_link} alt="Recipe" />
      </div>
      <div className="profile-info">
        <div className="recipe-title">
          <p>
            {recipe_name} by {chef_name}
          </p>
        </div>
        <p>Time: {time} minutes</p>
        {/* Add your additional information here */}
        <p>Cuisine: {cuisine}</p>
        <span className="description">Description: {description}</span>
      </div>
    </div>
  );
};

export default RecipeListItem;
