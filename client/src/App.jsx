import { React, useReducer, useState, useSyncExternalStore } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import "./App.css";

import favoriteIds from "./helpers/favoriteIds";

import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import Recipe from "./pages/recipe";
import Login from "./pages/Login";
import MyRecipes from "./pages/MyRecipes";
import CuisineCategory from "./pages/CuisineCategory";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";
import useCuisines from "./hooks/useCuisines";
import useFavoriteRecipes from "./hooks/useFavoriteRecipes";

import dataReducer, { MODAL_LOGIN } from "./reducers/dataReducer";
import useAddFavorites from "./hooks/useAddFavorites";
import useDeleteFavorites from "./hooks/useDeleteFavorites";

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
  const [loader, setLoader] = useState(false);
  const [state, dispatch] = useReducer(dataReducer, {
    isModalOpenLogin: false,
  });

  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();
  const { topRecipes } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes();
  let { favoriteRecipes } = useFavoriteRecipes(recipes);
  let favoriteRecipesIds = favoriteIds(favoriteRecipes);
  console.log(`Fav Ids:`, favoriteRecipesIds);

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = async (recipeId, isFavorite) => {
    console.log(`Favorite:`, isFavorite);
    if (isFavorite) {
      useDeleteFavorites(recipeId);
    } else {
      useAddFavorites(recipeId);
    }
    favoriteRecipesIds = favoriteIds(favoriteRecipes);
    console.log(favoriteRecipesIds);
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
                favoriteRecipesIds={favoriteRecipesIds}
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
                favoriteRecipesIds={favoriteRecipesIds}
              />
            }
          />
          {localStorage.getItem("email") &&
            <Route
              path="/favorite-recipes"
              element={
                <FavoriteRecipes
                  favoriteRecipes={favoriteRecipes}
                  favorite={favorite}
                  favoriteRecipesIds={favoriteRecipesIds}
                  handleFavorite={handleFavorite}
                />
              }
            />
          }
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/cuisines/:id" element={<CuisineCategory favoriteRecipesIds={favoriteRecipesIds} favorite={favorite} handleFavorite={handleFavorite} />} />
          <Route path="/myrecipes" element={<MyRecipes />} />
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
