import React, { useState, useMemo, useEffect } from "react";
import "../../public/css/RecipeListItem.css";
import ImageWithFavoriteIcon from "./ImageWithFavoriteIcon";
import { Link } from "react-router-dom";

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
    favoriteRecipesIds
  } = props;

  // let isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    setIsFavorite(favoriteRecipesIds?.includes(id))
  }, [favoriteRecipesIds])


  return (
    <div className="recipe-list-item">
      <div className="profile-pic">
        <ImageWithFavoriteIcon
          imageUrl={photo_link}
          isfavorite={isFavorite}
          onClick={() => handleFavorite(id, isFavorite)}
        />
        {/* <img src={photo_link}/> */}
      </div>
      <div className="profile-info">
        <Link to={`/recipes/${id}`} reloadDocument>
          <div className="recipe-title">
            <p>
              {recipe_name} by {chef_name}
            </p>
          </div>
          <p>Time: {time} minutes</p>
          <p>Est Budget: ${budget}</p>
          <p>Cuisine: {cuisine}</p>
          <span className="description">Description: {description}</span>
        </Link>
      </div>

    </div>
  );
};
export default RecipeListItem;
