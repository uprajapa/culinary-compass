import React from 'react';
import FoodCarousel from "../components/FoodCarousel";
import RecipeItemList from "../components/RecipeItemList";
import RecipeItem from "../components/RecipeItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

function Home({ users, message }) {


  return (
    <div className="home">
        <FoodCarousel />
        <RecipeItemList />
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