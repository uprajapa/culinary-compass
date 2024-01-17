import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useRecipes = (closeModalRecipe) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    load();
  }, []);

  const newRecipe = async (data) => {
    try {
      const response = await axios.post(`${base_url}/api/recipes/`, data);
      let newRecipeId = response.data.data.rows[0].id;
      if (response.data.success) {
        setError(false);
        setMessageError("");
        closeModalRecipe();
        window.location.href = `/recipes/${newRecipeId}`;
      } else {
        setError(true);
        setMessageError(response.data.message);

      }
    } catch (error) {
      setError(true);
      setMessageError(error);
    }
  };

  const load = async () => {
    try {
      const response = await axios.get(`${base_url}/api/recipes`);
      if (response.status === 200) {
        const data = response.data;

        setRecipes(data.recipes);
      }
    } catch (error) {
      console.error("Error fetching data:", err.response.data.error);
    }
  };

  return { recipes, newRecipe, error, messageError };
};

export default useRecipes;
