import React, { useState, useEffect } from 'react';
import FoodCarousel from "../components/FoodCarousel";
import RecipeItemList from "../components/RecipeItemList";
import RecipeItem from "../components/RecipeItem";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

function Home({ users, message }) {
  const [topRecipes, setTopRecipes] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:8080/api/topratedrecipes")
      .then((response) => setTopRecipes(response.data.recipes))
  }, [])

  return (
    <div className="home">
        <FoodCarousel />
        <RecipeItemList topRecipes={topRecipes} />
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