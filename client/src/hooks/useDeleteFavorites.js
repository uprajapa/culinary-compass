import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useDeleteFavorites = (recipeId) => {

  const deleteFavorites = async () => {
    const email = localStorage.getItem("email");

    try {
      const user = await axios.get(`${base_url}/api/users/${email}`);
      const userId = user.data.user.id;
      
      const response = await axios.delete(`${base_url}/api/favorites/`, { data: { userId, recipeId } });
      
      if (response.status === 200) {
        const data = response.data;
      }
    } catch (err) {
      console.error("Error fetching cuisines:", err);
    }
    return
  }
  deleteFavorites();
};

export default useDeleteFavorites;