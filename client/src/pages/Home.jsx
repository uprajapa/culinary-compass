import React from 'react';
import FoodCarousel from "../components/FoodCarousel";
import RecipeList from "../components/RecipeList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

function Home({ favorite, handleFavorite, topRecipes, topThreeRecipes }) {

  return (
    <div className="home">
        {topThreeRecipes.length && <FoodCarousel topThreeRecipes={topThreeRecipes}/>}
        <RecipeList recipes={topRecipes} favorite={favorite} handleFavorite={handleFavorite}/>
    </div>
  );
}

export default Home;
