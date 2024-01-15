import { React, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import "./App.css";

import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import Recipe from "./pages/recipe";
import Login from "./pages/Login";
import CuisineCategory from "./pages/CuisineCategory";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";
import useCuisines from "./hooks/useCuisines";
import dataReducer, { MODAL_LOGIN } from "./reducers/dataReducer";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    width: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
  },
};

Modal.setAppElement("#root");

function App() {
  const [state, dispatch] = useReducer(dataReducer, {
    isModalOpenLogin: false,
  });

  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();
  const { topRecipes } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes();

  const [favorite, setFavorite] = useState({});

  const handleFavorite = (recipeId) => {
    setFavorite((prevFavorite) => ({
      ...prevFavorite,
      [recipeId]: !prevFavorite[recipeId],
    }));
  };

  const closeModalLogin = () => {
    dispatch({ type: MODAL_LOGIN });
  };

  const openModalLogin = () => {
    dispatch({ type: MODAL_LOGIN });
  };

  return (
    <>
      <Router>
        <NavBar cuisines={cuisines} openModalLogin={openModalLogin} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                topRecipes={topRecipes}
                topThreeRecipes={topThreeRecipes}
                favorite={favorite}
                handleFavorite={handleFavorite}
              />
            }
          />
          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                favorite={favorite}
                handleFavorite={handleFavorite}
              />
            }
          />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/cuisines/:id" element={<CuisineCategory favorite={favorite} handleFavorite={handleFavorite}/>} />
        </Routes>
        <Modal
          isOpen={state.isModalOpenLogin}
          onRequestClose={closeModalLogin}
          contentLabel="Login Modal"
          style={customStyles}
        >
          <MdClose
            onClick={closeModalLogin}
            className="text-red-500 text-4xl bold cursor-pointer"
          />
          <Login closeModalLogin={closeModalLogin} />
        </Modal>
      </Router>
    </>
  );
}

export default App;
