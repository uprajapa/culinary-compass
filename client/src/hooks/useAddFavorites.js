import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useAddFavorites = (recipeId) => {

  const addFavorite = async () => {
    const email = localStorage.getItem("email");
    try {
      const user = await axios.get(`${base_url}/api/users/${email}`);
      const userId = user.data.user.id;
      console.log(userId);
      const response = await axios.post(`${base_url}/api/favorites`, { userId, recipeId });
      console.log(response.data);
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        // setAddFavorite(data);
      }
    } catch (err) {
      console.error("Error fetching cuisines:", err);
    }
    return;
  }
  addFavorite();
};

export default useAddFavorites;