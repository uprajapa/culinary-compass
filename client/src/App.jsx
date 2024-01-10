import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import Login from "./pages/Login";
import useRecipes from "./hooks/useRecipes";

function App() {
  const { recipes } = useRecipes();
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
