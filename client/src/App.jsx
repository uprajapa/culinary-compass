import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import IndianRecipes from "./pages/indianRecipes";
import KoreanRecipes from "./pages/koreanRecipes";
import MexicanRecipes from "./pages/mexicanRecipes";
import ItalianRecipes from "./pages/italianRecipes";
import JapaneseRecipes from "./pages/japaneseRecipes";
import PopularRecipes from "./pages/PopularRecipes";
import Login from "./pages/Login";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";
import useCuisines from "./hooks/useCuisines";
import useIndianRecipes from "./hooks/useIndianRecipes";
import useKoreanRecipes from "./hooks/useKoreanRecipes";
import useMexicanRecipes from "./hooks/useMexicanRecipe";
import useItalianRecipes from "./hooks/useItalianRecipes";
import useJapaneseRecipes from "./hooks/useJapaneseRecipes";
import usePopularRecipes from "./hooks/usePopularRecipes";
import CuisineCategory from "./pages/CuisineCategory";

function App() {
  const { topRecipes  } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes()
  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();
  // const { indianRecipes } = useIndianRecipes();
  // const { koreanRecipes } = useKoreanRecipes();
  // const { mexicanRecipes } = useMexicanRecipes();
  // const { italianRecipes } = useItalianRecipes();
  // const { japaneseRecipes } = useJapaneseRecipes();
  // const { popularRecipes } = usePopularRecipes();
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
          {/* <Route path="/indianrecipes" element={<IndianRecipes recipes={indianRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/cuisines/Korean" element={<KoreanRecipes recipes={koreanRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/mexicanrecipes" element={<MexicanRecipes recipes={mexicanRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/italianrecipes" element={<ItalianRecipes recipes={italianRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/japaneserecipes" element={<JapaneseRecipes recipes={japaneseRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} />
          <Route path="/cuisines/popular" element={<PopularRecipes recipes={popularRecipes} favorite={favorite} handleFavorite={handleFavorite}/>} /> */}
          <Route path="/cuisines/:id" element={<CuisineCategory favorite={favorite} handleFavorite={handleFavorite}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
