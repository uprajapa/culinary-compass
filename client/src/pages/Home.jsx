import React from "react";
import FoodCarousel from "../components/FoodCarousel";
import RecipeList from "../components/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home({ handleFavorite, topRecipes, topThreeRecipes, favoriteRecipesIds }) {
  return (
    <div className="home">
      {topThreeRecipes.length && (
        <FoodCarousel topThreeRecipes={topThreeRecipes} />
      )}
      <RecipeList
        favoriteRecipesIds={favoriteRecipesIds}
        recipes={topRecipes}
        handleFavorite={handleFavorite}
      />
    </div>
  );
}

export default Home;
