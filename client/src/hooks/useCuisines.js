import { useState, useEffect } from "react";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useCuisines = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    getAllCuisines();
  }, [])

  const getAllCuisines = async () => {
    try {
      const response = await axios.get(`${base_url}/api/cuisines`);
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setCuisines(data);
      }
    } catch (error) {
      console.error("Error fetching cuisines:", err.response.data.error);
    }
  };

  return { cuisines };
};

export default useCuisines;
