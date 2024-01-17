import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    load();
  }, []);

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

  return { recipes, setRecipes  };
};

export default useRecipes;
