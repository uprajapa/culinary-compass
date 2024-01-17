import { React, useEffect, useMemo, useReducer, useState, useSyncExternalStore } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import "./App.css";

import favoriteIds from "./helpers/favoriteIds";

import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import Recipes from "../src/pages/Recipes";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import MyRecipes from "./pages/MyRecipes";
import CuisineCategory from "./pages/CuisineCategory";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import useRecipes from "./hooks/useRecipes";
import useTopRecipes from "./hooks/useTopRecipes";
import useTopThreeRecipes from "./hooks/useTopThreeRecipes";
import useCuisines from "./hooks/useCuisines";
import useFavoriteRecipes from "./hooks/useFavoriteRecipes";
import useAddFavorites from "./hooks/useAddFavorites";
import useDeleteFavorites from "./hooks/useDeleteFavorites";

import dataReducer, { MODAL_LOGIN, MODAL_RECIPE } from "./reducers/dataReducer";
import RecipeForm from "./components/RecipeForm";

const customStylesLogin = {
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

const customStylesRecipe = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    width: "100rem",
    top: "55%",
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
    isModalOpenRecipe: false,
  });

  const { recipes } = useRecipes();
  const { cuisines } = useCuisines();
  const { topRecipes } = useTopRecipes();
  const { topThreeRecipes } = useTopThreeRecipes();

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [favoriteRecipesIds, setFavoriteRecipesIds] = useState([]);

  useEffect(() => {
    if (recipes.length > 0) {
      useFavoriteRecipes(recipes)
        .then((favs) => {
          setFavoriteRecipes(favs);
          setFavoriteRecipesIds(favoriteIds(favs));
        })
        .catch((err) => console.error(err));
    }
  }, [recipes]);

  const handleFavorite = async (recipeId, isFavorite) => {
    if (isFavorite) {
      useDeleteFavorites(recipeId);
    } else {
      useAddFavorites(recipeId);
    }
    useFavoriteRecipes(recipes)
      .then((favs) => {
        setFavoriteRecipes(favs);
        setFavoriteRecipesIds(favoriteIds(favs));
        debugger
      })
      .catch((err) => console.error(err));
  };

  const closeModalLogin = () => {
    dispatch({ type: MODAL_LOGIN });
  };

  const openModalLogin = () => {
    dispatch({ type: MODAL_LOGIN });
  };

  const closeModalRecipe = () => {
    dispatch({ type: MODAL_RECIPE });
  };

  const openModalRecipe = () => {
    dispatch({ type: MODAL_RECIPE });
  };

  return (
    <>
      <Router>
        <NavBar
          cuisines={cuisines}
          openModalLogin={openModalLogin}
          openModalRecipe={openModalRecipe}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                topRecipes={topRecipes}
                topThreeRecipes={topThreeRecipes}
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
                  favoriteRecipesIds={favoriteRecipesIds}
                  handleFavorite={handleFavorite}
                />
              }
            />
          }
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route
            path="/cuisines/:id"
            element={
              <CuisineCategory
                favoriteRecipesIds={favoriteRecipesIds}
                handleFavorite={handleFavorite}
              />
            }
          />
          <Route path="/my-recipes" element={<MyRecipes />} />
        </Routes>
        <Modal
          isOpen={state.isModalOpenLogin}
          onRequestClose={closeModalLogin}
          contentLabel="Login Modal"
          style={customStylesLogin}
        >
          <MdClose
            onClick={closeModalLogin}
            className="text-red-500 text-4xl bold cursor-pointer"
          />
          <Login closeModalLogin={closeModalLogin} />
        </Modal>
        <Modal
          isOpen={state.isModalOpenRecipe}
          onRequestClose={closeModalRecipe}
          contentLabel="Recipe Modal"
          style={customStylesRecipe}
        >
          <MdClose
            onClick={closeModalRecipe}
            className="text-red-500 text-4xl bold cursor-pointer"
          />
          <RecipeForm closeModalRecipe={closeModalRecipe} />
        </Modal>


        <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
            <span className="text-lg lg:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Culinary Compass</a>. All Rights Reserved.
            </span>
            {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul> */}
          </div>
        </footer>

      </Router>


    </>
  );
}

export default App;
