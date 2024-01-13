import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import IndianRecipes from "./pages/indianRecipes";
import KoreanRecipes from "./pages/koreanRecipes";
import MexicanRecipes from "./pages/mexicanRecipes";
import Login from "./pages/Login";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";
import useCuisines from "./hooks/useCuisines";
import useIndianRecipes from "./hooks/useIndianRecipes";
import useKoreanRecipes from "./hooks/useKoreanRecipes";
import useMexicanRecipes from "./hooks/useMexicanRecipe";

function App() {
  const { topRecipes  } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes()
  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();
  const { indianRecipes } = useIndianRecipes();
  const { koreanRecipes } = useKoreanRecipes();
  const { mexicanRecipes } = useMexicanRecipes();
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
          <Route path="/indianrecipes" element={<IndianRecipes recipes={indianRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/koreanrecipes" element={<KoreanRecipes recipes={koreanRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/mexicanrecipes" element={<MexicanRecipes recipes={mexicanRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
