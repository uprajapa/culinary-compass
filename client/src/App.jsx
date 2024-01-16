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
    width: "600px",
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
  // let favoriteRecipesIds = [];
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

  const [favorite, setFavorite] = useState(false);

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
          <Route
            path="/cuisines/:id"
            element={
              <CuisineCategory
                favorite={favorite}
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
      </Router>
    </>
  );
}

export default App;
