import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import Login from "./pages/Login";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";

function App() {
  const { topRecipes  } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes()
  const { recipes } = useRecipes();
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
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home topRecipes={topRecipes} topThreeRecipes={topThreeRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/recipes" element={<Recipes recipes={recipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
