import React, { useState, useEffect } from 'react';
import FoodCarousel from "../components/FoodCarousel";
import RecipeList from "../components/RecipeList";
import RecipeItem from "../components/RecipeListItem";
import axios from 'axios';
import useTopRecipes from '../hooks/useTopRecipes';
import useTopThreeRecipes from '../hooks/useTopThreeRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

function Home({ users, message }) {
  
  const { topRecipes  } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes()

  return (
    <div className="home">
        {topThreeRecipes.length && <FoodCarousel topThreeRecipes={topThreeRecipes}/>}
        <RecipeList topRecipes={topRecipes} />
    </div>
  );
}

export default Home;

{/* {message ? (
  <p>{message}</p>
) : (
  <ul>
    {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
  </ul>
)} */}