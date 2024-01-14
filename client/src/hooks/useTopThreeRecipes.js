import React, { useEffect, useState } from 'react';
import axios from 'axios';
const base_url = import.meta.env.VITE_API_URL;

const useTopThreeRecipes = () => {
  const [topThreeRecipes, setTopThreeRecipes] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/api/topthreerecipes`)
      .then((response) => setTopThreeRecipes(response.data.recipes))
      .catch(err => console.error("Error fetching recipes", err))
  }, []);

  return { topThreeRecipes }
};

export default useTopThreeRecipes;
