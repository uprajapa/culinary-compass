import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";

import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";

import Login from "./pages/Login";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";
import useCuisines from "./hooks/useCuisines";
import CuisineCategory from "./pages/CuisineCategory";




















function App() {
  
  
  
  
  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();
  const { topRecipes  } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes()
  
  
  
  const [favorite, setFavorite] = useState({});
  const handleFavorite = (recipeId) => {
    setFavorite((prevFavorite) => ({
      ...prevFavorite,
      [recipeId]: !prevFavorite[recipeId],
    }));
  };

  
  
  
  
  
  
  
  return (
    <>
      <Router>
        <NavBar cuisines={cuisines} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home topRecipes={topRecipes} topThreeRecipes={topThreeRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/recipes" element={<Recipes recipes={recipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/cuisines/:id" element={<CuisineCategory favorite={favorite} handleFavorite={handleFavorite}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
