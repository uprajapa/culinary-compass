import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useTopThreeRecipes = () => {
  const [topThreeRecipes, setTopThreeRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/topthreerecipes")
    .then((response) => setTopThreeRecipes(response.data.recipes))
      .catch(err => console.error("Error fetching recipes", err))
  }, []);

  return { topThreeRecipes }
};

export default useTopThreeRecipes;
