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
        </div>
        <p>Time: {time} minutes</p>
        <p>Est Budget:</p>
        <p>Cuisine: {cuisine}</p>
        <span className="description">Description: {description}</span>
      </div>
      <p>Time: {time} minutes</p>
      <p>Est Budget:</p>
      <p>Cuisine: {cuisine}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default RecipeListItem;
