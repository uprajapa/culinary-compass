import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useRecipe = (id) => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const response = await axios.get(`${base_url}/api/recipes/${id}`);
      if (response.status === 200) {
        const data = response.data;
        const link = data.recipe.video_link;

        if ((link).includes("youtube")) {
          const recipeArray = (link).split('=');
          const videoLink = "https://www.youtube.com/embed/" + recipeArray[1];

          data.recipe.video_link = videoLink;
        } else if ((data.recipe.video_link).includes("youtu.be")) {

          const pos = link.indexOf("be/") + "be/".length;
          const video_id = link.substring(pos, link.indexOf("?", pos));
          const videoLink = "https://www.youtube.com/embed/" + video_id;

          data.recipe.video_link = videoLink;
        }

        setRecipe(data.recipe);
      }
    } catch (err) {
      console.error("Error fetching recipe:", err.response.data.error);
    }
  };

  return { recipe };
};

export default useRecipe;