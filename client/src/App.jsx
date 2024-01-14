import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import Recipe from "./pages/recipe";
import Login from "./pages/Login";
import useRecipes from "./hooks/useRecipes";
import useCuisines from "./hooks/useCuisines";

function App() {
  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();

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
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
